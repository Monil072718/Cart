import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function Home(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Set isLoggedIn to true if there's a user, false otherwise
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed", error.message);
    }
  };

  return (
    <Container fluid className="px-4">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
          {isLoggedIn && (
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
      <br />
      <br />

      <h2 className="text-center">
        {props.name ? `Welcome - ${props.name}` : "Login please"}
      </h2>
    </Container>
  );
}

export default Home;
