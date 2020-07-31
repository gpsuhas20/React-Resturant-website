import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

class App extends Component
{
  

  render()
  {
    return(
      <BrowserRouter>
        <div>
        <Main/>{/* we are passing the values of the dishes to the menu component */}
        </div>
        </BrowserRouter>
    )
  }
}


export default App;
