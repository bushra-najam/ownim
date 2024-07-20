import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { jentorialsScreenContent } from '../utils/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout'


export default function JenitorialsScreen() {
    return (

        <SafeAreaView >
            <ScrollView>
              <ServicesLayout ScreenContent={jentorialsScreenContent} />
            </ScrollView>
        </SafeAreaView>
    )
}
