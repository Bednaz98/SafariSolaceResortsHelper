import { useState } from "react";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../../SafariSolaceStyleTools/basicinputtext";
import BasicModal from "../../SafariSolaceStyleTools/basicmodal";
import { Event as Evvent } from "../../classes-interface/api-entities"
import UpdateAllEventsState from "./update-allEvents-state";

export default function CreateEventOption(props:{allEvents: Evvent[], setAllEvents: Function}){

    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [startTime, setStart] = useState<number>()
    const [endTime, setEnd] = useState<number>()
    const [location, setLocation] = useState<string>("")

    const createEventStates = {title: title, desc: desc, startTime: startTime, endTime: endTime, location: location, allEvents: props.allEvents, setAllEvents: props.setAllEvents}

    function InputFields(props){
        return(
            <>
                <BasicInputText value={title} onChangeText={setTitle} placeholder={'title'}/>
                <BasicInputText value={desc} onChangeText={setDesc} placeholder={'description'}/>
                <BasicInputText value={startTime ?? ''} onChangeText={setStart} placeholder={'start time'} keyboardType={'numeric'}/>
                <BasicInputText value={endTime ?? ''} onChangeText={setEnd} placeholder={'end time'}/>
                <BasicInputText value={location} onChangeText={setLocation} placeholder={'location'}/>
                <BasicButton onPress={()=>UpdateAllEventsState(props)} title={'Update Event List'}/>
            </>
        )
    }

    return(
        <BasicModal child={InputFields(createEventStates)} openTitle={"Create Event"}/>
    )
}
