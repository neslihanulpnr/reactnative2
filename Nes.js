import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

export const Nes = () => {

const [even, setEven] = useState(0);
const [odd, setOdd] = useState(1);

useEffect(() => {
 console.log("componentDidMount")
},[]); 

useEffect(() => {
    return () => {
        console.log("componentWillUnmount")
    }
},[])


return(   
    <View style={{
        width: 100, 
        height: 100, 
        backgroundColor: '#aeaeae',
        borderRadius: 20,
        alignItems: "center",
        justifyContent:"center"
        }}>
        
        <Text>Even: {even}</Text>
        <Button title="Increase" onPress={() => setEven((pre) => pre + 2)}/>

        <Text>Even: {odd}</Text>
        <Button title="Increase" onPress={() => setOdd((pre) => pre + 2)}/>

    </View>
)
}