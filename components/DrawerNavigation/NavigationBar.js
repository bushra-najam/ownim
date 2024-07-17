import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import { NavigationContainer } from '@react-navigation/native';
 import Contact from '../Screens/Contact';
 import AboutScreen from '../Screens/About';
 import { MaterialCommunityIcons,AntDesign,MaterialIcons } from '@expo/vector-icons';
 import DrawerItems from './constants/DrawerItems';
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
         tabBarStyle: { backgroundColor: 'white', borderBottomWidth:3, borderBottomColor:"white",borderColor:'pink'   },
         tabBarItemStyle:{marginTop:5},
         tabBarAndroidRipple:true,
         swipeEnabled:false,
       }}
       tabBar={(props)=> <CusTomTab {...props}  />}
>
  
        {
         DrawerItems.map(drawer=>
         <TopTabs.Screen
         key={drawer.name}
           name={drawer.name}

           options={{
            tabBarShowIcon:true,
            tabBarContentContainerStyle:{borderTopColor:"white"},
            tabBarIconStyle:{position:"right"},
            tabBarIcon:({focused})=>
            drawer.iconType==='Material' ?
<MaterialCommunityIcons
                 name={drawer.iconName}
                 size={24}
                 color={focused ? "#e91e63" : "black"}
             />
           :
           drawer.iconType==='MaterialIcons' ?
<MaterialIcons
               name={drawer.iconName}
               size={24}
               color={focused ? "#e91e63" : "black"}
             />
           :
<AntDesign
               name={drawer.iconName}
               size={24}
               color={focused ? "#e91e63" : "black"}
             />
           }}
  
           component={
             drawer.name==='Home' ? HomeScreen
               : drawer.name==='Services' ? ServicesScreen
                 : drawer.name==='About us' ? AboutScreen
                   : Contact
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

</TopTabs.Navigator>

</NavigationContainer>
</>

 );
 
}