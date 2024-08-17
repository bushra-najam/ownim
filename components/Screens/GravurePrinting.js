import * as React from 'react';
import { View, SafeAreaView, ScrollView } from "react-native";
import { GravurelScreenontent } from '../constants/ScreensContent'
import ServicesLayout from '../utils/ServicesLayout';

export default function GravureScreen({navigation,route}) {
    if(route?.params?.stack){
        const res=route.params.stack.find((routeNmae)=>routeNmae==route.name) 
        if(!res)
            route.params?.stack.push(route.name);
     } 
    const stack = (route.params?.stack)? route.params.stack:[route.name];
    return (
        <SafeAreaView>
            <ScrollView>
                <View >
                    <ServicesLayout ScreenContent={GravurelScreenontent} navigation={navigation} stack={stack} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
