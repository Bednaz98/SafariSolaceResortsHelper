import { useState } from "react"
import { FlatList, ScrollView, View, Text } from "react-native"
import { Event } from "../../CLASSES-AND-INTERFACES/api-entities"
import EventAPIHandler, { EventHandlerInterface } from "../../CLASSES-AND-INTERFACES/eventhandler"
import BasicButton from "../../STYLING-TOOLS/basicbutton"
import CreateEventOption from "../CHILDREN/EVENTS/events-create-option"
import FormatSingleEvent from "../CHILDREN/EVENTS/event-format-single"
import GetEventByID from "../CHILDREN/EVENTS/event-get-by-id"
import EventFormatSingle from "../CHILDREN/EVENTS/event-format-single"

export default function EventsPage(){
    const eventhandle: EventHandlerInterface = new EventAPIHandler(true)
    const dummyEvents: Event[] = [{
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
