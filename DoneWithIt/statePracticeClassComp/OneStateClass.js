import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class oneStateClass extends Component {

    state={
        name: "Lina",
        age : "29",
        city : "Paris"
    }
 
    change=()=>{
        this.setState({name: "LinaHaq", age: "30", city: "Lorient"})
    }

    render() {
        return (
            <View>
                
                <Text>{this.state.city}</Text>
                <Text>{this.state.name}</Text>
                <Text>{this.state.age}</Text>

                <Button onPress={this.change} title = "Click Me" />
            </View>
        );
    }
}

export default OneStateClass;