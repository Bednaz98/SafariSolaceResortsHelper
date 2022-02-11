import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View } from "react-native";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext";

export default  function LogoutButton(props){
    return (
        <View>
            <BasicButton title={"Logout"} onPress={()=>{
                AsyncStorage.removeItem("user");
                props.setPage(0);
            }} />
        </View>
    )
}