import React from 'react';

import {View, Image} from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={
         require('../../assets/logo.png')}
        style={{
          width: 100,
          height: 29,
          marginLeft: 300,
          marginTop:10,
        }}
      />
    </View>
  );
};

export default ActionBarImage;