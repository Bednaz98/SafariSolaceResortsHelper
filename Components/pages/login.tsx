import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { appContext, AppContextInterface } from "../../CLASSES-AND-INTERFACES/app-conext";
import employeeAPIHandler from "../../CLASSES-AND-INTERFACES/employeehandler";
import BasicButton from "../../STYLING-TOOLS/basicbutton";
import BasicInputText from "../../STYLING-TOOLS/basicinputtext";
import BasicText, { TextType } from "../../STYLING-TOOLS/basictext";
import PixelSpacer from "../../STYLING-TOOLS/pixel-spacer";



export default function LoginPage(props) {
  const context: AppContextInterface = useContext(appContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function tryLogin(props) {

    const employee = new employeeAPIHandler(true);
    
    const response = await employee.login(userName, password);
    const emp = response;
    if(emp?.id){
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
