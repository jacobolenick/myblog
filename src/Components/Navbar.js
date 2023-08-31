import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

/* a navbar that is diplayed on every page with a logo and 5 links to other pages */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img src="https://i.imgur.com/9Zj8iFz.png" alt="logo" width="50px" height="50px" /></Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/blog">Blog</Link>
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;