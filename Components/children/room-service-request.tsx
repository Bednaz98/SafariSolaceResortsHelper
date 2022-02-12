import React, { useState } from "react";
import { View } from "react-native";
import { Offering, ServiceRequest } from "../../CLASSES-AND-INTERFACES/api-entities";
import RoomServiceHandlerAPIHandler from "../../CLASSES-AND-INTERFACES/room-service-handler";
import BasicButton from "../../STYLING-TOOLS/basicbutton";
import BasicModal from "../../STYLING-TOOLS/basicmodal";
import BasicText from "../../STYLING-TOOLS/basictext";




export default function RoomServiceRequest(props){
    const initServiceRequest:ServiceRequest = props.serviceRequest
    const [serviceRequest, setServiceRequest] = useState(initServiceRequest)


    const handler = new RoomServiceHandlerAPIHandler()
    

    function SwitchButtonDisplay(){
        if(serviceRequest.status == "Ordered" )          return <BasicButton title={' Start Order'} onPress={()=>{ /*handler.markAsProcessed(serviceRequest.id);*/ }} />
        else if(serviceRequest.status ==  "Processing" ) return <BasicButton title={' Mark order as complete'} onPress={()=>{ /*handler.markAsCompleted(serviceRequest.id);*/ }} />
        else                                             return <></>
    }

    function SwitchStatusDisplay(){
        return(<View style={{flexDirection:"row"}}>
            <BasicText text={"Status"}/><BasicText text={serviceRequest?.status ?? "Ordered"}/><SwitchButtonDisplay/>
        </View>)
    }

    function GetOfferingString(){
        let tempString:string= '';
        try {
            if(serviceRequest.requestedOffering?.length <1){return 'In valid request in the system'}
            for(let i =0; i < serviceRequest.requestedOffering.length; i ++){
                if(i==0){tempString+= `\t-${serviceRequest.requestedOffering[i].desc}`;}
                else{tempString+= `\n\t-${serviceRequest.requestedOffering[i].desc}`;}
            }
            if(!tempString) return 'In valid request in the system'
            return 'Hello'
        } catch (error) {
            return 'In valid request in the system'
        }
    }


    function RequestDisplay(){
        const dateDisplay = (new Date(serviceRequest.created))
        return(
        <>
            <BasicText text={`Room: ${serviceRequest.room}`}/>
            <BasicText text={`Created: ${dateDisplay.toDateString()}, at ${dateDisplay.toLocaleTimeString()}`}/>
            <View><BasicText text={'Requested Offerings:'}/><BasicText text={GetOfferingString()}/></View>
            <SwitchStatusDisplay/>
        </>)
    }

    return(
    <>
        <BasicModal openTitle ={(props?.openTitle ?? "null open title")} child={<RequestDisplay/>}/>
    </>)
}