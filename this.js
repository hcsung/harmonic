const sheets = new Sheets();

let EQ = [];

function row(tb, i) {
    let tr = tb.getElementsByTagName('tr');

    if (i < 0 || i >= tr.length)
        return undefined;
    return tr.item(i);
}

function col(tr, i) {
    let td = tr.getElementsByTagName('td');

    if (i < 0 || i >= td.length)
        return undefined;
    return td.item(i);
}

class Equalizer {

    row = 8;
    col = 16;
    active = 0;

    constructor() {
        this.tb = document.getElementById('eq');
        this.active = 0;

        // init EQ matrix
        for (let i = 0; i < this.col; i++) {
            let arr = [];

            for (let j = 0; j < this.row; j++)
                arr.push(0);

            for (let j = 0; j < this.row - i; j++)
                arr[j] = 1;

            EQ.push(arr);
        }
    }

    update() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                let tr = row(this.tb, this.row - j);
                let td = col(tr, i);
                td.classList.remove('visible');
                if (EQ[i][j])
                    td.classList.add('visible');
            }
        }
    }

    change(e) {
        let rect = this.tb.getBoundingClientRect();
        let w = rect.width;
        let h = rect.height;
        let x = rect.x;
        let y = rect.y;
        let uw = w / this.col;
        let uh = h / (this.row + 1);
        let i = parseInt((e.clientX - x) / uw);
        let j = parseInt((e.clientY - y) / uh);

        j = this.row - j;

        if (i < 0 || i >= this.col || j >= this.row)
            return;

        for (let n = 0; n < this.row; n++)
            EQ[i][n] = 0;

        for (let n = 0; n <= j; n++)
            EQ[i][n] = 1;

        this.update();
    }

    draw() {
        let tr = document.createElement('tr');

        // header
        for (let i = 0; i < this.col; i++) {
            let th = document.createElement('th');
            th.textContent = i + 1;
            tr.appendChild(th);
        }

        this.tb.appendChild(tr);

        // body
        for (let i = 0; i < this.row; i++) {
            tr = document.createElement('tr');

            for (let j = 0; j < this.col; j++)
                tr.appendChild(document.createElement('td'));

            this.tb.appendChild(tr);
        }

        this.update();
    }
}

class Player {
    duration = 104; // ms
    playing = 0;
    volume = 5;
    ctx = undefined;

    start() {
        this.playing = 1;
    }

    stop() {
        this.playing = 0;
    }

    is_playing() {
        return this.playing;
    }

    set_volume(vol) {
        this.volume = vol;
    }

    make_sound(freq, vol, dur) {
        if (freq < 20 || !vol || !this.playing)
            return;

        // The AudioContext must be resumed (or created) after a user gesture on the page
        if (this.ctx == undefined)
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();

        let osc = this.ctx.createOscillator();
        let gan = this.ctx.createGain();

        osc.connect(gan);
        gan.connect(this.ctx.destination);

        osc.frequency.value = freq;
        gan.gain.value = this.volume ? vol * this.volume : 0;

        // console.log('making sound at ' + freq + ' Hz for ' + dur + ' ms');

        osc.start();
        setTimeout(() => osc.stop(), dur);
    }

    harmonics(base, count, dur) {
        for (let i = 0; i < count; i++) {
            let freq = base * (i + 1);
            let vol = 0;

            EQ[i].forEach(j => { vol += j; });

            this.make_sound(freq, vol / 400, dur);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async play(sheet) {
        for (let i = 0; i < sheet.length && this.playing; i++) {
            let note = sheet[i];
            let freq = note[0];
            let ms = note[1] * this.duration;

            this.harmonics(freq, EQ.length, ms);
            await this.sleep(ms);
        }
        return this.playing;
    }
}

function is_mobile() {
    if (/Android|iPhone|iPad|IEMobile/i.test(navigator.userAgent))
        return true;
    return false;
}

function alert(msg, dur = 2500) {
    let obj = document.getElementsByClassName('alert')[0];

    obj.textContent = msg;
    obj.style.opacity = 1;

    setTimeout(() => { obj.style.opacity = 0; }, dur);
}

window.onload = function (e) {
    let eq = new Equalizer();
    let player = new Player();

    eq.draw();

    ['mousedown', 'touchstart'].forEach(e => {
        document.addEventListener(e, function () { eq.active = 1; });
    });
    ['mouseup', 'touchend'].forEach(e => {
        document.addEventListener(e, function () { eq.active = 0; });
    });
    document.addEventListener('click', e => {
        eq.change(e);
    });
    ['mousemove', 'touchmove'].forEach(e => {
        document.addEventListener(e, function (e) {
            if (eq.active)
                eq.change(e);
        });
    });


    if (is_mobile())
        alert("Don't forget to turn off silent mode ;)");

    let play = document.getElementById('play');

    play.addEventListener('click', function (e) {
        if (e.repeat)
            return

        if (this.classList.contains('playing')) {
            player.stop();
            play.classList.remove('playing');
            play.textContent = 'Play';
            return;
        }

        player.start();
        play.classList.add('playing');
        play.textContent = 'Stop';

        setTimeout(async function () {
            while (player.is_playing())
                await player.play(sheets.pika);
        }, 0);
    });

    let vol = document.getElementById('vol');
    let icon = document.getElementsByClassName('vol icon')[0];

    vol.addEventListener('change', function () {
        player.set_volume(vol.value);
        if (vol.value == 0)
            icon.classList.add('swap');
        else
            icon.classList.remove('swap');
    });
};
