import React, { useState } from "react";
import { View } from "react-native";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../../SafariSolaceStyleTools/basicinputtext";
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext";
import PixelSpacer from "../../SafariSolaceStyleTools/pixel-spacer";


export default function LoginPage(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    async function tryLogin(){
        console.log('Try Login Not Set')
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