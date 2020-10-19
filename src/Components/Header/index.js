import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
            <img src="https://cnx.co/wp-content/uploads/2020/09/cnx-2-2.png" className="d-inline-block align-top" alt="" loading="lazy" />
            Full Stack Developer Test
            </a>
        </nav>
    );
  }

export default Header;