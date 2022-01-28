import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from  './components/MainComponent';
/**
 *  Encapsulate in Browser Router and setup Main component
 */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
