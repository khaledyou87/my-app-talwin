import { StyleSheet, Text, TouchableOpacity, View,onPress } from 'react-native'
import React from 'react'

const SuraListAr = ({suraEn,city,suraAr,suraNum,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{borderWidth:1}}  className=" flex-row pb-3 space-x-2 mx-4 items-center bg-white rounded-2xl h-24  border-purple content-center pt-3 mb-5 ">
   
    <View className='flex-1 m-4 mx-7 pb-1  '>
    
      
      <Text style={{fontFamily:'NotoNaskhArabicBold'}} className='font-bold text-xl text-black '>{suraEn}</Text>
      <Text style={{fontFamily:'NotoNaskhArabicBold'}} className=' text-sm text-purple mt-2 '>{suraNum} Vers</Text>
       
    </View>
    
    
    <View className='m-4 mx-7 '  >
 
    <Text style={{fontFamily:'NotoNaskhArabicBold'}}  className='font-bold  text-2xl text-black'>{suraAr}</Text>
    <Text style={{fontFamily:'NotoNaskhArabicBold'}}  className=' text-base text-purple mr-1 '>{city}</Text>
 
    
    </View>
    
    
  </View>
  </TouchableOpacity>
  )
}

export default SuraListAr

const styles = StyleSheet.create({})