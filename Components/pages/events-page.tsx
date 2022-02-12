import { useState } from "react"
import { ScrollView, View } from "react-native"
import { Event as event } from "../../classes-interface/api-entities"
import EventAPIHandler, { EventHandlerInterface } from "../../classes-interface/eventhandler"
import EventFormatSingle from "../children/events/event-format-single"
import GetEventByID from "../children/events/event-get-by-id"
import CreateEventOption from "../children/events/events-create-option"

export default function EventsPage(){
    const eventhandle: EventHandlerInterface = new EventAPIHandler(true)
    const dummyEvents: event[] = [{
            id: 'dummyevent1',
            title: 'title',
            desc: 'desc',
            startTime: 100000,
            endTime: 2000000,
            location: 'location',
            status: "On Schedule"
        },
        {
            id: 'dummyevent2',
            title: 'title2',
            desc: 'desc2',
            startTime: 3000000,
            endTime: 4000000,
            location: 'location2',
            status: "Cancelled"
        }
    ]
    const [allEvents, setAllEvents] = useState(dummyEvents)
    const [filteredEventID, setFilteredEventID] = useState<string>("")
    
    /**map all events into a scrolling list */
    function FormattedEventsList(){

        const eventsArrayFormat = allEvents.map((event, index) => {return <EventFormatSingle event={event} index={index} allEvents={allEvents} setAllEvents={setAllEvents} filter={filteredEventID}/>})        
        return(
            <View>
                <ScrollView>
                {eventsArrayFormat}
                </ScrollView>
            </View>
        )
    }
    return(
        <>
            <GetEventByID setFilteredEventID={setFilteredEventID}/>
            <CreateEventOption allEvents={allEvents} setAllEvents={setAllEvents}/>
            <FormattedEventsList/>
        </>
    )
}
