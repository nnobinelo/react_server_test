import React from 'react'
import {NavLink} from 'react-router-dom' //NavLink, unlike Link, adds an "active page" prop to components which works well w/ css stylesheets

const Navbar = () =>{
    //setTimeout(()=>{props.history.push("/about")},2000)

    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink exact to="/" className="brand-logo">React Server Tutorial</NavLink>
                <ul className="right">
                    <li><NavLink exact to= "/">HOME</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar