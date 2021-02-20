import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <div className="nav justify-content-start">
                <a href="" className="navbar-brand">Ululu</a>
                <input className="form-control me-2" type="search" placeholder="Search" />
            </div>
            <nav className="nav justify-content-center">
                <a href="" className="nav-link active">Home</a>
                <a href="" className="nav-link">Services</a>
                <a href="" className="nav-link">Contact</a>
                <a href="" className="nav-link">About</a>
            </nav>
            <nav className="nav justify-content-end">
                <a href="" className="nav-link active">Profile</a>
                <a href="" className="nav-link">Settings</a>
            </nav>
        </div>
    );
}

export default NavBar;
