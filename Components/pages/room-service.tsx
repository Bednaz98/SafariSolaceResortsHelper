import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { v4 } from "uuid";
import BasicText from "../../SafariSolaceStyleTools/basictext";
import RoomServiceRequest from "../children/room-service-request";
import {Offering, ServiceRequest} from '../../classes-interface/api-entities';
import RoomServiceHandlerAPIHandler, { sortType } from "../../classes-interface/room-service-handler";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";




export default function RoomService(){

    const dummyArray:ServiceRequest[] = []
    const [data, setData] = useState(dummyArray);
    const [sort, setSort] = useState(sortType.All)
    const [FirstRefresh, setFirstRefresh] = useState(false)
    const handler = new RoomServiceHandlerAPIHandler(true)

    useEffect(() => {
        grabServiceRequest(sortType.All)
    
      return () => {
        
      }
    }, [])
    


   async function grabServiceRequest(type:sortType){
    
    try {
        const foundRequest = await handler.getAllRequest(type);
        if(!foundRequest) {setData([]);setSort(type)}
        if(foundRequest?.length >0) {setData(foundRequest);setSort(type)}
        else {setData([]);setSort(type)}
    } catch (error) {
        console.log('Failed to sort request')
    }
   }

   function DisplaySortType(){
       return <BasicText text={`Filtering Type: ${sortType[sort]}`}/>
   }

   function FilterButtons(){
    return <View style={{flexDirection:"row"}}>
        <BasicButton title={'All'} onPress={()=>grabServiceRequest(sortType.All)} />
        <BasicButton title={'Ordered'} onPress={()=>grabServiceRequest(sortType.Ordered)} />
        <BasicButton title={'Processing'} onPress={()=>grabServiceRequest(sortType.Processing)} />
        <BasicButton title={'Complete'} onPress={()=>grabServiceRequest(sortType.Completed)} />
        <BasicButton title={'Cancelled'} onPress={()=>grabServiceRequest(sortType.Cancelled)} />
    </View>
   }

   
/*       function Testing(){
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
    } */

    function DisplaySwitch(){
        if(data?.length >0){
            return <FlatList
            data={data}
            keyExtractor={(item) => v4()}
            renderItem={({ item }) => { return (<RoomServiceRequest  openTitle = {`Room: ${item?.room ?? 'Invalid'}, ${item?.status ?? 'Invalid'}`} serviceRequest={item}    /> ); } }
        />
        }
        else return <BasicText text={`No request found for ${sortType[sort]}`}/>
    }

    return(
    <View>
        <BasicText text={"Room Service Request"}/>
        <DisplaySortType/>
        <FilterButtons />
        <BasicButton title={'Refresh'} onPress={()=>grabServiceRequest(sort)} />
        <DisplaySwitch />
    </View>)
}
