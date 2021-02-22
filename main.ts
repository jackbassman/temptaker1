input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempF)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(temp)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(control.deviceSerialNumber())
})
let temp = 0
let tempF = 0
radio.setGroup(1)
basic.forever(function () {
    temp = input.temperature()
    tempF = temp * 2
    tempF += 30
    radio.sendNumber(tempF)
})
