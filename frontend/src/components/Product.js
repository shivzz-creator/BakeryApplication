import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
function Product({product}) {
  return (
    <div>
        <Card className='my-3 p-3 rounded'>
            < a href= {`/product/${product._id}`}>
            <Card.Img src={product.image} style={{ height: '350px', width: '250px' }} ></Card.Img>
            </a>
            <Card.Body>
            < a href= {`/product/${product._id}`}>
            <Card.Title  >{product.name}</Card.Title>
            </a>
            </Card.Body>
            
            <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
            
            <Card.Text>
               <h3>₹{product.price} </h3>
            </Card.Text>
        </Card>
    </div>
  )
}

export default Product