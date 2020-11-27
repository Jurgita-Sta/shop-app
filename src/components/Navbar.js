import React from 'react';
import {Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
        <nav>
        <Link to='/'>
        <h1>-- L O G O --</h1>
        </Link>
             <ul className="nav justify-content-center">
                 <Link to='/about'>
                 <li className="nav-item"><span className="nav-link">About</span></li>
                 </Link>
                 
                  <Link to='/shop'><li className="nav-item"><span className="nav-link">Shop</span></li>
                  </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
