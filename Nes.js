import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

export const Nes = () => {

const [even, setEven] = useState(0);
const [odd, setOdd] = useState(1);

useEffect(() => {
 console.log("component render oldu")
},[]); 

useEffect(() => {
    return () => {
        console.log("component silindi")
    }
},[])

useEffect(() => {
    console.log("component güncellendi (even)")
    },[even]);


    useEffect(() => {
        console.log("component güncellendi (odd)")
        },[odd]);

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

        <Text>Odd: {odd}</Text>
        <Button title="Increase" onPress={() => setOdd((pre) => pre + 2)}/>

    </View>
)
}