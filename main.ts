let temp = 0
let tempF = 0
basic.forever(function () {
    temp = input.temperature()
    tempF = temp * 2
    tempF += 30
    basic.showNumber(tempF)
})
