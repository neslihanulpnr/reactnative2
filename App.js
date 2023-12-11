import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, } from 'react-native';
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
      <View style={{margin: 5}}></View>
      <Button title='modal' onPress={() => setVisible(true)}/>
      <Modal visible={visible}>
      <View style={styles.modalView}>
      <View style={styles.modal}>
        <Text style={{fontweight: "bold", fontSize: 20}}>Hello World...</Text>
        <Button title='close' onPress={() => setVisible(false)}/>
      </View>  
      </View>
      </Modal>

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

modalView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

modal: {
  width: 200,
  height: 200,
  backgroundColor: "#E3E3E3",
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center'
}

});
