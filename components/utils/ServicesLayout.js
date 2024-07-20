import React from 'react'
import { View, StyleSheet,Text, Image } from 'react-native'
import ContactCard from './ContactCard'
import Footer from './Footer'

export default function ServicesLayout({ScreenContent}) {
    return (
            <View style={styles.container}>
                <Text style={{...styles.heading,color:ScreenContent.colorTheme }}>{ScreenContent.heading}</Text>
                <View style={{...styles.imgContainer, borderColor:ScreenContent.colorTheme}} >
                    {ScreenContent.img}
                </View>
                <View >
                    <Image source={require('../../assets/card-bg.png')} resizeMethod='cover'style={styles.imgTop}  />
                    <Text style={styles.decs} >
                        {ScreenContent.decs}
                    </Text>
                    <Image source={require('../../assets/card-bg2.png')} resizeMethod='cover' style={styles.imgBottom}  />
                </View>
                <ContactCard colorTheme={{textColor:ScreenContent.colorTheme}} />
                <Footer />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white'
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
    },
    decs: {
        alignSelf: 'center',
        marginTop: 2,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        backgroundColor:'#f5f5f5',
        paddingVertical:15
    },
    imgTop:{
        height:50,
        width:50,
        marginTop:20
    },
    imgBottom:{
        height:50,
        width:50,
        alignSelf:'flex-end'
    },
})