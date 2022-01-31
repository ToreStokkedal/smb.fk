import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Vår adresse</h5>
                        <address>
                            Hotellveien 1<br />
                            Kjønnøya, Bamble<br />
                            Norway<br />
                            <i className="fa fa-phone fa-lg"></i>: +47 999 22 999 <br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                hotell@hotels.net</a>
                        </address>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2022 Small Hotels inc.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Footer;