import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Screen from '../Screen'
import { Ionicons,AntDesign,FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import chapterBg from '../../assets/images/g.png';
import ListHeaderEn from '../enView/ListHeaderEn';
import ListFooterEn from '../enView/ListFooterEn';
import HeaderTitleAr from './HeaderTitleAr';
import ViewSuAr from './ViewSuAr';
import ListAyaAr from './ListAyaAr';

const SuraTextAr = () => {
  const route = useRoute();
  let listViewRef;
  const navigation=useNavigation()
  const chapter = route.params 

  const TopHandler=()=>{
    listViewRef.scrollToOffset({offset:0, animated:true})
  }
  const EndHandler=()=>{
    listViewRef.scrollToEnd({animated:true})
  }
  return (
    
    <>
              <Screen className=" bg-purple">
             <HeaderTitleAr
                      onPress={() => navigation.goBack()}
                      title="Quran EN-AR"

                         />
                <View style={ styles.verses } >
                <ViewSuAr 
                      name={chapter.namePron}
                       city={chapter.class === 'مكية' ? 'MECCAN' : 'MEDINAN' }
                        verss={chapter.versesNumber}
  
  
  
                              />
 {/* <SuraTitle
bsm={(chapter.nameAr+ ' بسم الله الرحمن الرحيم')=== ('التوبة'+ ' بسم الله الرحمن الرحيم')? "" : (' بسم الله الرحمن الرحيم')}
sutit={chapter.nameAr}
onPress={() => navigation.goBack()}


/> */}
 {/* <Text style={ styles.verse }>{(chapter.nameAr+ ' VERSES')=== ('الفاتحة'+ ' VERSES')? "" : (chapter.nameAr+ ' VERSES')}</Text> */}
 {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
         <FlatList
                   showsVerticalScrollIndicator={false}
                    data={chapter.verses}
                ref={(ref)=>{
                      listViewRef =ref
                                          }}
                ListHeaderComponent={<ListHeaderEn
                bsma={(chapter.nameAr+ 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')=== ('التوبة'+ 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')? "" : ('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')}
                               />}
                 ListFooterComponent={<ListFooterEn
                 nomer={chapter.id}

                               />}
                   renderItem={({item,index}) =>

                  <ListAyaAr
                    aya={item}
                       index={index+1}

                />

                  }
                />
                      <TouchableOpacity style={[styles.end, {left:31.5,top:20}]}
                              onPress={EndHandler}>
                      <MaterialCommunityIcons name="chevron-down" size={30} color="#8358FF" />
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.end, {left:32,bottom:250}]}
                                onPress={TopHandler}>
 
                      <MaterialCommunityIcons name="chevron-triple-up" size={30} color="#8358FF" />
  
                        </TouchableOpacity>


                         </View>  

{/* <ScrollView>
  {chapter.map((vers)=>(
     <View>
     <Text>{vers.verses}</Text>
   </View>
  ))}
  
</ScrollView> */}

</Screen>

               </>


  )
}

export default SuraTextAr

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#808080'
  },
  container: {
    backgroundColor: '#FFFCF6',
  
   
   
 },
 verses: {
   padding: 20,
   paddingBottom: 100,
    backgroundColor:"#F5F3FF"
   
   
 },
 vers: {  ///add
   padding: 20,
   paddingBottom: 10,
   position:"absolute",
   bottom:1000, //add
   top:200 //add
   
   
   
   
   
 },
 verseContainer: {
   backgroundColor: '#FBF8F3',
   paddingVertical: 20,
   
  
   borderRadius: 10,
   borderBottomWidth: 1,
   borderColor: '#f1f1f1',
 //   marginBottom:200, //add
 marginBottom:10,

   
   
   
 },
 verse: {
   flexShrink: 1,
   flexGrow: 1,
   fontSize: 20,
   color:"#232323",
  
   lineHeight: 40,
   paddingHorizontal: 20,
   paddingTop:8
   
 },
 verseBullet: {
   flexDirection:"row-reverse",
   marginLeft:20
},
chapterNumber: {
 width: 40,
 height: 40,
 justifyContent: 'center',
 alignItems: 'center',
 marginRight: 15,
 marginLeft:7,
 
 
},
chapterNumberText: {
 fontWeight: 'bold',
 color: '#4e4e4e',
 fontSize:13
},
end:{
 position:"absolute",
 justifyContent:"center",
 alignItems:"center"
}


})