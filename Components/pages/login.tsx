import React, { useContext, useState } from "react";
import { Dimensions, Platform, View } from "react-native";
import { appContext, AppContextInterface } from "../../classes-interface/app-conext";
import employeeAPIHandler from "../../classes-interface/employeehandler";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../../SafariSolaceStyleTools/basicinputtext";
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext";
import FlexSpacer from "../../SafariSolaceStyleTools/flex-spacer";
import PixelSpacer from "../../SafariSolaceStyleTools/pixel-spacer";



export default function LoginPage(props) {
  const context: AppContextInterface = useContext(appContext)

  async function tryLogin(userName:string, password:string) {
    const employee = new employeeAPIHandler(true);
    
    const response = await employee.login(userName, password);
    const emp = response;
    console.log(emp);
    if(emp.password === password && emp.username === userName){
      context.setUser(emp);
      setPage();
    }
  }

  function setPage(){
    props.setPage(1);
    alert("Be sure to clock in! ");
  }

  function PageDisplay(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    if(Platform.OS == "web"){
      return(
        <View >
      <View style={{justifyContent:"center", alignItems:"center"}}><BasicText text={"Welcome to\nSafari Solace Helper"} textType={TextType.Title} textAlign={"center"} /></View>
      <PixelSpacer height={5} />
      <View style={{ flexDirection:"row"}}>
        <FlexSpacer space={1} />
        <View style={{flex:3, flexDirection:"column"}}>
          <BasicInputText value={userName} onChangeText={t => setUserName(t)} placeholder={"Username"}/>
          <BasicInputText value={password} onChangeText={t => setPassword(t)} placeholder={"Password"}/>
          <View style={{flexDirection:"row"}}>
            <FlexSpacer space={1} />
            <View style={{flex:3}}><BasicButton title={"Login"} onPress={()=>tryLogin(userName, password)} /></View>
            <FlexSpacer space={1} />
          </View>
        </View>
        <FlexSpacer space={1} />
      </View>
    </View>
      )
    }
    else{
      return(
        <View >
      <View style={{justifyContent:"center", alignItems:"center"}}><BasicText text={"Welcome to\nSafari Solace Helper"} textType={TextType.Title} textAlign={"center"} /></View>
      <PixelSpacer height={5} />
      <View style={{ flexDirection:"row"}}>
        <FlexSpacer space={1} />
        <View style={{flex:5, flexDirection:"column"}}>
          <BasicInputText value={userName} onChangeText={t => setUserName(t)} placeholder={"Username"}/>
          <BasicInputText value={password} onChangeText={t => setPassword(t)} placeholder={"Password"}/>
          <View style={{flexDirection:"row"}}>
            <FlexSpacer space={1} />
            <View style={{flex:10}}><BasicButton title={"Login"} onPress={()=>tryLogin(userName, password)} /></View>
            <FlexSpacer space={1} />
          </View>
          <PixelSpacer height={Dimensions.get("window").width*.50}/>
        </View>
        <FlexSpacer space={1} />
      </View>
    </View>
      )
    }
  }


  return (<PageDisplay/>  )
}
