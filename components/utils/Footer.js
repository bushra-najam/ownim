import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { FooterContent } from "../constants/ScreensContent";

export default function Footer ({navigation, stack}){
    
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
            <View >
                <Text style={styles.heading}>{FooterContent.quickLinksTxt}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Home")} >{FooterContent.homeLink} </Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("About us")} >{FooterContent.aboutLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Contact us")} >{FooterContent.contactLink}</Text>
            </View>
            <View><Text style={styles.heading}>{FooterContent.servicesTxt}</Text>
            <Text style={styles.detailedText} onPress={()=>navigation.navigate("Jenitorials", { stack:stack})} >{FooterContent.janitorialsLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Leather", {stack:stack})} >{FooterContent.leatherLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("StainlessSteel",{ stack:stack})} >{FooterContent.stainlessteelLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Gravure",{ stack:stack})} >{FooterContent.gravureLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Flexo",{ stack:stack})} >{FooterContent.flexoLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Offset",{ stack:stack})}  >{FooterContent.offsetLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Logistics",{ stack:stack})}  >{FooterContent.logisticsLink}</Text>
                <Text style={styles.detailedText} onPress={()=>navigation.navigate("Software",{ stack:stack})}  >{FooterContent.sofwareLink}</Text>
            </View>
            <View>
                <View style={styles.followUs}>
                    <Text style={styles.FollowUsHeading}>{FooterContent.followUsTxt}</Text>
                    <AntDesign name= "facebook-square"  size={24} color={'white'}  ></AntDesign>
                    <AntDesign name= "instagram"  size={24} color={'white'}  ></AntDesign>
                    <AntDesign name= "twitter"  size={24} color={'white'} />
                    <AntDesign name= "linkedin-square"  size={24} color={'white'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
      flex:1,
      backgroundColor:'black',
      width:"100%",
      height:790,
    },
    text:{
        color:'white'
    },
    heading:{
        fontWeight: 'bold',
        color:'white',
        marginTop:30,
        fontSize: 20,
        marginHorizontal:8
    },
    FollowUsHeading:{
        fontWeight: 'bold',
        color:'white',
        fontSize: 20,
        marginHorizontal:8
    },
    contactInfo:{
        flexDirection:'row',
        columnGap:10,
    },
    followUs:{
        marginTop:30,
        flexDirection:'row',
        columnGap:30,
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

   })