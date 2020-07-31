import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch,Route,Redirect} from 'react-router-dom'
class Main extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      dishes:DISHES,
     
      /* importing the data and storing it in the state property.*/
    }
  }

 

  render()
  {
    const HomePage=()=>
    {
      
    return(
    <Home/>)
    }
    return(
      <div className="App">
        
       
        <Header/>
       <Switch>
         <Route path="/home" component={HomePage}/>
           <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>{/* to pass parameters to the comp using the routing using an arrow function. */}
   
         <Redirect to="/home"/> {/* anything doesnt match the routes will be redirected to the home. */}
       </Switch>
      <Footer/>
        </div>
    )
  }
}


export default Main;
