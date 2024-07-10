import { Platform, StyleSheet,View,Text,Image } from "react-native";
import * as React from 'react';
import { Button } from "react-native-elements";

export default function Card({name,image,desc,url, navigation}){

    return (
    <View style={styles.card}>
        <Image source={image} accessibilityLabel={`${name} ownim`}  style={styles.image} resizeMode="cover" />
        <View style={styles.nameContainer}>
          <Text style= {styles.name}>{name} </Text>
        </View>
        <View style={styles.desc}>
          <Text>{desc} </Text>
        </View>
        <View  style={styles.button}>
        <Button title={"Read More"} onPress={()=>navigation.navigate(url)}  />
        </View>
    </View>
    )

}


const styles= StyleSheet.create({
   card:{
   backgroundColor:"white",
   borderColor:"hotpink",
   borderRadius:16,
   borderWidth:3,
   padding:16,
   margin:16,
    
    ...Platform.select({
        ios:{
            shadowOffset:{width:2,height:2 },
            shadowColor:"#333",
            shadowOpacity:0.3,
            shadowRadius:4,
        },
       android:{
        elevation:5,
       }
    })
    },
    nameContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:32
    },
    name:{
      fontSize:30,
      fontWeight:'bold'
    },
    desc:{
      fontSize:22,
      marginBottom:10
    },
    image:{
      width: "109%",
      height:210,
      marginBottom:16,
      marginTop:-17,
      alignSelf:'center',
      borderTopLeftRadius:16,
      borderTopRightRadius:16,
      borderWidth:3
    },
    button:{
      width:120,
      marginBottom:2
    }
    
})
