import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Rooms } from './components/RoomsView';
import { Menu } from './components/MenuComponent';
import { Home} from './components/HomeComponent';

/**
 *  Encapsulate in Browser Router and setup Main component
 */

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
      </Router>
    )
  }
}

export default App;
