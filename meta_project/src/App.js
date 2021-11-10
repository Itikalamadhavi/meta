import React from 'react';
// import './App.css';
import Signup from './components/signupmain';
import Loginpage from './components/login';
 import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
//import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
   
     <Router>
            <Switch>
                <Route
                    exact path="/"
                    render={()=><Loginpage/>}
                />
                <Route
                    exact path="/signup"
                    render={()=><Signup/>}
                />
        
            </Switch>
        </Router>
  
  );
}

export default App;
