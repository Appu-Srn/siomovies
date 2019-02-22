import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/home'
import Post from './components/Screen'

import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
    


   <BrowserRouter>
        <div className="App">
 
        {/* <Navbar /> */}
        <switch>
          <Route exact path='/' component={Home}/>

          <Route exact path='/:post_id' component={Post} />


          </switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
