import React, { useState } from 'react';
import { Dimensions, Platform, SafeAreaView } from 'react-native';
import { StyleSheet, View, Image } from 'react-native';
import { Employee } from './classes-interface/api-entities';
import { appContext, AppContextInterface } from './classes-interface/app-conext';
import NavBar from './Components/children/nav-bar';
import ClockingScreen from './Components/pages/clocking';
import EventsPage from './Components/pages/events-page';
import LoginPage from './Components/pages/login';
import ProblemView from './Components/pages/problem-view';
import RoomService from './Components/pages/room-service';
import ViewEmployeeStatus from './Components/pages/view-employee-status';
import BasicText from './SafariSolaceStyleTools/basictext';
import PixelSpacer from './SafariSolaceStyleTools/pixel-spacer';
import { Theme } from './SafariSolaceStyleTools/styleconfig';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';

export default function App() {

  const [theme, setTheme] = useState(Theme.default);
  const [pageIndex, setPageIndex] = useState(0);
  const [clockStatus, setClockStatus] = useState(false)
  const dummyEmployee:Employee = {id: 0,isManager: false,fname: '',lname: '',username: '',password: ''}
  const [user, setUser] = useState(dummyEmployee)

  const initContext:AppContextInterface = {
    clockStatus: clockStatus,
    setClockStatus: setClockStatus,
    user: user,
    setUser: setUser
  }
  const themeContextObject:ThemeContextInterface = {theme:theme,setTheme:setTheme}

  function SwitchPage(){
    switch(pageIndex){

      //================================================================================================
      case    /*login*/           0:{return (<><LoginPage setPage={setPageIndex}/></>)}
      case    /*room service*/    1:{return (<><NavBar setPageIndex={setPageIndex}/><RoomService/></>)}
      case    /*event*/           2:{return (<><NavBar setPageIndex={setPageIndex}/><EventsPage/></>)}
      case    /*check in*/        3:{return (<><NavBar setPageIndex={setPageIndex}/><ClockingScreen/></>)}
      case    /*status check*/    4:{return (<><NavBar setPageIndex={setPageIndex}/><ViewEmployeeStatus/></>)}
      case    /*problem*/         5:{return (<><NavBar setPageIndex={setPageIndex}/><ProblemView/></>)}
      //================================================================================================
      case    /*kris*/            6:{return (<><EventsPage/></>)}
      case    /*john*/            7:{return (<><RoomService/></>)}
      case    /*brandon*/         8:{return (<><BasicText text={'brandon'}/></>)}
      case    /*josh*/            9:{return (<><BasicText text={'josh'}/></>)} 
      default                      :{return (<><BasicText text={'Testing'}/></>)}
    }
  }

  const isWeb = Platform.OS == "web"
  /** Logo scaling factor for platform */
  function getLS(){
    if(isWeb)return 3
    else return 2
  }

  function WebMainSpacer(){
    if(Platform.OS == "web") {return<PixelSpacer width={Dimensions.get("screen").width*0.60} height={1}/> }
    else{return <></>}
  }
  function MobileHeaderSpacer(){
    if(Platform.OS == "web") return <></>
    else{
      switch(pageIndex){
        case 0:{ return <></>}
        case 1:{ return <PixelSpacer height={Dimensions.get("screen").height*0.9} width={1}/> }
        case 2:{ return <PixelSpacer height={Dimensions.get("screen").height*1.5} width={1}/>}
        case 3:{ return <></>}
        case 4:{ return <></>}
        case 5:{ return <PixelSpacer height={Dimensions.get("screen").height*1} width={1}/>}

      }
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView >
      <appContext.Provider value = {initContext}>
        <themeContext.Provider value = { themeContextObject }>
          <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <WebMainSpacer/>
                <MobileHeaderSpacer/>
                <Image style={{height:64*getLS(),width:64*getLS(),margin:10}} source={ require('./assets/Sale.png') }/>
                <SwitchPage/>
            </View>
          </View>
        </themeContext.Provider>
      </appContext.Provider>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
