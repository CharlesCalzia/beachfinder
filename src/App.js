
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



function App() {
  return (
    <Router>
    <div>
    <Nav/>
   
    
    <div class="flex-container">
    {/* <NavVert/> 
    
    <Filter /> */}
    <div><NavVert/></div>

    

    
</div>
      <Switch >

        <Route exact path="/">
             <div className="filter"><Filter /></div>

            <div className="BeachDiv"><BeachDiv/></div>
        </Route>
      
        <Route exact path="/music">
          <Tracks/>

        </Route>
        <Route exact path="/Visualise/Visualise">
            <Visualise />
          </Route>
        

        
      </Switch>
    </div>
  </Router>

  );
}

export default App;
