import React, { Component } from 'react';
import { View,Text } from 'react-native';

class Core extends Component {
    render() {
        return (
            <View style={{flexDirection:'row',alignItems:'center', height: "100%", width:300, backgroundColor: red}}>
                {/* <Text>AAAAAAAAAAAAA</Text>
                <Text>bbbbbbbbbbbbb</Text>
                <Text>ccccccccccccc</Text>
                <Text>AAAAAAAAAAAAA</Text> */}
                <View style={{flexDirection:'row',alignItems:'center', height: "80%", width:300, backgroundColor: green}}>

                    <View style={{flexDirection:'column',alignItems:'center', height: "50%", width:300, backgroundColor: red}}>
                
                    </View>
                </View>
            </View>
        );
    }
}

export default Core;