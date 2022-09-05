import { Image, StyleSheet, Text, View } from 'react-native'



const ViewSuEn = ({name,city,verss}) => {
  return (
    <View className="mb-3">
       
      <View className="  p-3 items-center bg-orange rounded-lg  flex-row px-7 ">
        <View className=" flex-1 ">
            
      <Text className=" text-2xl font-bold mb-3  text-white">{name}</Text>
      <Text className="text-sm text-white  ">{city}-{verss}</Text>
        </View>
        

      <Image
          className=" w-24 h-24"
        source={require('../../assets/al6.png')}
      />
        
     </View>
     
    </View>
  )
}

export default ViewSuEn

const styles = StyleSheet.create({})