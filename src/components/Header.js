import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Header() {
  const [username, setUsername] = useState("")
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUsername(localStorage.getItem("currentUser"))
    }
  }, [username])

  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.clear()
    navigate("/authentication")
  }
  return (
    <div>
       <Navbar expand="lg" className="custom-navbar" style={{position:" fixed",top: "0", width: "100%",zIndex:"1000"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2>DriveEase</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-link">Contact</Nav.Link>

            {  username&&
              <Nav.Link as={Link} to="/userdash" className="nav-link">Profile</Nav.Link>              
              }


            { username?
              <Nav.Link onClick={()=>handleLogout()}  className="nav-link">Logout</Nav.Link>
              :
              <Nav.Link as={Link} to="/authentication" className="nav-link">Login/SignUp</Nav.Link>
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
