import React from 'react';
import { View, TouchableWithoutFeedback, } from 'react-native';


export const Touch = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: "purple",
        borderRadius: 15
    }}></View>
    </TouchableWithoutFeedback>
  );
};

export default Touch;