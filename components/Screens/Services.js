import * as React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import Footer from '../utils/Footer';
import FlexoScreen from './Flexo';
import LeatherScreen from './Leather';

export default function ServicesScreen({navigation,route}) {
   return (
<View style={styles.container}>
<Footer/>
</View>
   );
 }


 const styles = StyleSheet.create({
   container:{
   flex:1,

    alignItems: 'center'
   },
   heading:{
      fontWeight:'bold',
      fontSize:30
   },
   img:{

   },
   text:{
      
   }

 })
