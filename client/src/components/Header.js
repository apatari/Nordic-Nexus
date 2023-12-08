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

    const linkStyles = {
        textDecoration: 'none',
        color:'white'
    }
    let textDec = 'none'
    if (user) {
        textDec = 'underline'
    }


    return (
        <div>
            <Navbar expand="md" className="bg-primary"data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#home" className="pe-4 fs-3">Nordic Nexus</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fs-5 ">
                    <NavLink 
                        exact to="/" 
                        className=" text-white mt-2 px-4" 
                        style={linkStyles} 
                        activeStyle={{textDecoration: textDec}} 
                    >Home</NavLink>

                    <NavLink 
                        exact to="/nordiccenters" 
                        className=" text-white mt-2 px-4"
                        style={linkStyles} 
                        activeStyle={{textDecoration: textDec}} 
                    >Nordic Centers</NavLink>

                    <NavDropdown title="New" id="basic-nav-dropdown" className="px-4">
                    <NavDropdown.Item href="#action/3.1">Trip</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
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