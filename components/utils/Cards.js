import { Platform, StyleSheet, View, Text, Image,Linking } from "react-native";
import * as React from 'react';

export default function Card({ name, image, desc, url, borderColor, navigation }) {
  return (
    <View style={{ ...styles.card, borderColor }}>
      <Image source={image} accessibilityLabel={`${name} ownim`} style={styles.image} resizeMode="cover" />

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name} </Text>
      </View>

      <View style={styles.desc}>
        <Text>{desc} </Text>
      </View>
      <View style={styles.button}>
        <Text  onPress={() => navigation.navigate(url)} style={{color:borderColor, fontWeight:'bold', textDecorationLine: 'underline', textDecorationColor:borderColor  }} >Read More</Text>

      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 3,
    padding: 16,
    margin: 16,
    paddingTop: 0,

    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      }
    })
  },
  nameContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%'
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  desc: {
    fontSize: 22,
    marginBottom: 10
  },
  image: {
    width: "109%",
    height: 210,
    marginBottom: 16,
    marginTop: 0,
    alignSelf: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 3,
    borderTopEndRadius: 16
  },
  button: {
    width: 160,
    marginBottom: 2,
    flexDirection: 'row'
  },
  bcgImg: {
    alignSelf: 'flex-start',
    height: 50,
    width: 50
  },
  bcgImg2: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    paddingRight: 0
  },
})
