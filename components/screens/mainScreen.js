
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function MainScreen( navigation ) {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
      </View>
    </SafeAreaProvider>
  );
}