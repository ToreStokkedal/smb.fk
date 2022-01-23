import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// import {BookingCVControl 
/**
 *  Redders main page, with meny bar, rooms list and loging top, left
 */

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Enkel løsning for små hoteller</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
