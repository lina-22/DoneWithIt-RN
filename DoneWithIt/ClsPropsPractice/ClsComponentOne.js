import { Component } from "react";
import { View, Text } from "react-native";

class ClsComponentOne extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.props.city}</Text>
                <Text>{this.props.age}</Text>
                <Text></Text>
                <Text></Text>
            </View>
        )
    }
}
export default ClscomponentOne;