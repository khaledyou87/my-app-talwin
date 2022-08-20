import { View, Text } from 'react-native'
import React from 'react'

export default function Quan() {
  return (

    
    <View className="flex-2 flex-row m-10  space-x-11  " >


        

<ItemView 
     
text=" القرآن الكريم"
onPress={()=>navigation.navigate("Quran")}

/>
        
      <View className="bg-white  rounded-md w-40 h-40 ">
      <View className=" top-5  ml-28">
        
      <Ionicons className=" top-5"  name="ios-log-in-outline" size={30} color="#8358FF" />
      {/* <Feather className=" top-5" name="log-in" size={30} color="#8358FF" /> */}
      </View>
      <View className=" mr-4  top-14 ">



      <Text style={{fontFamily:'NotoNaskhArabicBold'}} className=" text-lg  " > القرآن الكريم</Text>
     

      </View>
      <Text className=" text-xs top-16 mr-4 text-purple " > القران الكريم باللغة العربية</Text>

      </View>

      </View>



  )
}