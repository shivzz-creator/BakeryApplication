import React from 'react'
import { Navbar , Container,Row,Col,Nav } from 'react-bootstrap';
function Header() {
  return (
   <header>
  <Navbar bg="dark"  variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">  <img src="https://media.istockphoto.com/vectors/bakery-type-badge-label-with-hand-written-modern-calligraphy-vector-id1199399473?k=20&m=1199399473&s=612x612&w=0&h=VkjE5CzphKyKS0rgJST5BVZu0iE-QTKcapdoiS_PH5I=" style={{height:'60px',width:'100px',padding:'3px',}}></img><b>Fresh Bakers</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/cart"><i class="fa fa-shopping-cart" style={{padding:"3px"}}></i>Cart</Nav.Link>
        <Nav.Link href="/login"><i class="fa fa-user"></i>Login</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
   </header>
  )
}

export default Header