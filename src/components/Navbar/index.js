import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand bg-dark navbar-dark">

            {/* Toggler/collapsible Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar links --> */}
            <div className="container collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home-section">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-section-target">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio-section-target">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-section-target">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar