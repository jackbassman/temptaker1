let tempF = 0
let temp = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempF)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(temp)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(control.deviceSerialNumber())
})
basic.forever(function () {
    temp = input.temperature()
    tempF = temp * 2
    tempF += 30
})
