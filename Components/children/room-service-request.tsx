import React from "react";
import { View } from "react-native";
import BasicModal from "../../SafariSolaceStyleTools/basicmodal";




export default function RoomServiceRequest(props){

    return(<View>
        <BasicModal openTitle ={(props?.openTitle ?? "null open title")} child={props.child}/>
    </View>)
}