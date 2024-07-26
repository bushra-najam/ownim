import * as React from 'react';
import {SafeAreaView,ScrollView } from "react-native";
import {LogisticstScreenontent} from '../constants/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function LogisticsScreen() {
   return (
      <SafeAreaView>
      <ScrollView>
        <ServicesLayout ScreenContent={LogisticstScreenontent} />
      </ScrollView>
  </SafeAreaView>
   );
 }

 