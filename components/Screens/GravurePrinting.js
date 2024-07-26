import * as React from 'react';
import { View, SafeAreaView, ScrollView } from "react-native";
import { GravurelScreenontent } from '../constants/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function GravureScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View >
                    <ServicesLayout ScreenContent={GravurelScreenontent} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
