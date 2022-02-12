import { Event as Evvent } from "../../../classes-interface/api-entities"

export default function UpdateAllEventsState(props){

    const startTimeFix = props.startTime.getTime() % 86400 //find an event's start time by number of seconds after the start of the day
    const endTimeFix = props.endTime.getTime() % 86400 
    props.startTime = startTimeFix + props.date.getTime() //add to the calender date
    props.endTime = endTimeFix + props.date.getTime()
    //const readable = new Date(startTimeFix)
    console.log("🚀 ~ file: update-allEvents-state.tsx ~ line 6 ~ UpdateAllEventsState ~ startTimeFix", props.endTime)

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
    //console.log("🚀 ~ file: event-creation-option.tsx ~ line 26 ~ UpdateEventList ~ props.allEvents", props.allEvents)

    props.setAllEvents([...props.allEvents]) //update parent state. The [...] is needed to create a new array in memory!!

}