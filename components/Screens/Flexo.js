import React from 'react'
import {  SafeAreaView, ScrollView } from 'react-native'
import { FlexoScreenontent } from '../utils/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout'

export default function FlexoScreen({navigation}) {
    return (

        <SafeAreaView >
            <ScrollView>
               <ServicesLayout ScreenContent={FlexoScreenontent} />
            </ScrollView>
        </SafeAreaView>
    )
}
