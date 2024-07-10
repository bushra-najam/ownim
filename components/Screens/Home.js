import * as React from 'react';

import { Platform,Text, SafeAreaView,View, ScrollView, StyleSheet} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Cards from '../utils/Cards';
import {HomeCards} from '../../constants/CardsData'
import Footer from '../utils/Footer';
function HomeScreen({navigation}) {

  const [images,setImage] = React.useState( [
  require("../../assets/img1.png"),
  require("../../assets/img2.png"),
  require("../../assets/img3.png"),
  require("../../assets/img4.png"), // Network image
  require('../../assets/img5.png') 
])
  
return (
<SafeAreaView style={styles.Container} >
  <ScrollView>
<SliderBox
  images={images}
  sliderBoxHeight={250}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="black"
  paginationBoxVerticalPadding={20}
  inactiveDotColor="#90A4AE"
  autoplay={true}
  activeOpacity={0.5}
  circleloop
  autoplayInterval={1000}
/>
<View>
  <Text style={{textAlign:'center',fontSize:20, fontWeight:'bold', marginTop:30 }} >
    Services of Ownim Corporate</Text>
  </View>
   {HomeCards.map((item,indx)=><Cards key={indx} name={item.name} image={item.image}  desc={item.desc} url={item.url} navigation={navigation} />)} 
<Footer/>
   </ScrollView>
</SafeAreaView>
   );
 }

 const styles =  StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#f5f5f5',
  
  }
 })

 export default HomeScreen