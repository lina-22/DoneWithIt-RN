import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ValueChangeState = () => {

const[state, setState] = useState({
    name: "Lina",
    age : "32",
    city : "Sarcelles"
});

const changeValue=()=>{
    setState({name: "Haq", age: "32"})

}

    return (
        <View>
            <Text>{state.age}</Text>
            <Text>{state.city}</Text>
            <Text></Text>

            <Button onPress={changeValue} title='ClickeMe'/>
        </View>
    );
};


export default ValueChangeState;