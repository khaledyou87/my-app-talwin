import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import { Entypo,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'; 

import QuranArScreen from '../../screens/QuranArScreen';
import QuranEnScreen from '../../screens/QuranEnScreen';

export default function AppNaviation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        tabBarActiveBackgroundColor:"#A2ABFF",
        
        tabBarShowLabel:false,
      headerShown: false,
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "#969696",
      tabBarStyle: {
        backgroundColor:"#ffff",
        borderColor:"#ffff",
        borderRadius:6,
        bottom:5
        
        
      },
    }}
  >
         <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Quran"
        component={QuranArScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="book-open-variant" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />

        <Tab.Screen
        name="QuranEn"
        component={QuranEnScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name="translate"  size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
        
      </Tab.Navigator>
  )
}