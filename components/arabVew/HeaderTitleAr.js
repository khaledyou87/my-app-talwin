import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo,Feather  } from '@expo/vector-icons';


const HeaderTitleAr = ({onPress,title}) => {
  return (
    <View className="items-center bg-white flex-row py-3 pl-4">
    <TouchableOpacity onPress={onPress}>
    <Feather name="chevron-left" size={30} color="#8358FF" />
    </TouchableOpacity>
     
      <Text className=" ml-24 text-xl text-purple ">{title}</Text>
  </View>
  )
}

export default HeaderTitleAr

const styles = StyleSheet.create({})