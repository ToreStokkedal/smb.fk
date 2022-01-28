
import { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className = "bg-light">
                <Navbar className = "navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='havlogo.webp' hight="40" with="31" alt='Small Hotel' /></NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/rooms'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Header;