import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const OneState = () => {

const[state, setState] = useState({
    name: "Lina",
    age : "32",
    city : "Sarcelles"
});


    return (
        <View>
            <Text>{state.age}</Text>
            <Text>{state.city}</Text>
            <Text></Text>
        </View>
    );
};

export default OneState;