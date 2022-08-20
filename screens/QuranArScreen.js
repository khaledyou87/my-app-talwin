import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { Entypo,AntDesign } from '@expo/vector-icons';
import AlfahrasAr from '../components/arabVew/AlfahrasAr';
import SuraListAr from '../components/arabVew/SuraListAr';
import AlfahrasEn from '../components/enView/AlfahrasEn';
import SuraListEn from '../components/enView/SuraListEn';

const QuranArScreen = () => {
  return (
    <Screen>


      <AlfahrasAr
      alfahrasAr="الفَهْرَس"
      />


      


     



      <SuraListAr
      suraAr="الفاتحة "
      suraEn="Alfatiha"
      city="Madnia"
      />

    </Screen>
  )
}

export default QuranArScreen

const styles = StyleSheet.create({})