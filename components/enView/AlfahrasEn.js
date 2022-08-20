import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlfahrasEn = ({alfahrasEn}) => {
  return (
    <View className=" items-center  p-7">
    <View className="bg-orange px-10   rounded-2xl ">
    <Text style={{fontFamily:'NotoNaskhArabicBold'}}  className="p-3 top-1 text-white text-lg ">{alfahrasEn}</Text>
    </View>
  </View>
  )
}

export default AlfahrasEn

const styles = StyleSheet.create({})