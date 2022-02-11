import { Event as Evvent } from "../../classes-interface/api-entities"
import BasicButton from "../../SafariSolaceStyleTools/basicbutton"
import BasicText from "../../SafariSolaceStyleTools/basictext"
import FormattedStartTime from "./event-date-formatting"

export default function FormatSingleEvent(props:{event: Evvent, index:number, allEvents?: Evvent[], setAllEvents?: Function, filter?: string}){
    const {id,title,desc,startTime,endTime,location,status} = props.event   
    
    const startTimeToDate = new Date(startTime)
    const endTimeToDate = new Date(endTime)
    const startTimeFormatted = FormattedStartTime(startTimeToDate)
    const endTimeFormatted = FormattedStartTime(endTimeToDate)

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