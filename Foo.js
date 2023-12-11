import React from "react";
import { View, Text, Button } from "react-native";

class Foo extends React.Component{
    constructor () {
        super();
        this.state = {
            counter : 0,
        };
    }

    componentDidMount(){
    console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount ")
    }

    render(){
        return(
            <View style={{
                width: 100, 
                height: 100, 
                borderRadius: 30, 
                backgroundColor: "#aeaeae",
                justifyContent: "center",
                alignItems: "center"
                }}>
                <Text style={{fontSize: 20}}>{this.state.counter}</Text>
                <Button title= "arttır" onPress={() => {
                    this.setState({
                        counter: this.state.counter + 1,
                    });
                }}
                />
            </View>
        );
    }
}
export default Foo;