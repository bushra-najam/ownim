import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { Ionicons, Entypo, MaterialIcons, Foundation } from '@expo/vector-icons';
import Footer from '../utils/Footer';
import { ContactUs } from '../utils/ServiceScreensContent';
import ContactCard from '../utils/ContactCard';

export default function ContactUsScreen() {
   return (
      <SafeAreaView>
         <ScrollView>
            <View style={styles.container}>
               <ImageBackground source={require('../../assets/background.png')} style={styles.bcgImg} resizeMode='cpver' >
                  <View style={styles.header}>
                     <Text style={styles.headerText1}>CONTACT{" "}</Text>
                     <Text style={styles.headerText2}>US</Text>
                  </View>
                  <View style={styles.line} />
                  <Text style={styles.txt}>
                     {ContactUs.contactUsTxt}
                  </Text>
            <View  style={{alignItems:'center'}}>
            <ContactCard/>
            </View>
             

               </ImageBackground>
            </View>
            <Footer />
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      alignItems: 'center'
   },
   header: {
      marginTop: 15,
      marginBottom: 8,
      flexDirection: 'row',
      padding: 10
   },
   headerText1: {
      fontWeight: 'bold',
      color: 'lightskyblue',
      fontSize: 25
   },
   headerText2: {
      fontWeight: 'bold',
      color: '#e91e63',
      fontSize: 25
   },
   bcgImg: {
      alignSelf: 'center',
      width: '100%',
      height: 680
   },
   line: {
      borderBottomColor: 'darkblue',
      borderBottomWidth: StyleSheet.hairlineWidth,
   },
   txt:{
      marginLeft:20,
      marginRight:10,
      fontSize:13,
      marginTop:18,
   }
})