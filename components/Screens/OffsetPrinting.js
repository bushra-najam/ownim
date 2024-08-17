import * as React from 'react';
import {SafeAreaView,ScrollView } from "react-native";
import {OffsetScreenontent} from '../constants/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function OffsetScreen({navigation,route}) {
 route.params?.stack?.push(route.name);
 const stack = (route.params?.stack)? route.params.stack:[route.name]
   return (
      <SafeAreaView>
      <ScrollView>
      <ServicesLayout ScreenContent={OffsetScreenontent} navigation={navigation} stack={stack} />
      </ScrollView>
  </SafeAreaView>
   );
 }
