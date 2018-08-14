import React, { Component } from 'react';
import img from './img.jpg';

import './App.css';
import Box from './components/Box';

class App extends Component {
  render() {
    return (
      <div className="Z1">
        <img src={img} className="img" />

        <p className="C1">azertya</p>

<br/>
<hr/>

        <p className="C2">azerty</p>
      </div>
  

    );
  }
}
export default App;