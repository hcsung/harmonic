class Sheets {

    note = {
        "C_" : [ 0, 32,  65, 130, 261, 523 ],
        "C#" : [ 0, 34,  69, 138, 277, 554 ],
        "D_" : [ 0, 36,  73, 146, 293, 587 ],
        "D#" : [ 0, 38,  77, 155, 311, 622 ],
        "E_" : [ 0, 41,  82, 164, 329, 659 ],
        "F_" : [ 0, 43,  87, 174, 349, 698 ],
        "F#" : [ 0, 46,  92, 185, 369, 739 ],
        "G_" : [ 0, 49,  98, 196, 392, 784 ],
        "A_" : [ 0, 55, 110, 220, 440, 880 ],
        "A#" : [ 0, 58, 116, 233, 466, 932 ],
        "B_" : [ 0, 61, 123, 246, 493, 987 ],
        "XX" : [ 0,  0,   0,   0,   0,   0 ],
    }

    pika = [
        [ this.note['XX'][0], 4],

        [ this.note['G_'][4], 1 ], [ this.note['F#'][4], 1 ], [ this.note['G_'][4], 1 ], [ this.note['A_'][4], 1 ],
        [ this.note['G_'][4], 2 ], [ this.note['XX'][0], 2 ],
        [ this.note['G_'][4], 1 ], [ this.note['F#'][4], 1 ], [ this.note['G_'][4], 1 ], [ this.note['A_'][4], 1 ],
        [ this.note['G_'][4], 2 ], [ this.note['XX'][0], 2 ],
        [ this.note['G_'][4], 1 ], [ this.note['G_'][4], 2 ], [ this.note['G_'][4], 1 ], [ this.note['A_'][4], 2 ],
        [ this.note['A#'][4], 2 ], [ this.note['B_'][4], 2 ], [ this.note['G_'][4], 3 ], [ this.note['XX'][0], 3 ],

        [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 2 ], [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 1 ],
        [ this.note['C_'][5], 2 ], [ this.note['C_'][5], 1 ], [ this.note['B_'][4], 2 ], [ this.note['C_'][5], 2 ],
        [ this.note['B_'][4], 2 ], [ this.note['A_'][4], 2 ], [ this.note['G_'][4], 2 ], [ this.note['A_'][4], 2 ],
        [ this.note['G_'][4], 1 ], [ this.note['A_'][4], 2 ], [ this.note['A_'][4], 1 ], [ this.note['G_'][4], 2 ],
        [ this.note['A_'][4], 2 ], [ this.note['B_'][4], 2 ],

        [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 2 ], [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 1 ],
        [ this.note['C_'][5], 2 ], [ this.note['C_'][5], 1 ], [ this.note['B_'][4], 2 ], [ this.note['C_'][5], 2 ],
        [ this.note['B_'][4], 2 ], [ this.note['A_'][4], 2 ], [ this.note['G_'][4], 2 ], [ this.note['A_'][4], 2 ],
        [ this.note['G_'][4], 1 ], [ this.note['A_'][4], 2 ], [ this.note['A_'][4], 1 ], [ this.note['G_'][4], 2 ],
        [ this.note['A_'][4], 2 ], [ this.note['B_'][4], 2 ],

        [ this.note['XX'][0], 2 ], [ this.note['E_'][4], 2 ], [ this.note['E_'][4], 2 ], [ this.note['F_'][4], 2 ],
        [ this.note['G_'][4], 2 ], [ this.note['C_'][4], 2 ], [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 2 ],
        [ this.note['A_'][4], 3 ], [ this.note['G_'][4], 3 ], [ this.note['F_'][4], 7 ], [ this.note['XX'][0], 4 ],

        [ this.note['XX'][0], 2 ], [ this.note['D_'][4], 2 ], [ this.note['D_'][4], 2 ], [ this.note['E_'][4], 2 ],
        [ this.note['F_'][4], 2 ], [ this.note['B_'][3], 2 ], [ this.note['B_'][4], 2 ], [ this.note['A_'][4], 2 ],
        [ this.note['G_'][4], 3 ], [ this.note['A_'][4], 3 ], [ this.note['G_'][4], 7 ], [ this.note['XX'][0], 4 ],

        [ this.note['XX'][0], 2 ], [ this.note['E_'][4], 2 ], [ this.note['E_'][4], 2 ], [ this.note['F_'][4], 2 ],
        [ this.note['G_'][4], 2 ], [ this.note['C_'][4], 2 ], [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 2 ],
        [ this.note['A_'][4], 3 ], [ this.note['G_'][4], 3 ], [ this.note['F_'][4], 3 ], [ this.note['XX'][0], 1 ],
        [ this.note['F_'][4], 2 ], [ this.note['G_'][4], 2 ], [ this.note['A_'][4], 2 ], [ this.note['B_'][4], 4 ],
        [ this.note['G_'][4], 4 ], [ this.note['A_'][4], 4 ], [ this.note['B_'][4], 4 ], [ this.note['C_'][5], 9 ],
        [ this.note['XX'][0], 2 ],

        [ this.note['C_'][5], 2 ], [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 2 ], [ this.note['A_'][4], 4 ],
        [ this.note['C_'][5], 4 ], [ this.note['D_'][5], 2 ], [ this.note['C_'][5], 4 ], [ this.note['G_'][4], 11],
        [ this.note['XX'][0], 2 ],

        [ this.note['C_'][5], 2 ], [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 2 ], [ this.note['A_'][4], 4 ],
        [ this.note['C_'][5], 4 ], [ this.note['D_'][5], 2 ], [ this.note['C_'][5], 4 ], [ this.note['G_'][4], 11],
        [ this.note['XX'][0], 2 ],

        [ this.note['C_'][5], 2 ], [ this.note['C_'][5], 2 ], [ this.note['B_'][4], 2 ], [ this.note['A_'][4], 4 ],
        [ this.note['C_'][5], 4 ], [ this.note['D_'][5], 4 ], [ this.note['C_'][5], 2 ], [ this.note['D_'][5], 2 ],
        [ this.note['E_'][5], 2 ], [ this.note['D#'][5], 2 ], [ this.note['E_'][5], 2 ], [ this.note['C_'][5], 3 ],
        [ this.note['XX'][0], 1 ], [ this.note['C_'][5], 2 ], [ this.note['D_'][5], 2 ], [ this.note['E_'][5], 2 ],
        [ this.note['F_'][5], 4 ], [ this.note['A_'][4], 4 ], [ this.note['B_'][4], 4 ], [ this.note['D_'][5], 4 ],
        [ this.note['C_'][5], 9 ], [ this.note['XX'][0], 3 ]
    ];
}
