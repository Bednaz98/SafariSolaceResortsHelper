import React, { useContext, useEffect } from "react";
import { Platform, View } from "react-native";
import { appContext } from "../../classes-interface/app-conext";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicModal from "../../SafariSolaceStyleTools/basicmodal";
import LogoutButton from "../pages/logoutButton";





export default function NavBar(props){
    const context = useContext(appContext)

    function ManagerOptions(props){
        console.log(context.user.isManager);
        if(context.user.isManager){ 
            return (
            <>
                <View><BasicButton title={"View Employee Status"} onPress={ ()=>{props.setPageIndex(4)}}/></View>
                <View ><BasicButton title={"Review Problems"} onPress={ ()=>{props.setPageIndex(5)}}/></View>
            </>)}
        else{return <></>}
    }

    if(Platform.OS == "web"){
        return (
            <View style={{flexDirection:"row", alignSelf:"stretch",justifyContent:"center"}}>
                <View><BasicButton title={"View Request"} onPress={ ()=>{props.setPageIndex(1)}}/></View>
                <View ><BasicButton title={"Manage Events"} onPress={ ()=>{props.setPageIndex(2)}}/></View>
                <View ><BasicButton title={"Time Sheet"} onPress={ ()=>{props.setPageIndex(3)}}/></View>
                < ManagerOptions setPageIndex={props.setPageIndex}/>
                <View ><LogoutButton setPage={props.setPageIndex}/></View>
            </View>)
    }
    else{
        return (
                <BasicModal openTitle={"Navigation"} child={
                <View style={{flexDirection:"column", alignSelf:"stretch",justifyContent:"center"}}>
                    <View ><BasicButton title={"View Request"} onPress={ ()=>{props.setPageIndex(1)}}/></View>
                    <View ><BasicButton title={"Manage Events"} onPress={ ()=>{props.setPageIndex(2)}}/></View>
                    <View ><BasicButton title={"Time Sheet"} onPress={ ()=>{props.setPageIndex(3)}}/></View>
                    < ManagerOptions setPageIndex={props.setPageIndex}/>
                    <View ><LogoutButton setPage={props.setPageIndex}/></View>
                </View>
                }/>
            )
    }

}