import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlfahrasAr = ({alfahrasAr}) => {
  return (
    <View className=" items-center  p-7">
    <View className="bg-purple px-12   rounded-2xl ">
    <Text style={{fontFamily:'NotoNaskhArabicBold'}}  className="p-3 text-white text-lg ">{alfahrasAr}</Text>
    </View>
  </View>
  )
}

export default AlfahrasAr

const styles = StyleSheet.create({})