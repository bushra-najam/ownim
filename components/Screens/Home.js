import * as React from 'react';

import { Pressable, Text, SafeAreaView, View, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Cards from '../utils/Cards';
import { ProductCards, ServicesCards } from '../../constants/CardsData'
import Footer from '../utils/Footer';
import ContactCard from '../utils/ContactCard';

function HomeScreen({ navigation }) {

  const [images, setImage] = React.useState([
    require("../../assets/img1.png"),
    require("../../assets/img2.png"),
    require("../../assets/img3.png"),
    require("../../assets/img4.png"), // Network image
    require('../../assets/img5.png')
  ])

  return (
    <SafeAreaView  >
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.Container}>
            <SliderBox
              images={images}
              sliderBoxHeight={250}
              dotColor="black"
              paginationBoxVerticalPadding={20}
              inactiveDotColor="#90A4AE"
              autoplay={true}
              activeOpacity={0.5}
              circleloop
              autoplayInterval={1000}
            />

            <View>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold',padding:20,color:"midnightblue" }} >
                Welcome to Ownim Corporation!</Text>
                </View>

                <Image source={require('../../assets/homeScreen/topPic.png')} style={{height:450, width:410, alignSelf: 'center'}} />

              <View style={{ padding: 15, backgroundColor:"#f5f5f4" }}>
                <Text style={{ fontSize: 18, fontWeight: '900' }}>What are out products?</Text>
                <Text style={{paddingVertical:5}}>
                  Ownim  Corporation  excels  in  manufacturing  high-quality  janitorial  and consumable products, premium leather items, and stainless steel racks. We are dedicated to providing durable, efficient solutions tailored to meet the diverse needs of our clients in various industries.
                  </Text>

                 
            <View style={styles.secondSection}>
              <View>
                <View style={styles.seconSectionImgs}>
                  <View>
                    <Image source={require('../../assets/homeScreen/image1.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image2.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image3.png')} style={styles.img} />

                  </View>
                  <View>
                    <Image source={require('../../assets/homeScreen/image4.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image5.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image6.png')} style={styles.img} />
                  </View>

                  <View>
                    <Image source={require('../../assets/homeScreen/image7.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image8.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image9.png')} style={styles.img} />
                  </View>

                  <View>
                    <Image source={require('../../assets/homeScreen/image9.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image10.png')} style={styles.img} />
                    <Image source={require('../../assets/homeScreen/image11.png')} style={styles.img} />
                  </View>
                </View>
              </View>
            </View>
          </View>

                <View style={{ marginVertical: 8, padding:15 }} >
                  <Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle1}  onPress={()=>navigation.navigate("Leather")} ><Text style={styles.circleTxt}>Leather Products</Text></Pressable>
                  
                  <View style={{ flexDirection: 'row', float: 'left', justifyContent: 'space-between' }}>
                    <Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle1} onPress={()=>navigation.navigate("StainlessSteel")} ><Text style={styles.circleTxt} >stainless Steel</Text></Pressable>
                    <Text style={{ alignSelf: 'center', paddingBottom: 32, fontWeight: '900', fontSize: 20, color: '#e91e63' }}>PRODUCTS</Text>

                    <Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle1} onPress={()=>navigation.navigate("Jenitorials")}  ><Text style={styles.circleTxt}>Jenoitorial Products</Text></Pressable>
                  </View>
                </View>
                
              
            </View>
            <View>{ProductCards.map((item, indx) => <Cards key={indx} name={item.name} image={item.image} desc={item.desc} url={item.url} navigation={navigation} borderColor={"#e91e63"} />)}
            </View>
       
            <View style={{ padding: 15, backgroundColor:"#f5f5f4" }}>
                <Text style={{ fontSize: 18, fontWeight: '900' }}>What are out Services?</Text>
                <Text style={{paddingVertical:5}}>
                At Ownim Corporation, we provide comprehensive printing solutions including gravure, flexo, and offset printing, delivering unmatched quality and precision. Additionally, as a versatile software house and logistics service provider, we ensure seamless digital and physical connectivity tailored to our clients' diverse needs.
                  </Text>
                  </View>
                  <Image source={require('../../assets/homeScreen/bg2.png')} style={{alignSelf:'flex-start', width:400, height:300}}  resizeMode='stretch'/>


          <View style={{ paddingHorizontal: 11 }}>
            <View style={{ marginVertical: 2, }} >
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal:45 }}>

                <View style={{ paddingTop: 20, paddingHorizontal:15 }} >
                  <Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle2}  onPress={()=>navigation.navigate("Gravure")}  ><Text style={styles.circleTxt}>Gravature Printing</Text></Pressable>
                </View>

                

                <View style={{ paddingTop: 20, paddingHorizontal:15 }}>
                  <Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle2}  onPress={()=>navigation.navigate("Flexo")} ><Text style={styles.circleTxt}>Flexo Printing</Text></Pressable>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 18 }}>
                <View><Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle2} onPress={()=>navigation.navigate("Logistics")} ><Text style={styles.circleTxt} >Logistic Services</Text></Pressable></View>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 18, color: 'midnightblue'}}>SERVICES</Text>
                <View ><Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle2}   onPress={()=>navigation.navigate("Flexo")}  ><Text style={styles.circleTxt  }>Flexo Printing</Text></Pressable>
                </View>
                
              </View>
              <View style={{ paddingBottom: 15 }}><Pressable android_ripple={{ color: 'white', borderless: false, radius: 15 }} style={styles.circle2} onPress={()=>navigation.navigate("Software")} ><Text style={styles.circleTxt}>Software development</Text></Pressable></View>

            </View>
          </View>

          <View>
            {ServicesCards.map((item, indx) => <Cards key={indx} name={item.name} image={item.image} desc={item.desc} url={item.url} navigation={navigation} borderColor={"navy"} />)}
          </View>

