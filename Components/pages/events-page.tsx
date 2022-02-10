import { useState } from "react"
import { EventAPIHandler, EventHandlerInterface } from "../../classes-interface/eventhandler"

export default function EventsPage(){
    const eventhandle: EventHandlerInterface = new EventAPIHandler(true)
    const [allEvents, setCancelledEvents] = useState(async()=>{await eventhandle.getAllEvents()})
    console.log("🚀 ~ file: events-page.tsx ~ line 7 ~ EventsPage ~ allEvents", allEvents)


    return(
        // getAllEvents()
        // cancelEvent()
        // createEvent()
        // getEventByID()

    )
}

// export interface Event{
//     id: string
//     title: string
//     desc: string
//     startTime: number
//     endTime: number
//     location: string
//     status: "On Schedule" | "Cancelled"
// }