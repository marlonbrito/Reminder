import { View } from "./View.js";
import { Emitter } from "./Emitter.js";

const Timer = {
    
    time: 60 * 60,
    currentTime: 0,
    interval: null,

    timeToMinutes: time => Math.floor(time / 60),
    timeToSeconds: time => time % 60,

    FormatTime: time => String(time).padStart(2, '0'),

    init(time) {
        Emitter.emit('countdow-start')

        Timer.time = time || Timer.time
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)

    },
    countdown() {
        Timer.currentTime = Timer.currentTime - 1
        const minutes = Timer.FormatTime(Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.FormatTime(Timer.timeToSeconds(Timer.currentTime))
        View.render({
            minutes,
            seconds

        })

        if (Timer.currentTime === 0) {
            clearInterval(Timer.interval)
            Emitter.emit('countdown-end')
            return;
        }


    }
}
export { Timer }