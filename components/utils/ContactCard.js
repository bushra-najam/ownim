import React from 'react'
import { Ionicons, Entypo, MaterialIcons, Foundation } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";
import { ContactCardContent } from './ScreensContent';

function ContactCard({colorTheme}) {
  return (
    <View style={styles.container}>
      <Text style={{...styles.heading,color:colorTheme.textColor}}>{ContactCardContent.heading}</Text>

                     <View style={styles.contacs}>
                     <Entypo name="home" size={24} color={colorTheme.textColor} style={styles.icon} />
                        <View style={styles.dsc}>
                           <Text style={{...styles.iconName, color:colorTheme.textColor}}>{ContactCardContent.addressLabel}</Text>
                           <Text  style={styles.details}>{ContactCardContent.addressValue} </Text>
                        </View>
                        <View style={{ marginLeft: 18 }}>
                        <Ionicons name="call" size={24} color={colorTheme.textColor} style={styles.icon} />
      
                        </View>
                        <View style={styles.dsc}>
                           <Text style={{...styles.iconName, color:colorTheme.textColor}}>{ContactCardContent.callLabel}</Text>
                           <Text  style={styles.details}>{ContactCardContent.callValue} </Text>
                        </View>
                     </View>

                     <View style={styles.contacs}>
                     <MaterialIcons name="email" size={24} color={colorTheme.textColor} />
                     <View style={styles.dsc}>
                        <Text style={{...styles.iconName, color:colorTheme.textColor}}>{ContactCardContent.mailLabel}</Text>
                        <Text  style={styles.details} >{ContactCardContent.mailValue}</Text>
                     </View>
                     <View style={{ marginLeft: 18 }}>
                        <Foundation name="web" size={24} color={colorTheme.textColor} />
                     </View>
                     <View style={styles.dsc}>
                        <Text style={{...styles.iconName, color:colorTheme.textColor}}>{ContactCardContent.webAddressLabel}</Text>
                        <Text style={styles.details}>{ContactCardContent.webAddressValue}</Text>
                     </View>
                     </View>
                  </View>

  )
}

export default ContactCard

const styles = StyleSheet.create({
    container: {
       flex: 1,
       width: '100%',
       alignItems: 'flex-start',
    },
    heading:{
      fontWeight: '900', 
      fontSize: 15, 
      alignSelf:'flex-start',
      paddingLeft:10,
    },
    contacs: {
       width: 'auto',
       flexDirection: 'row',
       alignItems: 'center',
       alignSelf: 'flex-start',
       textAlign: 'center',
       paddingVertical:15
    },
    iconName: {
       fontSize: 13,
       marginBottom: 2,
       paddingHorizontal:3,
       fontWeight: 'bold'
    },
    dsc: {
       alignItems: "flex-start",
    },
    details:{
        fontSize:10
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