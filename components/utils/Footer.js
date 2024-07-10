import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';


export default function Footer (){
    return(
        <View style={styles.footer}>
            <View style={styles.img}>
            <Image source={require("../../assets/footer.png")} width={10} height={5} resizeMode="stretch" />
            </View>
            <View style={styles.contactInfo}>
            <MaterialIcons name="email" size={24} color="white" />
            <Text style={styles.text}>info@Ownim.com{"\n"}</Text>
            </View>
            <View style={styles.contactInfo}>
            <MaterialIcons name="phone" size={24} color={'white'} />
            <Text style={styles.text}>0332545784{"\n"}</Text>
            </View>
            <View style={styles.contactInfo}>
            <MaterialIcons name="contacts" size={24} color={'white'} />
            <Text style={styles.text}>site Karachi{"\n"}</Text>
            </View>
            <View>
                <Text style={styles.heading}>Follow Us</Text>
                <View style={styles.followUs}>
                    <AntDesign name= "facebook-square"  size={24} color={'white'}  ></AntDesign>
                    <AntDesign name= "instagram"  size={24} color={'white'}  ></AntDesign>
                    <AntDesign name="twitter"  size={24} color={'white'} />
                    <AntDesign name="linkedin-square"  size={24} color={'white'} />
                </View>
            </View>
            <View ><Text style={styles.heading}>Quick Links</Text>
                <Text style={styles.detailedText}>Home</Text>
                <Text style={styles.detailedText}>Services</Text>
                <Text style={styles.detailedText}>Contact us</Text>
            </View>
            <View style={styles.services}><Text style={styles.heading}>Services</Text>
                <Text style={styles.detailedText}>Janitorial and Consumable Products</Text>
                <Text style={styles.detailedText}>Premium Leather Products</Text>
                <Text style={styles.detailedText}>Stainless Stell Products</Text>
                <Text style={styles.detailedText}>Gravuture Printing</Text>
                <Text style={styles.detailedText}>Flexo printing</Text>
                <Text style={styles.detailedText}>Offset Printing</Text>
                <Text style={styles.detailedText}>Logistic Services</Text>
                <Text style={styles.detailedText}>Software house & & Digital Marketing Solutions</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
      flex:1,
      backgroundColor:'black',
      width:"100%",
      height:750,
    },
    text:{
        color:'white'
    },
    heading:{
        fontWeight: 'bold',
        color:'white',
        marginBottom:10,
        marginTop:10,
        fontSize: 20,
        marginHorizontal:8
    },
    contactInfo:{
        flexDirection:'row',
        columnGap:10,
        marginHorizontal:8
    },
    followUs:{
        flexDirection:'row',
        columnGap:30,
        marginHorizontal:40,
        marginBottom:10
    },
    detailedText:{
        color: "white",
        marginHorizontal:8,
        lineHeight:30
    },
    img:{
        marginTop:16,
        marginBottom:16,
        marginLeft:8,
        alignItems:'center'
    },
    services:{
        marginBottom:20
    }
   })