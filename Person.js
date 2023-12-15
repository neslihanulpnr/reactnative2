import { ImageBackground } from "react-native";
import { View, Text } from "react-native"


export const Person = () => {
    return(
        <View>
<ImageBackground style={{
    width: 100, 
    height: 100, 
    justifyContent: "center", 
    alignItems: "center"}} 
    source={require("./assets/pink.jpeg")}>
<Text>NESLİHAN</Text>
</ImageBackground>
        </View>
    )
}

export default Person; 