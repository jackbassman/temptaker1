let tempF = 0
let temp = 0
function From_C_to_F (num: number) {
    tempF = temp * 2
    tempF += 30
    return tempF
}
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
})
