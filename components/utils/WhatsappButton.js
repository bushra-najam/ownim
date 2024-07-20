import React from 'react'
import {TouchableOpacity,StyleSheet,Text, Linking, View} from 'react-native'
import { Fontisto } from '@expo/vector-icons';

function WhatsappButton() {
    const title ="hello"
    const message ="hello, I want to contact you to place my order";
    const masked="hello";
  return (
    <View  style={styles.appButtonContainer} >
    <Fontisto name="whatsapp" size={40} color="green"
    onPress={() => Linking.openURL(`whatsapp://send?text=${message}&phone=+923353856397${masked}`)}
    style={{justifyContent:'flex-end'}}

    />
</View>
  )
}

export default WhatsappButton

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      alignItems:'flex-end'
      
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    }
  });