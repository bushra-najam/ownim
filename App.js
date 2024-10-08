import { StyleSheet,StatusBar, SafeAreaView,View } from 'react-native';
import NavigationBar  from './components/Navigation/NavigationBar';
import ActionBarImage from './components/Navigation/ActionBarImage';
import { MenuProvider } from 'react-native-popup-menu';
import React from 'react';
export default function App() {
  return (
<SafeAreaView style={styles.container}>
<MenuProvider style={{marginBottom:-20, height:0}} key={'menu'}>
<StatusBar backgroundColor={"black"} barStyle={'light-content'}/>
<View style={{backgroundColor:'white', height:40,marginBottom:-16}}>
<ActionBarImage/>
</View>
<NavigationBar/>
</MenuProvider>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
