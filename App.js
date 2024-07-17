import { StyleSheet,StatusBar, SafeAreaView,View } from 'react-native';
import NavigationBar  from './components/DrawerNavigation/NavigationBar';
import ActionBarImage from './components/DrawerNavigation/ActionBarImage';
import { MenuProvider } from 'react-native-popup-menu';
import React from 'react';
export default function App() {
  return (
<SafeAreaView style={styles.container}>
<MenuProvider style={{marginBottom:-20, height:0}} key={'menu'}>
<StatusBar backgroundColor={"black"} barStyle={'light-content'}/>
<View style={{backgroundColor:'white', height:40,marginBottom:-18}}>
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
    backgroundColor: '#f5f5f5',
  },
});
