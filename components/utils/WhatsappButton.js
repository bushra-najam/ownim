import React from 'react'
import {StyleSheet, Linking, View, Platform, Image, Pressable} from 'react-native'

function WhatsappButton() {
    const message ="hello, I want to contact you to place my order";
    const number = (Platform.OS== "ios")? "923353856397": "+923353856397";
  return (
    <View  style={styles.appButtonContainer} 
    >
    <Pressable
        onPress={() => Linking.openURL(`whatsapp://send?text=${message}&phone=${number}`)
        .then(()=>"whatsapp opened")
        .catch(()=>alert("make sure WhatsApp is installed on your device"))
      }
    >
    <Image 
    source={require('../../assets/whatsapp_icon.png')}
    style={styles.imageStyles}
    resizeMethod='center'

    />
    </Pressable>
</View>
  )
}


export default WhatsappButton

const styles = StyleSheet.create({
    appButtonContainer: {
      alignItems:'flex-end'
      
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    imageStyles:{justifyContent:'flex-end', height:50,width:50}
  });