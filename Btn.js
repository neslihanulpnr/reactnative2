import { View, Switch } from "react-native"
import { useState } from "react"

export const Btn = () => {
    let [status, setStatus] = useState(true)
    return(
        <View>
            <Switch 
            value={status} 
            onValueChange={() => setStatus((prev) => !prev)}
            thumbColor={status ? "#52FF9A" : "#BED2FF"}
            trackColor={{true: "#AFFD1" , false: "#C0E6FF"}}
            />
        </View>
    )
}

export default Btn;