basic.forever(function () {
    for (let y = 0; y <= 2; y++) {
        for (let x = 0; x <= 2; x++) {
            if (2 - x == 2 || 2 + (y - x) == 2) {
                led.plot(2 + x, 2 - (y - x))
                led.plot(2 - x, 2 + (y - x))
            }
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
