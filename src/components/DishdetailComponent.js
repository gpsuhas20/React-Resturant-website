import React, { Component } from 'react'
import { Card, CardTitle, CardBody,CardImg } from 'reactstrap'

class Dishdetail extends Component
{
    constructor(props)
    {
        super(props)

    }
renderDish(dish)
{
    if(dish!=null)
    {console.log("hi")
        return(
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
                
            <CardImg  src={dish.image} alt={dish.name}></CardImg>
                <CardTitle>

                    {dish.name}
                </CardTitle>
                <CardBody>
                    {dish.description}
                </CardBody>
                
            </Card>




        </div>)
    }
    else{

        return(<div></div>)
    }
}

renderComments(comments)
{
    if(comments==null)
    {
        return(<div>
            
        </div>)
    }
    const l=comments.comments.map((comment)=>{

    
        return(

            <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author},
            &nbsp;
            {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
            </p>
        </li>
    )


            }

        
    
    )
    return(
        <div>
            {l}
        </div>
    )
}
    render()
    {
       
        return(
            <div className="row">
           
           {this.renderDish(this.props.dishes)}
           
           
           <div className="col-12 col-md">

               {this.renderComments(this.props.dishes)}
           </div>
           </div>

        )
    }
}











export default Dishdetail