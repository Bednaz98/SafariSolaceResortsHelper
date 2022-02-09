import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appContext, AppContextInterface } from './classes-interface/app-conext';
import BasicText from './SafariSolaceStyleTools/basictext';
import { Theme } from './SafariSolaceStyleTools/colorstyle';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';

export default function App() {

  const [theme, setTheme] = useState(Theme.default);
  const [pageIndex, setPageIndex] = useState(0);

  const initContext:AppContextInterface = {

  }
  const themeContextObject:ThemeContextInterface = {theme:theme,setTheme:setTheme}




  function SwitchPage(){
    switch(pageIndex){
      case                              0:{return (<BasicText text={''}/>)}
      case /**/                1:{return (<><BasicText text={''}/></>)}
      case /**/               2:{return (<><BasicText text={''}/></> )}
      case /**/         3:{return (<><BasicText text={''}/></> ) }
      case /*s*/               4:{return (<><BasicText text={''}/></> )}
      case /**/           5:{return (<><BasicText text={''}/></>)} 
      default :                           {return <><BasicText text={''}/></>}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
