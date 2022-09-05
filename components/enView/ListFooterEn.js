import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListFooterEn = ({nomer}) => {
  return (
    <View className=" m-20 items-center pb-12">
      <Text className=" mb-9  text-lg">- {nomer} -</Text>
    </View>
  )
}

export default ListFooterEn

const styles = StyleSheet.create({})