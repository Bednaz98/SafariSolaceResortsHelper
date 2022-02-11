import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { appContext } from "../../classes-interface/app-conext";
import employeeAPIHandler from "../../classes-interface/employeehandler";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicText from "../../SafariSolaceStyleTools/basictext";




export default function ClockingScreen(){
    const context = useContext(appContext)

    const [clockCheck, setClockCheck] = useState(false)
    const handler = new employeeAPIHandler()
    useEffect(() => {
        syncClock()
        return () => {}}, [])

    async function syncClock(){
        const workLog = await handler.getWorklogByID(context.user.id)
        if(workLog.type == "CHEKIN" ){setClockCheck(true)}
        else{setClockCheck(false)}
    }

    function changeClockText(){
        if(clockCheck){return "Clock Out"}
        else{return "Clock-In"}
    }
    
    async function changClockStatus(){
        setClockCheck(!clockCheck);
        if(!clockCheck) await handler.clockin(context.user.id,"Clock-In")
        else await handler.clockout(context.user.id,"Clock-In") 
    }

    return(
        <View>
            <BasicText text={changeClockText()}/>
            <BasicButton title={'Change Status'} onPress={changClockStatus}/>
        </View>)

}