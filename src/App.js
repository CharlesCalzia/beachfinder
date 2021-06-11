import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Track from './components/Track';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
   
      
      <Switch>
     
        <Route path="/music">
          <Track/>

        </Route> 
      </Switch>
    </div>
  </Router>
  );
}

export default App;
