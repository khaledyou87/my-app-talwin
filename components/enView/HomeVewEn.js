import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';

const HomeVewEn = ({title,subTitle,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View className="bg-white  rounded-md w-40 h-40 mx-5 " >
      <View className=" top-5  ml-28">
        
        <Ionicons className=" top-5"  name="ios-log-in-outline" size={30} color="#FF903F" />
        </View >
        <View className=" ml-5  top-16 pb-1">



<Text style={{fontFamily:'NotoNaskhArabicBold'}} className=" text-base text-black  " >{title}</Text>


</View>
<Text className=" text-xs top-16 ml-5 text-orange " >{subTitle}</Text>

      </View>
      </TouchableOpacity>
  )
}

export default HomeVewEn