<View style={{padding:20, backgroundColor:'aliceblue'}}>
  <View style={{flexDirection:'row'}} >
  <Text style={{fontSize:16, fontWeight:800, color:'navy'}}>PROJECTS & ACHIEVMENTS</Text>
  <Image source={require('../../assets/homeScreen/medal.png' )}  resizeMode={'cover'}  style={{height:20, width:20, marginHorizontal:10}} />
  </View>
  <Text>At Ownim Corporation, our projects range from innovative print solutions in gravure, flexo, and offset printing to advanced software development and strategic logistic services, setting new standards in each field. We have successfully led the market with our state-of- the-art janitorial products, premium leather goods, and robust stainless steel racks, continually exceeding client expectations. Our achievements include significant partnerships with industry leaders, awards for product design and sustainability, and a consistent record of improving operational efficiencies for our clients. These milestones underscore our commitment to innovation and quality, reaffirming our position as a leader in diverse industries.</Text>
  </View>
<Image source={require('../../assets/homeScreen/teamwork.png')} />
          <View style={{ backgroundColor: '#f5f5f5', alignItems:'center', paddingVertical:10 }}>
            <Text style={{ color: 'navy', fontWeight: '900', fontSize: 15, paddingTop:10, }}>Contact US </Text>
            <ContactCard />
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondSection: {
    height: 300,
    backgroundColor: '#f5f5f5',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  secondSectionTxt: {
    fontSize: 20,
    color: "navy",
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 10
  },
  thirdSectionTxt: {
    fontSize: 20,
    color: "#e91e63",
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  fourthSectionTxt: {
    fontSize: 20,
    color: "lightskyblue",
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  seconSectionImgs: {
    flexDirection: 'row'
  },
  img: {
    height: 80,
    width: 80,
    margin: 8
  },
  thirdSection: {
    height: 450,
    backgroundColor: 'lightpink',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 12
  },
  fourthSection: {
    height: 450,
    backgroundColor: 'midnightblue',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 12
  },
  line: {
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e91e63',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e91e63"
  },
  circle2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'midnightblue',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'midnightblue'
  },
  circleTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  },

})

export default HomeScreen