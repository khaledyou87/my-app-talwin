import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListHeaderEn = ({bsma}) => {
  return (
    <View className=" items-center"style={ styles.verseContainer } >
    <Text style={ styles.verse }>{bsma}</Text>
  </View>
  )
}

export default ListHeaderEn

const styles = StyleSheet.create({


    verseContainer: {
        backgroundColor: '#FBF8F3',
        paddingVertical: 20,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
      //   marginBottom:200, //add
      marginBottom:25,
      marginTop:15
   
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