import { useEffect, useState } from "react"
import { FlatList, ScrollView, View, Text } from "react-native"
import { Event } from "../../classes-interface/api-entities"
import EventAPIHandler, { EventHandlerInterface } from "../../classes-interface/eventhandler"
import BasicButton from "../../SafariSolaceStyleTools/basicbutton"
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext"
import GetColor, { borderRadius, Color, margin, paddingRadius } from "../../SafariSolaceStyleTools/styleconfig"
import CreateEventOption from "../children/create-event-option"
import FormatSingleEvent from "../children/format-single-event"
import GetEventByID from "../children/get-event-by-ID"

export default function EventsPage(){
    const eventhandle: EventHandlerInterface = new EventAPIHandler(false)
    const dummyEvents: Event[] = [] /* = [{
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
    ] */
    const [allEvents, setAllEvents] = useState(dummyEvents)
    const [filteredEventID, setFilteredEventID] = useState<string>("")

    useEffect(() => {
        setAll()
    }), []

    async function setAll(){
        const events = await eventhandle.getAllEvents()
        setAllEvents(events)
    }

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
        <View >
                <BasicText text={"Manage events"} textType={TextType.Title}/>
                <GetEventByID setFilteredEventID={setFilteredEventID}/>
                <CreateEventOption allEvents={allEvents} setAllEvents={setAllEvents}/>
                <FormattedEventsList/>
        </View>)
}
