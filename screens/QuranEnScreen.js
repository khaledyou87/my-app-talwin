import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import AlfahrasEn from '../components/enView/AlfahrasEn'
import SuraListEn from '../components/enView/SuraListEn'

const QuranEnScreen = () => {
  return (
    <Screen>

<AlfahrasEn
      alfahrasEn="Alfahras"
      />

<SuraListEn
      suraAr="الفاتحة "
      suraEn="Alfatiha"
      city="Madnia"
      
      
      />



    </Screen>
  )
}

export default QuranEnScreen