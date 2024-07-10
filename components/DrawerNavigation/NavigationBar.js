import * as React from 'react';
import { Text } from 'react-native';
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
const TopTabs = createMaterialTopTabNavigator();
export default function NavigationBar() {
 return (
<NavigationContainer>
<TopTabs.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor: 'red',
         tabBarInactiveTintColor: "black",
         tabBarLabelStyle: { fontSize: 12,height:15, width:100},
         tabBarStyle: { backgroundColor: 'white', borderBottomWidth:3, borderBottomColor:"white"   },
         tabBarItemStyle:{marginTop:5},
         tabBarAndroidRipple:true,
            
       }}

>
        {
         DrawerItems.map(drawer=>
         <TopTabs.Screen
           key={drawer.name}
           name={drawer.name}
           
           options={{
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
             />,
           }}
  
           component={
             drawer.name==='Home' ? HomeScreen
              // : drawer.name==='Services' ? ServicesScreen
                 : drawer.name==='About us' ? AboutScreen
                   : Contact
           }
/>)
       
       }
<TopTabs.Group navigationKey='Services'   screenOptions={{ presentation: 'dropdown' }}>
<TopTabs.Screen name="Leather" component={LeatherScreen} />
<TopTabs.Screen name="Flexo" component={FlexoScreen} />
</TopTabs.Group>
</TopTabs.Navigator>
</NavigationContainer>
 );
 
}