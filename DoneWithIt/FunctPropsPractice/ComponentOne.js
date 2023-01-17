import React from 'react';
import { View,Text } from 'react-native';

const componentOne = (props) => {
    return (
        <View>
            <Text>Name: {props.name}</Text>
            <Text>City: {props.city}</Text>
            <Text>Age: {props.age}</Text>
            
        </View>
    );
};

export default componentOne;