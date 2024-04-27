import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './components/buttonTitleStart';

const titleImage = require('./assets/Cat_Base_Sprite.png');


export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image source={titleImage} style={styles.image} />
        <Text>Hello There</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Start" />
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
