import React from 'react';

import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'


  
    
    function RenderMenuItem({dish,onClick})// the arguements passed to the fx is a object or we can give props also
    // props={dish,onClick}
    {
        return(
            <Card onClick={()=>onClick(dish.id)}>{/* here onclickp is a function passed */}
                    <CardImg src={dish.image} alt={dish.name}>
                        
                    </CardImg>
                    <CardImgOverlay>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>

        )
    }
    // or simply we can use a function Menu also instead of arrow function
    const Menu=(props)=>
    {
        
        const menu=props.dishes.map((dish)=>

        {
            return(
                <div key={dish.id} className="col-12 col-md-5  m-1">
               <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>

            );
        }
        )
        return(
            <div className="container">
              
            <div className="row">
            
               
            {menu}
            </div>
          
           
            </div>


        
        )
    }

    
export default Menu