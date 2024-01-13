import { useFonts } from "expo-font";
import { StyleSheet } from 'react-native'

export const fonts = StyleSheet.create({
    Rubik: {
        fontFamily: 'Rubik'
    }
})

export const useThemeFonts = () => {
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
      });
      
      if (!fontsLoaded) {
        return false;
    }
    return true
}