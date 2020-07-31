import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component
{
  

  render()
  {
    return(
      
        <div>
        <Main/>{/* we are passing the values of the dishes to the menu component */}
        </div>
        
    )
  }
}


export default App;
