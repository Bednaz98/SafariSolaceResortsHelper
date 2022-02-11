import { Event as Evvent } from "../../classes-interface/api-entities"

export default function UpdateAllEventsState(props){
    const newEvent: Evvent = {
        id:'random',
        title:props.title,
        desc:props.desc,
        startTime:props.startTime,
        endTime:props.endTime,
        location:props.location,
        status:"On Schedule"
    }    
    //const allEventsClone = props.allEvents
    props.allEvents.push(newEvent)
    console.log("🚀 ~ file: event-creation-option.tsx ~ line 26 ~ UpdateEventList ~ props.allEvents", props.allEvents)

    props.setAllEvents([...props.allEvents]) //update parent state. The [...] is needed to create a new array in memory!!

}