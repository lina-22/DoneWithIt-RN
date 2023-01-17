import React, { Component } from 'react';
import { View } from 'react-native';
import ClsComponentOne from './ClsComponentOne';

class App extends Component {
  render() {
    return (
      <View>
         <ClsComponentOne name = "Lina" city = "Vanne" age = "33"/>
      </View>
    );
  }
}

export default App;