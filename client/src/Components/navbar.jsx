import React from 'react';
//import React, { useContext} from 'react';
import {Link} from "react-router-dom";

import { UserContext } from "./context/context";

function NavBar(){

    const { user, setUser, setShowUser, setUserBalance } = React.useContext(UserContext);  
  
    function handleLogout() {
      setShowUser(false);
      setUser({});
      setUserBalance(0);
    }
  
    return(
  
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
  
          <Link className="navbar-brand" to="/"><img src="BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img></Link>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
              <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
  
              <li className="nav-item">
                <Link className="nav-link" to="/deposit/">Deposit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/withdraw/">Withdraw</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/balance/">Balance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alldata/">AllData</Link>
              </li>
            </ul>
            <span className="navbar-text">User logged in: {user.name}</span>
          </div>
  
  
        </div>
      </nav>
  
    );
}

export default NavBar;