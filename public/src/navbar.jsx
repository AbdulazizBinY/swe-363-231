import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#main">
                    Abdulaziz Binyabis
                </a>
                <input className="d-none" id="menuToggle" type="checkbox" />
                <label className="navbar-toggler-icon custom-toggler" htmlFor="menuToggle" id="hamburger">
                </label>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" href="#main">
                            About
                        </a>
                        <a className="nav-link" href="#details">
                            Details
                        </a>
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                        <a className="nav-link" href="Hire.html">
                            Hire Me
                        </a>
                        <a className="nav-link" href="mainPage-ar.html">
                            العربية
                            <i className="fi fi-sa"></i>
                        </a>
                        <button className="btn btn-link nav-link p-0 border-0" id="themeSwitcher" style={{background: 'transparent'}}>
                            <i className="fa-solid fa-circle-half-stroke"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;