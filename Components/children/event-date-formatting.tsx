export default function FormattedStartTime(time: Date){
    time.toLocaleString()
    const hours = time.getHours()
    let AMorPM = ""
    if (hours < 1 || hours > 12){
        time.setHours(time.getHours() -12)
    }
    if (hours < 12) AMorPM = 'AM'
    else AMorPM = 'PM'
    const formattedTime = time.toLocaleTimeString().slice(0,-3)
    return(`${formattedTime} ${AMorPM}`)
}