import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent'



class Main extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      dishes:DISHES,
      selectedDish:null
      
      /* importing the data and storing it in the state property.*/
    }
  }

  onDishSelect(dishId)
    {
        // this.setState in a methdd
        this.setState(
           {selectedDish:dishId}
        );
        
        
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
        <div className="container">
        
        <Menu dishes={this.state.dishes}
        
        
        onClick={(dishId)=>
            {
                this.onDishSelect(dishId)
            }}/>{/* we are passing the values of the dishes to the menu component */}
        <Dishdetail dish={this.state.dishes.filter((dish)=>
        dish.id===this.state.selectedDish

            )[0]}/>
        </div>
        </div>
    )
  }
}


export default Main;
