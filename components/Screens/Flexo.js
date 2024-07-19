import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { FlexoScreenontent } from '../utils/ServiceScreensContent'
import ServicesLayout from '../utils/ServicesLayout'

export default function FlexoScreen() {
    return (

        <SafeAreaView >
            <ScrollView>
               <ServicesLayout ScreenContent={FlexoScreenontent} />
            </ScrollView>
        </SafeAreaView>
    )
}
