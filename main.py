tempF = 0
temp = 0

def on_button_pressed_a():
    basic.show_number(tempF)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_number(temp)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    basic.show_number(control.device_serial_number())
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_forever():
    global temp, tempF
    temp = input.temperature()
    tempF = temp * 2
    tempF += 30
basic.forever(on_forever)
