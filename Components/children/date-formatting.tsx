export default function FormattedTime(time: Date){
    time.toLocaleString()
    const hours = time.getHours()
    const day = time.getDay()
    console.log("🚀 ~ file: date-formatting.tsx ~ line 5 ~ FormattedTime ~ day", day)
    let AMorPM = ""
    if (hours < 1 || hours > 12){
        time.setHours(time.getHours() -12)
    }
    if (hours < 12) AMorPM = 'AM'
    else AMorPM = 'PM'
    const formattedTime = time.toLocaleTimeString().slice(0,-3)
    return(`${formattedTime} ${AMorPM} ${day}`)
}

export function GetDateFromNum(num: number){
    const date = new Date(num * 1000).toUTCString()
    //console.log(date)
    return date
}