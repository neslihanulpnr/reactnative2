import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { Nes } from './Nes';
import { NavigationContainer } from '@react-navigation/native';
import Foo from "./Foo";

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Nes/>
      <View style={{margin: 5}}></View>
      <Foo/>

    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
