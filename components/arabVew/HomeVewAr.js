import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';

const HomeVewAr = ({title,subtTitle,onPress}) => {
  return (

    <TouchableOpacity onPress={onPress}>
    <View className="bg-white  rounded-md w-40 h-40 mx-5 ">
    <View className=" top-5  ml-28">
      
      <Ionicons className=" top-5"  name="ios-log-in-outline" size={30} color="#8358FF" />
      </View >
      <View className=" mr-5  top-14 ">



<Text style={{fontFamily:'NotoNaskhArabicBold'}} className=" text-lg  " >{title}</Text>


</View>
<Text className=" text-xs top-16 mr-5 text-purple " >{subtTitle}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default HomeVewAr