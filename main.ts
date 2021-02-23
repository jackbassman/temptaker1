input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempF)
})
input.onButtonPressed(Button.B, function () {
    tempLOCAL = input.temperature()
    tempLOCAL += tempLOCAL * 2
    tempLOCAL += 30
    basic.showNumber(tempLOCAL)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(control.deviceSerialNumber())
})
let temp = 0
let tempLOCAL = 0
let tempF = 0
radio.setGroup(1)
basic.forever(function () {
    temp = input.temperature()
    tempF = temp * 2
    tempF += 30
    radio.sendNumber(tempF)
})
