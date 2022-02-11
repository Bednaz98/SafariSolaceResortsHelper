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

  async function tryLogin(props) {

    const employee = new employeeAPIHandler(true);
    
    const response = employee.login(userName, password);

    if (response != null) {
    const emp = await response;
    context.setUser(emp);
    await AsyncStorage.setItem("user", JSON.stringify(emp));
    setPage();
    }
    else {
        alert("Login failed");
    }
  }

  function setPage(){
    props.setPage(1);
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
        onChangeText={setUserName}
        placeholder={"Username"}
      />
      <PixelSpacer height={5} />
      <BasicInputText
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
      />
      <PixelSpacer height={5} />
      <BasicButton title={"Login"} onPress={tryLogin} />
    </View>
  );
}
