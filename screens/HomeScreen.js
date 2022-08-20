import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ItemView from '../components/ItemView'
import { Ionicons, Feather } from '@expo/vector-icons';
import HomeVewAr from '../components/arabVew/HomeVewAr';
import HomeVewEn from '../components/enView/HomeVewEn';





const HomeScreen = ({navigation}) => {
  return (
    <Screen className=" bg-metal ">
    <View className="flex-1 items-center  ">



      <View className="bg-white w-96 h-40 rounded-md mb-10 p-6 top-8 items-center">
<Text style={{fontFamily:'NotoNaskhArabicBold'}} className=" text-xl text-black mb-2 ">بسم الله الرحمن الرحيم </Text>
<Text>هذا تطبيق لللقران الكريم باللغتين العربية والانكليزية مع اذكار الصباح والمساء اتمنى ان يعجبكم</Text>
<Text className=" mt-4 text-purple ">ادعوا لنا بالتوفيق</Text>
      </View>


      <View className=" flex-2 flex-row space-x-11 m-2 p-6  ">

      

      
      <HomeVewEn
      title="Quran Karim"
      subTitle="Quran Karim English"
      onPress={()=>navigation.navigate("QuranEn")}
      />


      <HomeVewAr
      title="القرآن الكريم"
      subtTitle="القرآن الكريم باللغة العربية"
      onPress={()=>navigation.navigate("Quran")}
      />
      </View>

      
      <View className=" flex-2 flex-row space-x-11 m-1 p-3  ">

     
      <HomeVewAr
      title="الأذكار"
      subtTitle="أذكار الصباح والمساء"
      />

      
      <HomeVewEn
      title="Quran Karim"
      subTitle="Quran Karim English"
      />


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