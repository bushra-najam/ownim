import React from 'react';

import {View, Image, Dimensions} from 'react-native';

const screenWidth = Dimensions.get("window").width;
const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={
         require('../../assets/logo.png')}
        style={{
          width: 100,
          height: 29,
          marginLeft: screenWidth-100,
          marginTop:10,
        }}
      />
    </View>
  );
};

export default ActionBarImage;