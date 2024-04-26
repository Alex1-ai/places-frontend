import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="/">
            <img src="http://localhost:3000/locator.png" alt="Logo" width="50" height="44" className="d-inline-block align-text-center  rounded-circle" />
            <div>Places</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >

          </Nav>
          <div className="d-flex">

          <Link to='/add-place' className='btn btn-outline-dark' style={{'marginRight':20}} variant="outline-dark">Add Place</Link>



          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;