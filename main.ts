enum PingUnit {
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

enum RgbColors {
    //% block=red
    Red = 0x00FF00,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0xFF0000,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

enum RgbUltrasonics {
    //% block=left
    Left = 0x00,
    //% block=right
    Right = 0x01,
    //% block=all
    All = 0x02
}

enum ColorEffect {
    //% block=none
    None = 0x00,
    //% block=breathing
    Breathing = 0x01,
    //% block=rotate
    Rotate = 0x02,
    //% block=flash
    Flash = 0x03
}

enum DHT11Type {
    //% block="temperature(℃)" 
    DHT11_temperature_C = 0,
    //% block="humidity(0~100)"
    DHT11_humidity = 1,
}

enum _selectpin {
    //% block="Apin"
    Apin = 0,
    //% block="Bpin"
    Bpin = 1,
    //% block="Dpin"
    Dpin = 2,
}

enum RemoteButton {
    //% block=A
    A = 0x45,
    //% block=B
    B = 0x46,
    //% block=C
    C = 0x47,
    //% block=D
    D = 0x44,
    //% block=UP
    UP = 0x40,
    //% block=+
    Add = 0x43,
    //% block=LEFT
    Left = 0x07,
    //% block=OK
    Ok = 0x15,
    //% block=RIGHT
    Right = 0x09,
    //% block=DOWN
    Down = 0x19,
    //% block=-
    EQ = 0x0d,
    //% block=0
    NUM0 = 0x16,
    //% block=1
    NUM1 = 0x0c,
    //% block=2
    NUM2 = 0x18,
    //% block=3
    NUM3 = 0x5e,
    //% block=4
    NUM4 = 0x8,
    //% block=5
    NUM5 = 0x1c,
    //% block=6
    NUM6 = 0x5a,
    //% block=7
    NUM7 = 0x42,
    //% block=8
    NUM8 = 0x52,
    //% block=9
    NUM9 = 0x4A,
}


enum IrPins {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P3 = 4,
    P4 = 5,
    P5 = 17,
    P6 = 12,
    P7 = 11,
    P8 = 18,
    P9 = 10,
    P10 = 6,
    P11 = 26,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
    P16 = 16,
    P19 = 0,
    P20 = 30,
}

enum _rockerpin {
    //% block="Xpin"
    Xpin = 0,
    //% block="Ypin"
    Ypin = 1
}

enum rotation_direction {
    //% block="none"
    none = 0,
    //% block="clockwise"
    clockwise = 1,
    //% block="counter-clockwise"
    counterclockwise = 2,
    //% block="180-degree"
    one_eighty_degree = 3,
}

enum ledon_off {
    //% block="on"
    _on = 1,
    //% block="off"
    _off = 0,
}

enum on_off {

    //% block="on"
    _on = 1,
    //% block="off"
    _off = 0,
}

enum _selectlight {
    //% block="_yellow"
    _yellow = 0,
    //% block="_red"
    _red = 1,
    //% block="_green"
    _green = 2,
}

enum _selectcolor {
    //% block="_blue"
    _blue = 0,
    //% block="_red"
    _red = 1,
    //% block="_green"
    _green = 2,
}

enum run_turn {

    //% block="forward"
    forward = 0,
    //% block="reverse"
    reverse = 1,
}

enum LcdBacklight {
    //% block="on"
    _on = 1,
    //% block="off"
    _off = 0,
}

enum Item {
    //% block="on"
    _on = 1,
    //% block="off"
    _off = 2,
    //% block="clear"
    _clear = 3,
}

enum Select {
    //% block="on"
    _on = 0,
    //% block="off"
    _off = 1,
    //% block="clear"
    _clear = 2,
}

//% color="#FFA500" weight=10 icon="\uf2c9" block="Sensor:bit"
namespace sensors {
    //% blockId=actuator_buzzer0 block="actuator_buzzer0 pin ：%pin|status %status"   group="有源蜂鸣器"
    //% weight=70
    //% subcategory="执行器"
    export function actuator_buzzer0(pin: DigitalPin, status: on_off): void {
        pins.digitalWritePin(pin, status)
    }

    //% blockId=actuator_buzzer1 block="actuator_buzzer1 pin ：%pin|freq %freq"   group="无源蜂鸣器"
    //% weight=70
    //% subcategory="执行器"
    export function actuator_buzzer1(pin: AnalogPin, freq: number): void {
        pins.analogWritePin(pin, freq)
    }

    
}
