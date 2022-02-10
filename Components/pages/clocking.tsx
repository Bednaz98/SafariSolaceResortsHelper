import React, { useState } from "react";
import { View } from "react-native";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicText from "../../SafariSolaceStyleTools/basictext";




export default function ClockingScreen(){

    const [clockCheck, setClockCheck] = useState(false)

    function changeClockText(){
        if(clockCheck){return "Clock Out"}
        else{return "Clock-In"}
    }
    
    function changClockStatus(){
        setClockCheck(!clockCheck);
        console.log("show Make an HTTPRequest")
    }

    return(
        <View>
            <BasicText text={changeClockText()}/>
            <BasicButton title={'Change Status'} onPress={changClockStatus}/>
        </View>)

}