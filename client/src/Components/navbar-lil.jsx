import React from 'react';
//import React, { useContext} from 'react';
import {Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/nav.css';

function LilNavBar(){

    return(
  
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
  
          <Link className="navbar-brand" to="/"><img src="BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img></Link>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/createaccount/">Create Account</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login/">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alldata/">AllData</Link>
              </li>
            </ul>
            <span className="navbar-text">Please log in to see user information</span>
          </div>
  
        </div>
      </nav>
  
    );
} 

export default LilNavBar;