import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ItemView from '../components/ItemView'
import { Ionicons, Feather } from '@expo/vector-icons';





const HomeScreen = ({navigation}) => {
  return (
    <Screen className=" bg-metal ">
    <View className="flex-1 items-center  ">
      <View className="bg-white w-96 h-40 rounded-md mb-9 p-6 top-8 items-center">
<Text style={{fontFamily:'NotoNaskhArabicBold'}} className=" text-xl text-black mb-2 ">بسم الله الرحمن الرحيم </Text>
<Text>هذا تطبيق لللقران الكريم باللغتين العربية والانكليزية مع اذكار الصباح والمساء اتمنى ان يعجبكم</Text>
<Text className=" mt-4 text-purple ">ادعوا لنا بالتوفيق</Text>
      </View>






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


      <View className=" flex-2 flex-row space-x-11 m-5  ">

      <View className="bg-white  rounded-md w-40 h-40 ">
      <View className=" top-5  ml-28">
        
        <Ionicons className=" top-5"  name="ios-log-in-outline" size={30} color="#8358FF" />
        </View >
        <View className=" mr-5  top-14 ">



<Text style={{fontFamily:'NotoNaskhArabicBold'}} className=" text-lg  " >الاذكار</Text>


</View>
<Text className=" text-xs top-16 mr-5 text-purple " >اذكار الصباح والمساء</Text>
      </View>

      <View className="bg-white  rounded-md w-40 h-40" >
      <View className=" top-5  ml-28">
        
        <Ionicons className=" top-5"  name="ios-log-in-outline" size={30} color="#FF903F" />
        </View >
        <View className=" ml-5  top-14 ">



<Text style={{fontFamily:'NotoNaskhArabicBold'}} className=" text-base  " >Quran Karim</Text>


</View>
<Text className=" text-xs top-16 ml-5 text-orange " >Quran Karim English</Text>

      </View>

      </View>

        
      </View>
      </Screen>
  )
}

export default HomeScreen


{/* <View className=" flex-row m-8 space-x-20 ">

<View className="bg-red-500 p-8 rounded-md ">
<Button onPress={()=>{}}
title="Learn "
color="red"
accessibilityLabel="Learn more about this purple button"/>

</View>


<View className="bg-red-500 p-8 rounded-md ">
<Button onPress={()=>{}}
title="Learn More"
color="#841584"
accessibilityLabel="Learn more about this purple button"/>

</View>


</View>




<View className=" flex-row m-8 space-x-20 ">

<View>
<Button onPress={()=>{}}
title="Learn More"
color="#841584"
accessibilityLabel="Learn more about this purple button"/>

</View>
<View>
<Button onPress={()=>{}}
title="Learn More"
color="#841584"
accessibilityLabel="Learn more about this purple button"/>

</View> */}



{/* </View> */}