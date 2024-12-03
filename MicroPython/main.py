"""
Created by: Caleb Andreas
Created on: Nov 2024
This program makes the lights on the robotbit a traffic light.
"""

from microbit import *
import neopixel

# variables
neopixelStrip: neopixel.Strip = 0

while True:
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
