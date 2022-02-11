import { useEffect, useState } from "react";
import { ProgressViewIOSComponent } from "react-native";
import EventAPIHandler, {EventHandlerInterface} from "../../classes-interface/eventhandler";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../../SafariSolaceStyleTools/basicinputtext";


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