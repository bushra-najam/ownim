import * as React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { AboutUs } from '../utils/ServiceScreensContent'
import Footer from '../utils/Footer';
export default function AboutScreen() {
   return (
      <SafeAreaView>
         <ScrollView>
            <View style={styles.container}>
            <ImageBackground source={require('../../assets/image.png')} style={styles.bcgImg}resizeMode='cover' >
         <View style={styles.header}>
         <Text style={styles.headerText1}>INITIAL BRIEF</Text>
         <Text style={styles.headerText2}>ABOUT OUR COMPANY</Text>
         </View>
           <View style={styles.line}/>
               <Text style={styles.aboutHeading}>
                  {AboutUs.aboutUsHeading}
               </Text>
               <View style={styles.aboutTxt} >
                  <Text style={styles.aboutTxt}>
                     {AboutUs.aboutUsText}
                  </Text>
                  
               </View>

               <Text style={styles.heading}>
                  {AboutUs.ourVissionHeading}
               </Text>
               
               <View style={styles.textContainer} >
                  <Text style={styles.text}>
                     {AboutUs.ourVissionText}
                  </Text>
                  
               </View >
               
               <Text style={styles.heading} >
                  {AboutUs.ourMissionHeading}
               </Text>
               
               <View style={styles.textContainer}>
               <Text style={styles.text}>
                  {AboutUs.ourMissionText}
               </Text>
               </View>
               </ImageBackground>
            </View>
             
            <Image source={require('../../assets/aboutus.png')} style={styles.img} resizeMethod='stetch' />
            <Footer />
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   header:{
      marginTop:15,
      marginBottom:15
   },
   headerText1:{
       fontWeight:'bold',
       color:'lightskyblue', 
       fontSize:25
   },
   headerText2:{
      fontWeight:'bold',
      color:'hotpink',
      fontSize:25
   },
   heading: {
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'flex-start',
      marginTop: 5,
      marginBottom:5,
      marginLeft:35
   },
   aboutHeading:{
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'flex-start',
      marginTop: 5,
      marginBottom:5,
      marginLeft:3
   },
   aboutTxt:{
      fontSize: 12,
      alignSelf:'flex-start',
      marginLeft:8,
      marginRight:15,
      marginBottom:5
   },
   img: {
      height:108,
      width:380,
      alignSelf:'center',
      marginBottom:15,
      marginTop:5
   },
   text: {
      fontSize: 12,
      alignSelf:'center',
      alignItems:'center',
      marginLeft:50,
      marginRight:15,
      marginBottom:12
   },
   textContainer: {
      alignItems: 'center',
      justifyContent:'center',

   },
   bcgImg:{
       alignSelf:'flex-start',
       backgroundColor:'linen',
       color:'linen'
   },
   line:{  borderBottomColor: 'darkblue',
      borderBottomWidth: StyleSheet.hairlineWidth,}
})