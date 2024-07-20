import * as React from 'react';
import {SafeAreaView,ScrollView, StyleSheet } from "react-native";
import {LogisticstScreenontent} from '../utils/ScreensContent'
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

 