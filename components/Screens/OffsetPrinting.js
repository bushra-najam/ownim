import * as React from 'react';
import {SafeAreaView,ScrollView, StyleSheet } from "react-native";
import {OffsetScreenontent} from '../utils/ServiceScreensContent'
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
