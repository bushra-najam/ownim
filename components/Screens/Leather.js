import * as React from 'react'
import {SafeAreaView,ScrollView } from "react-native";
import {LeatherScreenContent} from '../constants/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function LeatherScreen({navigation,route}) {
  if(route?.params?.stack){
    const res=route.params.stack.find((routeNmae)=>routeNmae==route.name) 
    if(!res)
        route.params?.stack.push(route.name);
 } 
   const stack = (route.params?.stack)? route.params.stack:[route.name]
   return (
      <SafeAreaView>
      <ScrollView>
    <ServicesLayout ScreenContent={LeatherScreenContent} navigation={navigation} stack={stack} />
      </ScrollView>
  </SafeAreaView>
   );
 }
