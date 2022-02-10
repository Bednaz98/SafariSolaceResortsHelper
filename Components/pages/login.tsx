import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View } from "react-native";
import employeeAPIHandler from "../../classes-interface/employeehandler";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../../SafariSolaceStyleTools/basicinputtext";
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext";
import PixelSpacer from "../../SafariSolaceStyleTools/pixel-spacer";


export default function LoginPage(props){

    const employee = new employeeAPIHandler(true)

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    async function tryLogin(){

/*         const response = employeeAPIHandler;

        const employee = await response.json();

        props.updateUser({
            username:employee.username
        });

        await AsyncStorage,setUserName('username', employee.userName);  */

    }

    return(
    <View>
        <BasicText text ={"Welcome to Safari Solace Resorts"} textType={TextType.Title}/>
        <PixelSpacer height={5}/>
        <BasicInputText value={userName} onChangeText={setUserName} placeholder={'Username'} />
        <PixelSpacer height={5}/>
        <BasicInputText value={password} onChangeText={setPassword} placeholder={'Password'} />
        <PixelSpacer height={5}/>
        <BasicButton title={'Login'} onPress={tryLogin}/>
    </View>)
}