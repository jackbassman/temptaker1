temp = 0
tempF = 0

def on_forever():
    global temp, tempF
    temp = input.temperature()
    tempF = temp * 2
    tempF += 30
    basic.show_number(tempF)
basic.forever(on_forever)
