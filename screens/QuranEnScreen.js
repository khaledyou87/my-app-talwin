import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import AlfahrasEn from '../components/enView/AlfahrasEn'
import SuraListEn from '../components/enView/SuraListEn'
import ChapterEnService from '../services/ChaptEnService'

const QuranEnScreen = ({navigation}) => {



  const chapters = ChapterEnService.getChapters()

  return (
    <Screen>

<AlfahrasEn
      alfahrasEn="Alfahras"
      />



<View>
      <FlatList
           data={chapters}
          keyExtractor={(chapter) => chapter.id.toString()}
          renderItem={({item}) => 
          <SuraListEn
          suraAr={item.nameAr}
          suraEn={item.namePron}
          city={item.class === 'مكية' ? 'MECCAN' : 'MEDINAN' }
          onPress={()=>navigation.navigate("SuraEnTextScreen",item)}
          
          
          />}
      />
    </View>

    </Screen>
  )
}

export default QuranEnScreen