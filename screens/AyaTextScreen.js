import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import HeaderTitleEn from '../components/enView/HeaderTitleEn';
import ViewSuEn from '../components/enView/ViewSuEn';
import ListHeaderEn from '../components/enView/ListHeaderEn';
import ListFooterEn from '../components/enView/ListFooterEn';
import ListAyaEn from '../components/enView/ListAyaEn';
import { Ionicons,AntDesign,FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

const AyaTextScreen = ({route}) => {
    let listViewRef;
    //  const [ chapter, setChapter ] = useState({})
    // const [loading, setLoading] = useState(false);


 const navigation=useNavigation()

  
 

    // useEffect( () => {
      
    //   result()
      
    //  }, [])
    // const result =  async()=>{
    
      
    //  setChapter( route.params.chapter)
      
        
    //   };


   

  
// const [ chapter, setChapter ] = useState(null)

// useEffect(async () => {
//   setChapter(route.params.chapter)
// }, [])

// const chapter=route.params
// console.log(chapter)
   
const chapter = route.params 


// const cards = React.useMemo(() => {chapter.verses.map(item => {
//   return <View key={item.id}>
    
//   </View>
// })
// }, [chapter.verses]);


// if (!chapter) {
//   return <LoadingScreen />
// }

const TopHandler=()=>{
  listViewRef.scrollToOffset({offset:0, animated:true})
}
const EndHandler=()=>{
  listViewRef.scrollToEnd({animated:true})
}


// if ( !chapter) {
//   return <LoadingScreen />
// }
    
    return (


        

  //       <ScrollView style={ styles.container }>
  //       <View style={ styles.verses }>
  //         { chapter.verses && chapter.verses.map((verse, index) => (
  //           <View style={ styles.verseContainer } key={ index }>
  //             <Text style={ styles.verse }>
  //               {/* <Image source={ verseBullet } resizeMode="contain" style={ styles.verseBullet }></Image> */}
               
                
  //               <Text>
  //                   {verse}   ﴿{index}﴾      
                  
                    
                  
                  
                  
  //               </Text>
                
                
                
                
  //             </Text>
  //             <View style={ styles.verseBullet }>
  //               <Text style={{fontSize: 20,}}> ‎﴾‎ {index} ﴿‎
  // </Text>
  //               </View>
              
  //           </View>
  //         )) }
  //       </View>
  
  
       
  //     </ScrollView>



//        <ScrollView style={ styles.container }>
//        <View style={ styles.verses }>
         
//            <View style={ styles.verseContainer } >
//              <Text style={ styles.verse }>
//                {/* <Image source={ verseBullet } resizeMode="contain" style={ styles.verseBullet }></Image> */}
              
               
//                <Text >
//                 {chapter.vers}            
                 
                   
                 
                 
                 
//                </Text>
               
               
               
               
//              </Text>
//              <View style={ styles.verseBullet }>
//                <Text style={{fontSize: 20,}}> 
//  </Text>
//                </View>
             
//            </View>
        
//        </View>
 
 
      
//      </ScrollView>
              <>
              <Screen>
             <HeaderTitleEn
                      onPress={() => navigation.goBack()}
                      title="Quran EN-AR"

                         />
                <View style={ styles.verses } >
                <ViewSuEn 
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
                    data={chapter.verse}
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

                  <ListAyaEn
                    aya={item}
                       index={index+1}

                />

                  }
                />
                      <TouchableOpacity style={[styles.end, {left:31.5,top:20}]}
                              onPress={EndHandler}>
                      <MaterialCommunityIcons name="chevron-down" size={30} color="#FF903F" />
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.end, {left:32,bottom:250}]}
                                onPress={TopHandler}>
 
                      <MaterialCommunityIcons name="chevron-triple-up" size={30} color="#FF903F" />
  
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

export default AyaTextScreen

const styles = StyleSheet.create({


    container: {
        backgroundColor: '#FFFCF6',
      
       
       
     },
     verses: {
       padding: 20,
       paddingBottom: 100,
        backgroundColor:"#FFEDD5"
       
       
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