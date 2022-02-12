import { useEffect, useState } from "react";
import BasicInputText from "../../../SafariSolaceStyleTools/basicinputtext";


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