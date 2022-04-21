input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
})
