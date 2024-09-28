import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <>
      <Navbar  className='nav-container' bg="dark" data-bs-theme="dark" sticky="top" >
        <Container>
          <Navbar.Brand>
            <Link to="/">
           <img className = "nav-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5q00UOHwEuGA4R8s24ragsIy8zeZKEiopkw&s'>
           </img>
            </Link>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
            <Link to="/">
              home
              </Link>
              </Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link>
            <Link to = "/cart">
              cart
              </Link>
              </Nav.Link> 
            <Nav.Link href="#services">services</Nav.Link>
          </Nav>
        </Container>
       
      </Navbar>
      <br />
    
    </>
  );
}

export default NavigationBar;