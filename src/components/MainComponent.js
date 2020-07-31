import React, { Component } from 'react';

import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

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
        
       
        <Header/>
        <Menu dishes={this.state.dishes}
        
        
        onClick={(dishId)=>
            {
                this.onDishSelect(dishId)
            }}/>{/* we are passing the values of the dishes to the menu component */}
        <Dishdetail dish={this.state.dishes.filter((dish)=>
        dish.id===this.state.selectedDish

            )[0]}/>
            {/*<Dishdetail dish={this.state.selectedDish} and in menu component on click function pass dish instead of dishid here passing dishid makes it faster to execute. */}
      <Footer/>
        </div>
    )
  }
}


export default Main;
