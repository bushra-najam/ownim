import React from 'react'
import { Ionicons, Entypo, MaterialIcons, Foundation } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";

function ContactCard() {
  return (
    <View style={styles.container}>
                     <View style={styles.contacs}>
                     <Entypo name="home" size={24} color="navy" style={styles.icon} />
                        <View style={styles.dsc}>
                           <Text style={styles.iconName}>Address</Text>
                           <Text  style={styles.details}>123 Anywhere St., Any City </Text>
                        </View>
                        <View style={{ marginLeft: 18 }}>
                        <Ionicons name="call" size={24} color="navy" style={styles.icon} />
      
                        </View>
                        <View style={styles.dsc}>
                           <Text style={styles.iconName}>Call</Text>
                           <Text  style={styles.details}>+123-2544-5555 </Text>
                        </View>
                     </View>

                     <View style={styles.contacs}>
                     <MaterialIcons name="email" size={24} color="navy" />
                     <View style={styles.dsc}>
                        <Text style={styles.iconName}>Mail</Text>
                        <Text  style={styles.details} >hello@reallygreatsite.com</Text>
                     </View>
                     <View style={{ marginLeft: 18 }}>
                        <Foundation name="web" size={24} color="navy" />
                     </View>
                     <View style={styles.dsc}>
                        <Text style={styles.iconName}>Web Address</Text>
                        <Text style={styles.details}>www.ownim.com</Text>
                     </View>
                     </View>
                  </View>

  )
}

export default ContactCard

const styles = StyleSheet.create({
    container: {
       flex: 1,
       width: '80%',
       alignItems: 'flex-start'
    },
    contacs: {
       height: 90,
       width: 'auto',
       flexDirection: 'row',
       alignItems: 'center',
       alignSelf: 'flex-start',
       marginTop: 2,
       textAlign: 'center',
       marginLeft: 15
    },
    iconName: {
       fontSize: 13,
       marginBottom: 2,
       color: 'navy',
       marginLeft: 3,
       fontWeight: 'bold'
    },
    dsc: {
       alignItems: "flex-start",
    },
    details:{
        fontSize:8
    },
    icon: {
       alignSelf: 'center',
       marginLeft: 2
    },
    txt:{
       marginLeft:20,
       marginRight:10,
       fontSize:13,
       marginTop:12
    }
 })