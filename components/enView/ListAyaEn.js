import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListAyaEn = ({aya,index}) => {
  return (
    <View style={ styles.verseContainer } >
      
    <View className=" ml-8  w-9 h-5 items-center " > 
   
    </View>
    
      <Text style={ styles.verse }>{aya}</Text>
      
      {/* <ImageBackground source={ chapterBg } resizeMode="cover" style={ styles.chapterNumber } className=" my-4"> */}
          {/* <Text style={ styles.chapterNumberText }>{ index === 0 ? "" : index }</Text> */}
          {/* <Text style={ styles.chapterNumberText }>{index+1}</Text>
        </ImageBackground> */}
        <View className=" absolute bg-orange ml-3 w-8 h-14 items-center pt-3 pb-1 rounded-b-lg " >
        <Text className=" text-white">{index}</Text>
        </View>
        
      
    </View>
  )
}

export default ListAyaEn

const styles = StyleSheet.create({
    verseContainer: {
        backgroundColor: '#FBF8F3',
        paddingVertical: 20,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
      //   marginBottom:200, //add
      marginBottom:25,
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




})