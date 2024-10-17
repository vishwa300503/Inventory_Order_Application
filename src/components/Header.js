import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <Navbar 
      style={{ backgroundColor: "#007bff", width: "100%" }} // Updated background color
      expand="lg" 
      className="shadow-sm mb-4"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-light">
          <img 
            src='https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg?size=338&ext=jpg' 
            alt="Brand Logo" 
            style={{ width: "100px" }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/catalog" 
              style={{ color: '#ffffff', transition: 'color 0.3s' }} 
              onMouseOver={(e) => e.currentTarget.style.color = '#ffcc00'} // Change to gold on hover
              onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'} // Revert to white
            >
              Catalog
            </Nav.Link> 
            <Nav.Link 
              as={Link} 
              to="/about" 
              style={{ color: '#ffffff', transition: 'color 0.3s' }} 
              onMouseOver={(e) => e.currentTarget.style.color = '#ffcc00'}
              onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              About
            </Nav.Link> 
            <Nav.Link 
              as={Link} 
              to="/order-history" 
              style={{ color: '#ffffff', transition: 'color 0.3s' }} 
              onMouseOver={(e) => e.currentTarget.style.color = '#ffcc00'}
              onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              Order History
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admin" 
              style={{ color: '#ffffff', transition: 'color 0.3s' }} 
              onMouseOver={(e) => e.currentTarget.style.color = '#ffcc00'}
              onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              Admin Panel
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown 
              title={<span style={{ color: '#ffffff' }}>User</span>} 
              id="basic-nav-dropdown"
              style={{ color: '#ffffff' }}
            >
              <NavDropdown.Item 
                as={Link} 
                to="/" 
                style={{ color: '#333' }} 
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'} // Light background on hover
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                as={Link} 
                to="/" 
                style={{ color: '#333' }} 
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
