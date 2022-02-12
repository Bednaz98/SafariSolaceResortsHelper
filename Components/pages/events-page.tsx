import { useState } from "react"
import { FlatList, ScrollView, View, Text } from "react-native"
import { Event } from "../../classes-interface/api-entities"
import EventAPIHandler, { EventHandlerInterface } from "../../classes-interface/eventhandler"
import BasicButton from "../../SafariSolaceStyleTools/basicbutton"
import CreateEventOption from "../children/EVENTS/events-create-option"
import FormatSingleEvent from "../children/EVENTS/event-format-single"
import GetEventByID from "../children/EVENTS/event-get-by-id"

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
    //map all events into a scroll list
    function FormattedEventsList(){
        const formattedEvents = allEvents.map((event, index) => {return <FormatSingleEvent event={event} index={index} allEvents={allEvents} setAllEvents={setAllEvents} filter={filteredEventID}/>})        
        return(
            <View>
                <ScrollView>
                {formattedEvents}
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
