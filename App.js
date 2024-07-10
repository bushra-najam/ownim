import { StyleSheet,StatusBar, SafeAreaView } from 'react-native';
import NavigationBar  from './components/DrawerNavigation/NavigationBar';
import ActionBarImage from './components/DrawerNavigation/ActionBarImage';
import React from 'react';
export default function App() {
  return (
<SafeAreaView style={styles.container}>
<StatusBar backgroundColor={"black"} barStyle={'light-content'}/>
<ActionBarImage/>
<NavigationBar/>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
