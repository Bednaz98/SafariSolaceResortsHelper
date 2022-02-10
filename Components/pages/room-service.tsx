import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { v4 } from "uuid";
import BasicText from "../../SafariSolaceStyleTools/basictext";
import RoomServiceRequest from "../children/room-service-request";



export default function RoomService(){

    const dummyArray:any[] = []
    const [data, setData] = useState(dummyArray);

   useEffect(()=>{
        Testing(); 
   },[])

      function Testing(){
        let testStack:any[] =[]
        for(let i =0; i <10; i++ ){
            testStack.push( {name:'t'} )
        }
        setData(testStack);
    }

    // <RoomServiceRequest  openTitle = {"testing"} child={ <BasicText text={"Test child"}/>}/>
    return(<View>
        <BasicText text={"Room Service Request"}/>
        
        <FlatList
            data={data}
            keyExtractor={(item) => v4()}
            renderItem={({ item }) => { return (<View><BasicText text={item.name}/></View> ); } }
        />


    </View>)
}