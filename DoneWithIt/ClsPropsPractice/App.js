import React, { Component } from 'react';
import ClsComponentOne from './ClsComponentOne';

class App extends Component {
  render() {
    return (
      <div>
         <ClsComponentOne name = "Lina" city = "Vanne" age = "33"/>
      </div>
    );
  }
}

export default App;