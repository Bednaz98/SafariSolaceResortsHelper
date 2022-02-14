import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { appContext, AppContextInterface } from "../../classes-interface/app-conext";
import employeeAPIHandler from "../../classes-interface/employeehandler";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../../SafariSolaceStyleTools/basicinputtext";
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext";
import PixelSpacer from "../../SafariSolaceStyleTools/pixel-spacer";



export default function LoginPage(props) {
  const context: AppContextInterface = useContext(appContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function tryLogin() {
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


  return (
    <View>
      <BasicText
        text={"Welcome to Safari Solace Resorts"}
        textType={TextType.Title}
      />
      <PixelSpacer height={5} />
      <BasicInputText
        value={userName}
        onChangeText={t => setUserName(t)}
        placeholder={"Username"}
      />
      <PixelSpacer height={5} />
      <BasicInputText
        value={password}
        onChangeText={t => setPassword(t)}
        placeholder={"Password"}
      />
      <PixelSpacer height={5} />
      <BasicButton title={"Login"} onPress={tryLogin} />
    </View>
  );
}
