import * as React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import Footer from '../utils/Footer';

export default function ServicesScreen({navigation,route}) {
//const   {heading, img, text } = route.params;
   return (
<View style={styles.container}>
{/* <Text style={styles.heading} >{heading} </Text>
<Image source={img} style={styles.img} />
<Text style={styles.text} >{text}</Text> */}
<Text>nnhjnjb</Text>
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
