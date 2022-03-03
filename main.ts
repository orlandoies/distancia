basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 39)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 5 && maqueen.Ultrasonic(PingUnit.Centimeters) <= 8) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 24)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 5) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
    }
})
