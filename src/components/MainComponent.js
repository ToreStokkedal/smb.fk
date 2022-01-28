import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
// import Contact from './ContactComponent';
import { ROOMS } from './../shared/rooms.js';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: ROOMS,
        }
    }

    render() {

        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default Main