input.onButtonPressed(Button.A, function () {
    Color = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
})
input.onButtonPressed(Button.B, function () {
    Direction2 = Direction2 * -1
})
let Direction2 = 0
let Color = 0
let Pixel = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let Item = 0
Color = neopixel.colors(NeoPixelColors.Blue)
Direction2 = 1
basic.forever(function () {
    Pixel.setPixelColor(Item, Color)
    Pixel.setPixelColor((Item + 8) % 24, Color)
    Pixel.setPixelColor((Item + 16) % 24, Color)
    Item += Direction2
    Item = Item % 24
    if (Item < 0) {
        Item = 24
    }
    Pixel.show()
    Pixel.clear()
})
