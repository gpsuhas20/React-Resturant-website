import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'// it adds a tag to the  link and and also active class.
import {Navbar,NavbarBrand,Nav ,NavbarToggler,Collapse,NavItem,NavBar,Jumbotron} from 'reactstrap';
// using  raect fragment to bunch group of react elements and return it.
//instead of div using div creates a extra node in react dom so to avoid that we are uing react fragement.
class Header extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this) // binding to handle events.
    }
    toggleNav()
    {
        this.setState({isNavOpen:!this.state.isNavOpen})
    }
    render()
    {
        return(
            <React.Fragment>
            <Navbar className="navbar-dark" expand="md">{/*to show the expanded view of menu bar in meduim to extra large screens.*/}
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                 <NavbarBrand  className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"></img>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span>Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span>Aboutus
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/menu">
                        <span className="fa fa-list fa-lg"></span>Menu
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-adress-card fa-lg"></span>Contact Us
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
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