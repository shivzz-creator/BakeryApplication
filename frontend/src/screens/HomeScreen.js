import React from 'react'
import {Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
function HomeScreen() {
  return (
    <div>
<h1>Fresh from the Oven </h1>
<Row>
    {
     products.map(
         item =>(
             <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
             {/* <h3>{item.name}</h3>    */}
             <Product product={item}/>   
             {/* Product component taking item as an props with name as product        */}
             </Col>
         )
     )   
    }
</Row>


    </div>
  )
}

export default HomeScreen