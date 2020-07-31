import React,{Component} from 'react'
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap';
// using  raect fragment to bunch group of react elements and return it.
//instead of div using div creates a extra node in react dom so to avoid that we are uing react fragement.
class Header extends Component
{
    render()
    {
        return(
            <React.Fragment>
            <Navbar className="navbar-dark">
                <div className="container">
                 <NavbarBrand href="/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p>We Take inspiration from the World's best Cuisines, and create a unique fusion experience.Our lipsmacking creation will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>

        </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header