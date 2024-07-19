import * as React from 'react';
import {SafeAreaView,ScrollView } from "react-native";
import {SoftwarestScreenontent} from '../utils/ServiceScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function SoftwaresScreen() {
   return (
      <SafeAreaView>
      <ScrollView>
        <ServicesLayout ScreenContent={SoftwarestScreenontent} />
      </ScrollView>
  </SafeAreaView>
   );
 }
