import React from 'react'
import { Card, CardTitle, CardBody,CardImg } from 'reactstrap'


function RenderDish({dish}) // the props will get dish only single element props={dish:ele}
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

function RenderComments({comments})
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
   const Dishdetail= (props)=>{

   
    
       
        return(
            <div className="row">
           
           <RenderDish dish={props.dish}/>
           
           
           <div className="col-12 col-md">

               <RenderComments comments={props.dish}/>
           </div>
           </div>

        )
    }
export default Dishdetail