import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function ItemView({text,onPress}) {
  
  return (
   
    <TouchableOpacity onPress={onPress}>



    <View className=" bg-white   p-8 rounded-md w-40 h-40 items-center justify-center transition-all " >
     <Text style={{fontFamily:'NotoNaskhArabicBold'}}  className=" text-black " >{text}</Text>
    </View>
</TouchableOpacity>
  )
}