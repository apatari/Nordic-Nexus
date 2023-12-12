import React from "react";
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Header({ user, setUser }) {

    const handleLogoutClick = () => {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
        console.log(user)
      }



    return (
        <div>
            <Navbar expand="md" className="bg-primary"data-bs-theme="dark" >
            <Container>
                <Navbar.Brand as={NavLink}  exact to='/' className="pe-4 fs-3">Nordic Nexus</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fs-5 ">
                    <Nav.Link 
                        exact to="/" 
                        className="px-4" 
                        as={NavLink} 
                    >Home</Nav.Link>

                    <Nav.Link 
                        exact to="/nordiccenters" 
                        className="px-4" 
                        as={NavLink} 
                    >Nordic Centers</Nav.Link>

                    <NavDropdown title="New" id="basic-nav-dropdown" className="px-4">
                    <NavDropdown.Item as={NavLink} exact to="/trips/new" >Trip</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} exact to="/nordiccenters/new">
                        Nordic Center
                    </NavDropdown.Item>
                    
                    </NavDropdown>
                </Nav>
                {Boolean(user)? <Button onClick={handleLogoutClick}>Logout</Button> : ""}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header