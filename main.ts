let row = 0
let col = 0
let rychlost_zmeny_jasu = 100
basic.forever(function () {
    col = randint(0, 4)
    row = randint(0, 4)
    if (led.pointBrightness(col, row) == 0) {
        for (let jas = 0; jas <= 255; jas++) {
            led.plotBrightness(col, row, jas)
            control.waitMicros(rychlost_zmeny_jasu)
        }
    } else {
        for (let jas = 0; jas <= 255; jas++) {
            led.plotBrightness(col, row, 255 - jas)
            control.waitMicros(rychlost_zmeny_jasu)
        }
    }
})
