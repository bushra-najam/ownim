import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import Footer from '../utils/Footer';
import { ContactUsContent } from '../constants/ScreensContent';
import ContactCard from '../utils/ContactCard';

export default function ContactUsScreen({navigation,route}) {
 const stack = [];
 stack.push(route.name);
 console.log("contact, stack: ", stack)
   return (
      <SafeAreaView>
         <ScrollView>
            <View style={styles.container}>
               <ImageBackground source={require('../../assets/background.png')} style={styles.bcgImg} resizeMode='cover' >
                  <View style={styles.header}>
                     <Text style={styles.headerText1}>{ContactUsContent.heading1}</Text>
                     <Text style={styles.headerText2}>{ContactUsContent.heading2}</Text>
                  </View>
                  <View style={styles.line} />
                  <Text style={styles.txt}>
                     {ContactUsContent.contactUsTxt}
                  </Text>
                  <View style={{ alignItems: 'center', padding:10 }}>
                     <ContactCard colorTheme={{ textColor: 'navy' }} />
                  </View>
                  </ImageBackground>
            </View>
            <Footer navigation={navigation} name={route.name}  stack={stack} />
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
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
      paddingBottom:20
   },
   line: {
      borderBottomColor: 'darkblue',
      borderBottomWidth: StyleSheet.hairlineWidth,
   },
   txt: {
      marginLeft: 20,
      marginRight: 10,
      fontSize: 13,
      marginTop: 18,
   }
})