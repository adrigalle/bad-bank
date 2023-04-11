import React from 'react';
// import React, { useContext, useState, useMemo } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// importing all pages and components
import AllData from './Components/alldata';
//import Account from './Components/account';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Home from './Components/home';
import NavBar from './Components/navbar';
import LilNavBar from './Components/navbar-lil';
import Withdraw from './Components/withdraw';
import Login from './Components/login';
import Balance from './Components/balance';
import { UserContext } from "./Components/context/context";

import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  //const ctx = React.useContext(UserContext);
  const [showUser, setShowUser] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [ userBalance, setUserBalance ] = React.useState(0);
  


  return (
    <Router>

        <UserContext.Provider value={{ user, setUser, showUser, setShowUser, userBalance, setUserBalance }}>

          {showUser ? <NavBar /> : <LilNavBar />}

          <Routes className="container" style={{padding: "20px"}}>

            <Route path="/" exact element={ <Home /> } />
            <Route path="/createaccount/" element={ <CreateAccount /> } />
            <Route path="/login/" element={ <Login /> } />
            <Route path="/deposit/" element={ <Deposit /> } />
            <Route path="/withdraw/" element={ <Withdraw /> } />
            {/* <Route path="/transactions/" element={ <Transactions /> } /> */}
            <Route path="/balance/" element={ <Balance /> } />
            <Route path="/alldata/" element={ <AllData /> } />

          </Routes>

        </UserContext.Provider>

    </Router>
  ); 
  }

export default App;


//