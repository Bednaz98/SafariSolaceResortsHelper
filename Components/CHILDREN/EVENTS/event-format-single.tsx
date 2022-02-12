import { Event as Evvent } from "../../../CLASSES-AND-INTERFACES/api-entities"
import BasicButton from "../../../STYLING-TOOLS/basicbutton"
import BasicText from "../../../STYLING-TOOLS/basictext"
import FormattedTime from "../date-formatting"



export default function FormatSingleEvent(props:{event: Evvent, index:number, allEvents?: Evvent[], setAllEvents?: Function, filter?: string}){
    const {id,title,desc,startTime,endTime,location,status} = props.event  //the properties for each event which comes from all events
    
    //const startTimeToDate = new Date(startTime)
    //const date = startTimeToDate.getDay()
    //const endTimeToDate = new Date(endTime)
    const startTimeFormatted = FormattedTime(startTime)
    const endTimeFormatted = FormattedTime(endTime)
    //console.log("🚀 ~ file: format-single-event.tsx ~ line 14 ~ FormatSingleEvent ~ endTimeFormatted", endTimeFormatted)

    function CancelEvent(id: string){
        const newEventList = props.allEvents.map(event=> {
            if(event.id === id) {event.status = "Cancelled"; return(event)} 
            else{return event} 
        })
        props.setAllEvents([...newEventList])
    }

    return (<>
        {props.filter === id || !props.filter ?
        <>
            <BasicText text={`\n\n Event ${props.index + 1}`}/>
            <BasicText text={`id: ${id}`}/>
            <BasicText text={`title: ${title}`}/>
            <BasicText text={`description: ${desc}`}/>
            <BasicText text={`start time: ${startTimeFormatted}`}/>
            <BasicText text={`end time: ${endTimeFormatted}`}/>
            <BasicText text={`location: ${location}`}/>
            <BasicText text={`status: ${status}`}/>
            <BasicButton title={"Cancel Event"} onPress={()=>CancelEvent(props.event.id)}></BasicButton>
        </> 

        :
        
        null}
    </>)
}