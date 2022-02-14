import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Platform, ScrollView, View } from "react-native";
import { v4 } from "uuid";
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext";
import RoomServiceRequest from "../children/room-service-request";
import {Offering, ServiceRequest} from '../../classes-interface/api-entities';
import RoomServiceHandlerAPIHandler, { sortType } from "../../classes-interface/room-service-handler";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import PixelSpacer from "../../SafariSolaceStyleTools/pixel-spacer";
import GetColor, { borderRadius, Color, margin, paddingRadius } from "../../SafariSolaceStyleTools/styleconfig";
import BasicModal from "../../SafariSolaceStyleTools/basicmodal";




export default function RoomService(){

    const dummyArray:ServiceRequest[] = []
    const [data, setData] = useState(dummyArray);
    const [sort, setSort] = useState(sortType.All)
    const handler = new RoomServiceHandlerAPIHandler(true)
    const [displayList, setDisplayList] = useState([<></>])
    

    useEffect(() => {
        grabServiceRequest(sortType.All)
    
      return () => {
        
      }
    }, [])
    


    


    async function grabServiceRequest(type:sortType){
    try {
            const foundRequest = await handler.getAllRequest(type);
            console.log(foundRequest)
            if(foundRequest) {setData(foundRequest);setSort(type);displaySwitch()}
        } catch (error) {
            console.log('Failed to sort request')
        }
    }

   function FilterButtons(){
       if(Platform.OS == "web"){
        return( 
        <View>
            <BasicText text={`Filtering Type: ${sortType[sort]}`} textType={TextType.Header}/>
                <View style={{flexDirection:"row", alignSelf:"stretch"}}>
                <View style={{flex:1}}><BasicButton title={'All'} onPress={()=> grabServiceRequest(sortType.All)} /></View>
                <View style={{flex:1}}><BasicButton title={'Ordered'} onPress={()=> grabServiceRequest(sortType.Ordered)} /></View>
                <View style={{flex:1}}><BasicButton title={'Processing'} onPress={()=> grabServiceRequest(sortType.Processing)} /></View>
                <View style={{flex:1}}><BasicButton title={'Complete'} onPress={()=> grabServiceRequest(sortType.Completed)} /></View>
            <View style={{flex:1}}><BasicButton title={'Cancelled'} onPress={()=> grabServiceRequest(sortType.Cancelled)} /></View>
        </View>
        
        </View>)
       }
       else{
        return( 
                <BasicModal openTitle={`Filtering Type: ${sortType[sort]}`} child={
                    <View style={{flexDirection:"column", alignSelf:"stretch",justifyContent:"center"}}>
                        <PixelSpacer width={Dimensions.get("screen").width*0.60} height={1}/> 
                        <BasicButton title={'All'} onPress={()=> grabServiceRequest(sortType.All)} />
                        <BasicButton title={'Ordered'} onPress={()=> grabServiceRequest(sortType.Ordered)} />
                        <View ><BasicButton title={'Processing'} onPress={()=> grabServiceRequest(sortType.Processing)} /></View>
                        <View><BasicButton title={'Complete'} onPress={()=> grabServiceRequest(sortType.Completed)} /></View>
                        <View ><BasicButton title={'Cancelled'} onPress={()=> grabServiceRequest(sortType.Cancelled)} /></View>
                    </View>
                }/>)
       }
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

    function displaySwitch(){
        if(data?.length >0){
            setDisplayList(data.map((item)=>{ return <RoomServiceRequest  key={v4()} openTitle = {`Room: ${item?.room ?? 'Invalid'}, ${item?.status ?? 'Invalid'}`} serviceRequest={item}/>})  )
        }
        else setDisplayList([<BasicText key={v4()} text={`No request found for ${sortType[sort]}`}/>])
    }
    //grabServiceRequest(sort)

    return(
    <View style={{alignContent:"center", justifyContent:"center"}}>
        <ScrollView>
            <BasicText text={"Room Service Request"} textType={TextType.Title}/>
            <PixelSpacer width={Dimensions.get("screen").width*0.35} height={1}/>
            <FilterButtons />
            <BasicButton title={'Refresh'} onPress={()=>{grabServiceRequest(sort)}} />
            <View style={{backgroundColor:GetColor(Color.SecondaryColor), padding:paddingRadius(), margin:margin(), borderRadius:borderRadius()}}>
                {displayList}
            </View>
        </ScrollView>
    </View>)
}
