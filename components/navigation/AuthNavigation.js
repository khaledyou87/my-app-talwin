import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import AppNaviation from './AppNaviation';
import SuraTextAr from '../arabVew/SuraTextAr';
import SuraTextEn from '../enView/SuraTextEn';
import AyaTextScreen from '../../screens/AyaTextScreen';

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Root">
    <Stack.Screen name="Root"
        component={AppNaviation}
        options={{ headerShown: false }}/>
        <Stack.Screen name="QuranArScreen"
        component={AppNaviation}
        options={{ headerShown: false }}/>
       
        <Stack.Screen name="SuraTextScreen"
        component={SuraTextAr}
        options={{ headerShown: false }}/>
         <Stack.Screen name="QuranEnScreen"
        component={AppNaviation}
        options={{ headerShown: false }}/>
        <Stack.Screen name="SuraEnTextScreen"
        component={AyaTextScreen}
        options={{ headerShown: false }}/>
        
  </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})