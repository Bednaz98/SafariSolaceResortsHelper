import { Event as event } from "../../../classes-interface/api-entities"
import BasicButton from "../../../SafariSolaceStyleTools/basicbutton"
import BasicText from "../../../SafariSolaceStyleTools/basictext"

export default function EventFormatSingle(props:{event: event, index:number, allEvents?: event[], setAllEvents?: Function, filter?: string}){
    
    //prepare the event properties currently being mapped 
    const {id,title,desc,startTime,endTime,location,status} = props.event  
    
    const starttimeFormatted = FormattedTime(startTime)
    const endTimeFormatted = FormattedTime(endTime)

    function EventCancel(id: string){
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
            <BasicText text={`start time: ${starttimeFormatted}`}/>
            <BasicText text={`end time: ${endTimeFormatted}`}/>
            <BasicText text={`location: ${location}`}/>
            <BasicText text={`status: ${status}`}/>
            <BasicButton title={"Cancel Event"} onPress={()=>EventCancel(props.event.id)}></BasicButton>
        </> 

        :
        
        null}
    </>)
}