import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Employee } from './CLASSES-AND-INTERFACES/api-entities';
import { appContext, AppContextInterface } from './CLASSES-AND-INTERFACES/app-conext';
import NavBar from './COMPONENTS/CHILDREN/nav-bar';
import ClockingScreen from './COMPONENTS/PAGES/clocking';
import EventsPage from './COMPONENTS/PAGES/events-page';
import LoginPage from './COMPONENTS/PAGES/login';
import RoomService from './COMPONENTS/PAGES/room-service';
import ViewEmployeeStatus from './COMPONENTS/PAGES/view-employee-status';
import BasicText from './STYLING-TOOLS/basictext';
import { Theme } from './STYLING-TOOLS/colorstyle';
import { themeContext, ThemeContextInterface } from './STYLING-TOOLS/themecontext';

export default function App() {

  const [theme, setTheme] = useState(Theme.default);
  const [pageIndex, setPageIndex] = useState(6);
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
      case    /*login*/           0:{return (<> <LoginPage setPage={setPageIndex}/> </>)}
      case    /*room service*/    1:{return (<> <NavBar setPageIndex={setPageIndex} /><RoomService/> </>)}
      case    /*event*/           2:{return (<> <NavBar setPageIndex={setPageIndex} /><BasicText text={'Testing'}/> </>)}
      case    /*check in*/        3:{return (<> <NavBar setPageIndex={setPageIndex} /><ClockingScreen/></>)}
      case    /*status check*/    4:{return (<> <NavBar setPageIndex={setPageIndex} /><ViewEmployeeStatus/></>)}
      case    /*problem*/         5:{return (<> <NavBar setPageIndex={setPageIndex} /><BasicText text={'Testing'}/> </>)}
      //================================================================================================
      case    /*kris*/            6:{return (<><EventsPage/></>)}
      case    /*john*/            7:{return (<> <RoomService/> </>)}
      case    /*brandon*/         8:{return (<> <BasicText text={'brandon'}/> </>)}
      case    /*josh*/            9:{return (<> <BasicText text={'josh'}/>    </>)} 
      default                      :{return (<> <BasicText text={'Testing'}/> </>)}
    }
  }

  return (
    <View style={styles.container}>
      <appContext.Provider value = {initContext}>
        <themeContext.Provider value = { themeContextObject }>
          <SwitchPage/>
        </themeContext.Provider>
      </appContext.Provider>
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
