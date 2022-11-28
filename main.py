row = 0
col = 0
rychlost_zmeny_jasu = 100

def on_forever():
    global col, row
    col = randint(0, 4)
    row = randint(0, 4)
    if led.point_brightness(col, row) == 0:
        for jas in range(256):
            led.plot_brightness(col, row, jas)
            control.wait_micros(rychlost_zmeny_jasu)
    else:
        for jas2 in range(256):
            led.plot_brightness(col, row, 255 - jas2)
            control.wait_micros(rychlost_zmeny_jasu)
basic.forever(on_forever)
