import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import { NavigationContainer } from '@react-navigation/native';
 import ContactUsScreen from '../Screens/Contact';
 import AboutScreen from '../Screens/About';
 import { MaterialCommunityIcons,AntDesign,MaterialIcons } from '@expo/vector-icons';
 import DrawerItems from '../constants/NavItems';
 import ServicesScreen from '../Screens/Services';
 import HomeScreen from '../Screens/Home';
import LeatherScreen from '../Screens/Leather';
import FlexoScreen from '../Screens/Flexo';
import CusTomTab from '../utils/CustomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JenitorialsScreen from '../Screens/Jenitorials';
import GravurePrintingScreen from '../Screens/GravurePrinting';
import OffsetPrintingScreen from '../Screens/OffsetPrinting';
import LogisticsScreen from '../Screens/Logistics';
import Softwares from '../Screens/Softwares';
import StainlessSteelScreen from '../Screens/StainlessSteel';
import Footer from '../utils/Footer';
import WhatsappButton from '../utils/WhatsappButton';
import { View } from 'react-native';

const TopTabs = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
export default function NavigationBar() {
  
 return (
  <>
<NavigationContainer >
<TopTabs.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarInactiveTintColor: "black",
         tabBarLabelStyle: { fontSize: 12,height:15, width:100},
         tabBarStyle: { backgroundColor: 'white', borderBottomWidth:3, borderBottomColor:"white" },
         tabBarItemStyle:{marginTop:5},
         tabBarAndroidRipple:true,
         swipeEnabled:false,
         animationEnabled:false,
       }}
       tabBar={(props)=> <CusTomTab {...props}  />}
>
  
        {
         DrawerItems.map(drawer=>
         <TopTabs.Screen
         key={drawer.name}
           name={drawer.name}

           options={{
            animationEnabled:false,
            tabBarShowIcon:true,
            tabBarContentContainerStyle:{borderTopColor:"white"},
            tabBarIconStyle:{position:"right"},
            tabBarIcon:({focused})=>
            drawer.iconType==='Material' ?
<MaterialCommunityIcons
                 name={drawer.iconName}
                 size={28}
                 color={focused ? "#e91e63" : "black"}
             />
           :
           drawer.iconType==='MaterialIcons' ?
<MaterialIcons
               name={drawer.iconName}
               size={28}
               color={focused ? "#e91e63" : "black"}
             />
           :
<AntDesign
               name={drawer.iconName}
               size={28}
               color={focused ? "#e91e63" : "black"}
             />
           }}
  
           component={
             drawer.name==='Home' ? HomeScreen
               : drawer.name==='Services' ? ServicesScreen
                 : drawer.name==='About us' ? AboutScreen
                   : ContactUsScreen
           }
/>)  
       }
      <Stack.Screen key={"Flexo"} name="Flexo" options={{tabBarIcon:()=>{},  headerShown:false}}  component={FlexoScreen} />
      <Stack.Screen  key={"Leather" }name="Leather" options={{tabBarIcon:()=>{},headerShown:false}} component={LeatherScreen} />
      <Stack.Screen key={"Jenitorials"} name="Jenitorials" options={{tabBarIcon:()=>{},  headerShown:false}}  component={JenitorialsScreen} />
      <Stack.Screen  key={"Gravure" }name="Gravure" options={{tabBarIcon:()=>{},headerShown:false}} component={GravurePrintingScreen} />
      <Stack.Screen key={"Offset"} name="Offset" options={{tabBarIcon:()=>{},  headerShown:false}}  component={OffsetPrintingScreen} />
      <Stack.Screen  key={"Logistics" }name="Logistics" options={{tabBarIcon:()=>{},headerShown:false}} component={LogisticsScreen} />
      <Stack.Screen  key={"Software" }name="Software" options={{tabBarIcon:()=>{},headerShown:false}} component={Softwares} />
      <Stack.Screen  key={"StainlessSteel" }name="StainlessSteel" options={{tabBarIcon:()=>{},headerShown:false}} component={StainlessSteelScreen} />
      <Stack.Screen  key={"Footer" } name="Footer" options={{tabBarIcon:()=>{},headerShown:false}} component={Footer} />
        
</TopTabs.Navigator>

</NavigationContainer>
<View  style={{width:50, paddingBottom:20, alignSelf:'flex-end', marginTop:-60}}>
<WhatsappButton/>
</View>
</>

 );
 
}