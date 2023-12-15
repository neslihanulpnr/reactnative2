import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text, Modal} from 'react-native';
import { Nes } from './Nes';
import { NavigationContainer } from '@react-navigation/native';
import Foo from "./Foo";
import Touch from "./Touch";
import { useState } from 'react';
import { Counter } from './Counter';
import { Btn } from './Btn';
 

export default function App() {
  let [visible, setVisible] = useState(false)

  return (
    <NavigationContainer>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Nes/>
      <View style={{margin: 5}}></View>
      <Foo/>
      <View style={{margin: 5}}></View>
      <Button title='modal' onPress={() => setVisible(true)}/>
      <Modal visible={visible} animationType='fade'>
      <View style={styles.modalView}>
      <View style={styles.modal}>
        <Text style={{fontWeight: "bold", fontSize: 20}}>Hello World...</Text>
        <Button title='close' onPress={() => setVisible(false)}/>
      </View>  
      </View>
      </Modal>

      <View style={{margin: 5}}></View>

    <Counter/>
    <View style={{margin: 5}}></View>
    <Touch/>
    <Btn/>
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
