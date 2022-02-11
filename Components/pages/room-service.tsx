import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { v4 } from "uuid";
import BasicText from "../../SafariSolaceStyleTools/basictext";
import RoomServiceRequest from "../children/room-service-request";
import {Offering, ServiceRequest} from '../../classes-interface/api-entities';
import RoomServiceHandlerAPIHandler, { sortType } from "../../classes-interface/room-service-handler";




export default function RoomService(){

    const dummyArray:ServiceRequest[] = []
    const [data, setData] = useState(dummyArray);
    const [sort, setSort] = useState(sortType.All)
    const handler = new RoomServiceHandlerAPIHandler()

   useEffect(()=>{
        //Testing(); 
        grabServiceRequest(sort)
   },[])


   function grabServiceRequest(type:sortType){
    setSort(type)

   }

   
      function Testing(){
        let testStack:ServiceRequest[] =[]
        for(let i =0; i <10; i++ ){
            let dummyOffering:Offering={
                desc: "Testing",
                cost: 0
            }
            const T = "Completed"
            let dummy:ServiceRequest = {
                id: `EXRoom${i}`,
                room: `EXRoom${i}`,
                created: (Math.random()*100000000),
                status: T ,
                requestedOffering: [dummyOffering,dummyOffering,dummyOffering]
            }

            testStack.push( dummy )
        }
        setData(testStack);
    }

    return(<View>
        <BasicText text={"Room Service Request"}/>
        
        <FlatList
            data={data}
            keyExtractor={(item) => v4()}
            renderItem={({ item }) => { return (<RoomServiceRequest  openTitle = {"testing"} serviceRequest={item}    /> ); } }
        />


    </View>)
}