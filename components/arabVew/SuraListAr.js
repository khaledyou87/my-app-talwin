import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SuraListAr = ({suraEn,city,suraAr}) => {
  return (
    <View style={{borderWidth:1}}  className=" flex-row pb-3 space-x-2 mx-4 items-center bg-white rounded-2xl h-24  border-purple content-center pt-3 mb-5 ">
   
    <View className='flex-1 m-4 mx-7  '>
    
      
      <Text className='font-bold text-xl text-black '>{suraEn}</Text>
      <Text className=' text-sm text-purple '>{city}</Text>
       
    </View>
    
    
    <View>
 
    <Text style={{fontFamily:'NotoNaskhArabicBold'}}  className='font-bold  text-2xl text-black m-4 mx-7'>{suraAr}</Text>
 
    
    </View>
    
    
  </View>
  )
}

export default SuraListAr

const styles = StyleSheet.create({})