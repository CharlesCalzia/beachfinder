
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Track from './components/Track';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import NavVert from "./components/Nav-vert";
import Filter from "./components/Filter/Filter";
import "./App.scss";
import BeachDiv from "./components/Beach/Beach";


function App() {
  return (
    <Router>
    <div>
    <Nav/>
   
    
    <div class="flex-container">
    {/* <NavVert/> 
    
    <Filter /> */}
    <div><NavVert/></div>

    <div className="filter"><Filter /></div>

    <div className="BeachDiv"><BeachDiv/></div>

    
</div>
      <Switch >
      
        <Route path="/music">
          <Track/>

        </Route> 
      </Switch>
    </div>
  </Router>

  );
}

export default App;
