import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import './App.css';


class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      dish:DISHES,/* importing the data and storing it in the state property.*/
    }
  }

  render()
  {
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <div>
        <Menu dishes={this.state.dish}/>{/* we are passing the values of the dishes to the menu component */}
        </div>
        </div>
    )
  }
}


export default App;
