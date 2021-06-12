
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Tracks from './pages/Tracks';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import NavVert from "./components/Nav-vert";
import Filter from "./components/Filter/Filter";
import "./App.scss";
import BeachDiv from "./components/Beach/Beach";
import Visualise from "./components/Visualise/Visualise";
import Profile  from "./components/Profile/Profile";
import About from './components/About/About';
import Devs from './components/Devs/Devs';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <Router>
    <div>
    <Nav/>
   
    
    <div className="flex-container">
    {/* <NavVert/> 
    
    <Filter /> */}
    <div><NavVert/></div>

    

    
</div>
      <Switch >

        <Route exact path="/">
             <div className="filter"><Filter /></div>

            <div className="BeachDiv"><BeachDiv/></div>
        </Route>
        <Route exact path="/About">
             <About/>
        </Route>
        <Route exact path="/Devs">
             <Devs/>
        </Route>
        <Route exact path="/Login">
             <Login/>
        </Route>
        <Route exact path="/Signup">
             <Signup/>
        </Route>
      
        <Route exact path="/music">
          <Tracks/>

        </Route>
        <Route exact path="/Visualise/Visualise">
            <Visualise />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
        

        
      </Switch>
    </div>
  </Router>

  );
}

export default App;
