import { useEffect, useState } from "react";
import { ProgressViewIOSComponent } from "react-native";
import EventAPIHandler, {EventHandlerInterface} from "../../../CLASSES-AND-INTERFACES/eventhandler";
import BasicButton from "../../../STYLING-TOOLS/basicbutton";
import BasicInputText from "../../../STYLING-TOOLS/basicinputtext";


export default function GetEventByID(props:{setFilteredEventID: Function}){
    const [eventID, setEventID] = useState<string>("")
    useEffect(()=>{props.setFilteredEventID(eventID)}, [eventID])
    return(
        <>
            {/* <BasicButton title={"Search For An Event"} onPress={()=>FilterEvents()}/> */}
            <BasicInputText value={eventID} onChangeText={setEventID} placeholder={'Event ID'}/>
        </>
    )
}