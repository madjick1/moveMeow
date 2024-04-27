import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
// import Button from '../buttonTitleStart';

const titleImage = require('../../assets/Cat_Base_Sprite.png');


export default function HomeScreen({navigation}) {
  const [fontsLoaded] = useFonts({
    'catFont': require('../../assets/fonts/Ginger Cat.ttf'),
  });
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image source={titleImage} style={styles.image} />
        <Text style={{ fontFamily: 'catFont', fontSize: 30 }}>Hello There</Text>
        <StatusBar style="auto" />
      </View>
      <View style={{backgroundColor: '#FFF', flex: 1/10}}>
        <Button 
          title="Start" 
          onPress={() => navigation.navigate("Main")}
        />
      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerContainer: {
    flex: 1/10,
    alignItems: 'center',
    backgroundColor: '#0FF',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

});
