export default function FormattedTime(time: number){
    const date = new Date(time)
    const hours = date.getHours()
    //const day = date.toUTCString()
    //console.log("🚀 ~ file: date-formatting.tsx ~ line 5 ~ FormattedTime ~ day", day)
    let AMorPM = ""
    if (hours < 1 || hours > 12){
        date.setHours(hours - 12)
    }
    if (hours < 12) AMorPM = 'AM'
    else AMorPM = 'PM'
    //const formattedTime = date.toLocaleTimeString().slice(0,-3)
    const formattedTime = date.toDateString()
    return(`${formattedTime} ${AMorPM}`)
    //return (date.toUTCString())
}

export function GetDateFromNum(num: number){
    const date = new Date(num * 1000).toUTCString()
    //console.log(date)
    return date
}