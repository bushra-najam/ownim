import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ screen }) {
  const navigation = useNavigation();
  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={35} color="black" />
      </TouchableOpacity>
      <View>
        <Image
          source={require('../../assets/logo.png')}
          style={headerStyles.tinyLogo}
        />
      </View>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    elevation: 5,
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: "red",
    borderBottomWidth: 2,

  },
  tinyLogo: {
    right: '30',
    width: 170,
    height: 70,
  },
});