import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { Entypo,AntDesign } from '@expo/vector-icons';
import AlfahrasAr from '../components/arabVew/AlfahrasAr';
import SuraListAr from '../components/arabVew/SuraListAr';
import AlfahrasEn from '../components/enView/AlfahrasEn';
import SuraListEn from '../components/enView/SuraListEn';
import ChapterService from '../services/ChapterService';
import ChapterEnService from '../services/ChaptEnService';

const QuranArScreen = ({navigation}) => {


  const chapters = ChapterEnService.getChapters()





  return (
    <Screen>
       <AlfahrasAr
      alfahrasAr="الفَهْرَس"
      />
  
      {/* <SuraListAr
      suraAr="الفاتحة "
      suraEn="Alfatiha"
      city="Madnia"
      /> */}
      
      <FlatList
           data={chapters}
          keyExtractor={(chapter) => chapter.id.toString()}
          renderItem={({item}) => 
      <SuraListAr
          
          suraAr={item.nameAr}
          suraEn={item.namePron}
          city={item.class}
          suraNum={item.versesNumber}
           onPress={()=>navigation.navigate("SuraTextScreen",item)}


      />}
      />


    </Screen>
  )
}

export default QuranArScreen

const styles = StyleSheet.create({})