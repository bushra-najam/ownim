import * as React from 'react';
import { SafeAreaView,ScrollView } from "react-native";
import {StainlessSreelScreenontent} from '../utils/ServiceScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function StainlessSteelScreen() {
   return (
      <SafeAreaView>
      <ScrollView>
        <ServicesLayout  ScreenContent={StainlessSreelScreenontent}/>
      </ScrollView>
  </SafeAreaView>
   );
 }
