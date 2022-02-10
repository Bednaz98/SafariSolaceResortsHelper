import { useState } from "react"
import { FlatList, ScrollView, View, Text } from "react-native"
import { Event } from "../../classes-interface/api-entities"
import { EventAPIHandler, EventHandlerInterface } from "../../classes-interface/eventhandler"
import CreateEventOption from "../children/create-event-option"
import FormatSingleEvent from "../children/format-single-event"

export default function EventsPage(){
    const eventhandle: EventHandlerInterface = new EventAPIHandler(true)

    const dummyEvents: Event[] = [{
            id: 'dummyevent1',
            title: 'title',
            desc: 'desc',
            startTime: 100,
            endTime: 200,
            location: 'location',
            status: "On Schedule"
        },
        {
            id: 'dummyevent2',
            title: 'title2',
            desc: 'desc2',
            startTime: 300,
            endTime: 400,
            location: 'location2',
            status: "Cancelled"
        }
    ]
    const [allEvents, setAllEvents] = useState(dummyEvents)

    //map all events into a scroll list
    function FormattedEventsList(){
        const formattedEvents = allEvents.map((event, index) => {return <FormatSingleEvent event={event} index={index}/>})        
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
            <CreateEventOption allEvents={allEvents} setAllEvents={setAllEvents}/>
            <FormattedEventsList/>
        </>
    )
}

// getAllEvents()
        // cancelEvent()
        // createEvent()
        // getEventByID()