/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program ...
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})
