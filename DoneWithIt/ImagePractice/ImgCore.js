import React, { Component } from 'react';
import { View,Image} from 'react-native';

class ImgCore extends Component {
    render() {
        return (
         <View style={{height:'100%', width:'100%'}}>
            <Image style={{height:'50%', width:'100%'}} source={{uri: 'https://www.pexels.com/photo/green-tree-268533/'}}/>
            <Image style={{height:'50%', width:'100%'}} source={require('./images/sea.jpg')}/>
           
         </View>
        );
    }
}

export default ImgCore;