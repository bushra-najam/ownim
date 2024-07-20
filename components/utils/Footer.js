import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { FooterContent } from "./ScreensContent";
import { useNavigation } from '@react-navigation/native';

export default function Footer (){
    const navigation = useNavigation()
    return(
        <View style={styles.footer}>
            <View style={styles.img}>
            <Image source={require("../../assets/footer.png")} width={10} height={5} resizeMode="stretch" />
            </View>
            <View style={styles.contactInfo}>
            <MaterialIcons name="email" size={24} color="white" />
            <Text style={styles.text}>{FooterContent.email}</Text>
            </View>
            <View style={styles.contactInfo}>
            <MaterialIcons name="phone" size={24} color={'white'} />
            <Text style={styles.text}>{FooterContent.number}</Text>
            </View>
            <View style={styles.contactInfo}>
            <MaterialIcons name="contacts" size={24} color={'white'} />
            <Text style={styles.text}>{FooterContent.site}</Text>
            </View>
            <View>
                <Text style={styles.heading}>{FooterContent.followUsTxt}</Text>
                <View style={styles.followUs}>
                    <AntDesign name= "facebook-square"  size={24} color={'white'}  ></AntDesign>
                    <AntDesign name= "instagram"  size={24} color={'white'}  ></AntDesign>
                    <AntDesign name="twitter"  size={24} color={'white'} />
                    <AntDesign name="linkedin-square"  size={24} color={'white'} />
                </View>
            </View>
            <View ><Text style={styles.heading}>{FooterContent.quickLinksTxt}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Home")} >{FooterContent.homeLink} </Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("About us")} >{FooterContent.aboutLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Contact us")} >{FooterContent.contactLink}</Text>
            </View>
            <View style={styles.services}><Text style={styles.heading}>{FooterContent.servicesTxt}</Text>
            <Text style={styles.detailedText} onPress={()=>navigation.navigate("Jenitorials")} >{FooterContent.janitorialsLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Leather")} >{FooterContent.leatherLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("StainlessSteel")} >{FooterContent.stainlessteelLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Gravure")} >{FooterContent.gravureLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Flexo")} >{FooterContent.flexoLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Offset")}  >{FooterContent.offsetLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Logistics")}  >{FooterContent.logisticsLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Software")}  >{FooterContent.sofwareLink}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
      flex:1,
      backgroundColor:'black',
      width:"100%",
      height:765,
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
        marginBottom:40
    }
   })