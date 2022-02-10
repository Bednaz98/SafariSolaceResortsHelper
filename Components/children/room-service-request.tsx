import React from "react";
import { View } from "react-native";
import { Offering, ServiceRequest } from "../../classes-interface/api-entities";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicModal from "../../SafariSolaceStyleTools/basicmodal";
import BasicText from "../../SafariSolaceStyleTools/basictext";




export default function RoomServiceRequest(props){

    const serviceRequest:ServiceRequest = props.serviceRequest

    function SwitchButtonDisplay(){
        if(serviceRequest.status == "Ordered" )          return <BasicButton title={' Start Order'} onPress={()=>{}} />
        else if(serviceRequest.status ==  "Processing" ) return <BasicButton title={' Mark order as complete'} onPress={()=>{}} />
        else                                             return <></>
    }

    function SwitchStatusDisplay(){
        return(<View style={{flexDirection:"row"}}>
            <BasicText text={"Status"}/><BasicText text={serviceRequest.status}/><SwitchButtonDisplay/>
        </View>)
    }

    function GetOfferingString(){
        let tempString:string= '';
        for(let i =0; i < serviceRequest.requestedOffering.length; i ++){
            if(i==0){tempString+= `\t-${serviceRequest.requestedOffering[i].desc}`;}
            else{tempString+= `\n\t-${serviceRequest.requestedOffering[i].desc}`;}
        }
        return tempString
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