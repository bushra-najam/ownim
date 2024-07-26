import * as React from 'react';
import {SafeAreaView,ScrollView, Button } from "react-native";
import {OffsetScreenontent} from '../constants/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function OffsetScreen() {
   return (
      <SafeAreaView>
      <ScrollView>
      <ServicesLayout ScreenContent={OffsetScreenontent} />
      </ScrollView>
  </SafeAreaView>
   );
 }
