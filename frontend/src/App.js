 // frontend/src/App.js

 import React, { Component } from "react";
 import {Route} from 'react-router-dom';
 import Home from './components/home';
 
 function App() {
  return (
    <div style={{backgroundColor:"#EEEEEE"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Route path="/" exact component={Home} />
          </div>
        </div>
      </div>
    </div>
  );
    
}

 export default App;
