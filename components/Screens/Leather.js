import * as React from 'react'
import { View, Text, SafeAreaView,ScrollView, StyleSheet } from "react-native";
import {LeatherScreenContent} from '../utils/ServiceScreensContent'
import Footer from '../utils/Footer';

export default function LeatherScreen() {
   return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
                <Text style={styles.heading}>{LeatherScreenContent.heading}</Text>
                <View style={styles.imgContainer} >
                    {LeatherScreenContent.img}
                </View>
                <View >
                    <Text style={styles.decs} >
                        {LeatherScreenContent.decs}
                    </Text>
                </View>
                <Footer />
                </View>
      </ScrollView>
  </SafeAreaView>
   );
 }

 const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
   },
   heading: {
       fontSize: 18,
       fontWeight: 'bold',
       marginTop: 15,
   },
   imgContainer: {
       width: 390,
       height: 238,
       alignItems: 'center',
       borderWidth: 3,
       borderRadius: 3,
       marginTop: 15,
       borderColor: 'darkblue'
   },
   decs: {
       alignSelf: 'center',
       marginTop: 10,
       marginLeft: 10,
       marginRight: 10,
       fontSize: 15,
       marginBottom: 32
   }
})
