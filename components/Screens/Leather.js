import * as React from 'react'
import {SafeAreaView,ScrollView, StyleSheet } from "react-native";
import {LeatherScreenContent} from '../utils/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function LeatherScreen() {
   return (
      <SafeAreaView>
      <ScrollView>
    <ServicesLayout ScreenContent={LeatherScreenContent} />
      </ScrollView>
  </SafeAreaView>
   );
 }
