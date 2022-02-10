import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appContext, AppContextInterface } from './classes-interface/app-conext';
import LoginPage from './Components/pages/login';
import RoomService from './Components/pages/room-service';
import BasicText from './SafariSolaceStyleTools/basictext';
import { Theme } from './SafariSolaceStyleTools/colorstyle';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';

export default function App() {

  const [theme, setTheme] = useState(Theme.default);
  const [pageIndex, setPageIndex] = useState(1);

  const initContext:AppContextInterface = {

  }
  const themeContextObject:ThemeContextInterface = {theme:theme,setTheme:setTheme}

  function SwitchPage(){
    switch(pageIndex){

      //================================================================================================
      case    /*login*/                   0:{return (<> <LoginPage/> </>)}
      case    /*room service*/                1:{return (<> <RoomService/> </>)}
      case    /*event*/                2:{return (<> <BasicText text={'Testing'}/> </>)}
      case    /*check in*/                3:{return (<> <BasicText text={'Testing'}/> </>)}
      case    /*status check*/                4:{return (<> <BasicText text={'Testing'}/> </>)}
      case    /*problem*/                5:{return (<> <BasicText text={'Testing'}/> </>)}
      //================================================================================================

      case    /*kris*/            6:{return (<> <BasicText text={'kris'}/>    </>)}
      case    /*john*/            7:{return (<> <BasicText text={'john'}/>    </>)}
      case    /*brandon*/         8:{return (<> <BasicText text={'brandon'}/> </>)}
      case    /*josh*/            9:{return (<> <BasicText text={'josh'}/>    </>)} 
      default :                     {return (<> <BasicText text={'Testing'}/> </>)}
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
