import React, { useContext } from "react";
import { View } from "react-native";
import { appContext } from "../../classes-interface/app-conext";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import LogoutButton from "../pages/logoutButton";





export default function NavBar(props){
    const context = useContext(appContext)

    function ManagerOptions(props){
        if(context.user.isManager){ 
            <>
                <BasicButton title={"View Employee State"} onPress={ ()=>{props.setPageIndex(4)}}/>
                <BasicButton title={"Review Problems"} onPress={ ()=>{props.setPageIndex(5)}}/>
            </>}
        else{return <></>}
    }

    return (
    <View style={{flexDirection:"row"}}>
        <BasicButton title={"View Request"} onPress={ ()=>{props.setPageIndex(1)}}/>
        <BasicButton title={"Manage Events"} onPress={ ()=>{props.setPageIndex(2)}}/>
        <BasicButton title={"Time Sheet"} onPress={ ()=>{props.setPageIndex(3)}}/>
        < ManagerOptions setPageIndex={props.setPageIndex}/>
        <LogoutButton setPage={props.setPageIndex}/>
    </View>)
}