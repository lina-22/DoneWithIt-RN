import React, { Component } from 'react';
import {  View } from 'react-native';
import oneComponent from '../componensts/oneComponent';
import twoComponent from '../componensts/twoComponent';
import threeComponent from '../componensts/threeComponent';
import fourComponent from '../componensts/fourComponent';


class oneComponent extends Component {
    render() {
        return (
            <div>
                <View>
                    <oneComponent/>
                    <twoComponent/>
                    <threeComponent/>
                    <fourComponent/>
                </View>
            </div>
        );
    }
}

export default oneComponent;