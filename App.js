import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Nes } from './Nes'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Nes/>
      <View style={{margin: 5}}></View>
      <Button title="Modal"/>

    </View>
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
