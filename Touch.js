import React from 'react';
import { View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';


export const Touch = () => {
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View>
        <TextInput style={{
          backgroundColor: "#EAEAEA",
          width: 250,
          height: 50,
          borderRadius: 10,
          paddingLeft: 20,
          fontSize: 18
        }} 
        placeholder="enter" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Touch;