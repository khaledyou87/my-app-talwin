import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

import Quan from './Quan';
import Love from './src/Love';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AuthNavigation from './components/navigation/AuthNavigation';
import NavigationTheme from './components/navigation/NavigationTheme';
import AppNaviation from './components/navigation/AppNaviation';
import AlfahrasAr from './components/arabVew/AlfahrasAr';
import SuraListAr from './components/arabVew/SuraListAr';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
     DroidSans: require('./assets/fonts/DroidSans.ttf'),
    NotoNaskhArabicBold:require('./assets/fonts/NotoNaskhArabic-Bold.ttf')
  });
 
 
  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />
  }


  return (
    <TailwindProvider>
      <NavigationContainer theme={NavigationTheme}>
<AuthNavigation/>

      </NavigationContainer>
      {/* <AlfahrasAr/>
      <SuraListAr/> */}
   
    </TailwindProvider>
  );
}


