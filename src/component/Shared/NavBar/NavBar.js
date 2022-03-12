

import { Button } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ChatIcon from '@material-ui/icons/Chat';
import useAuth from "../../hook/useAuth";
import "./NavBar.css";


const NavBar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <NavLink to='/'>
            <img className=" img-fluid" src="/logo.webp" alt="" />
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/"
              >
                <Button sx={{ color: 'black' }}>Home</Button>

              </NavLink>
              

              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/shop"
              >

                <Button sx={{ color: 'black' }}> Shop</Button>
              </NavLink>
              <Button>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">
                    <NavLink
                      to="/about"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        margin: "10px",
                      }}
                    >
                      
                        About
                      
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/contact">
                    <NavLink
                      style={{
                        color: "black",
                        textDecoration: "none",
                        margin: "10px",
                      }}
                      to="/contact"
                    >
                     Contact us

                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/blog">
                    <NavLink
                      style={{
                        color: "black",
                        textDecoration: "none",
                        margin: "10px",
                      }}
                      to="/blog"
                    >
                      Blog

                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/blog">
                    <NavLink
                      style={{
                        color: "black",
                        textDecoration: "none",
                        margin: "10px",
                      }}
                      to="/portfolio"
                    >
                      Portfolio
                      </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/error">
                    <NavLink
                      style={{
                        color: "black",
                        textDecoration: "none",
                        margin: "10px",
                      }}
                      to="/error"
                    >
                      Not Found 404
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Button>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/dashboard"
              >
                <Button sx={{ color: 'black' }}>Dashboard</Button>
              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/about"
              >
                <Button sx={{ color: 'black' }}>About Us</Button>
              </NavLink>
            </Nav>
            <Nav>
              
              <NavLink
                className="mt-2"
                style={{ color: "black", marginRight: "20px" }}
                to="/chat"
              >
                <Button size="small" sx={{color: "black"}}><ChatIcon /></Button>
              </NavLink>


              <NavLink to='/'><Button sx={{ color: 'black' }}>{user.displayName}</Button></NavLink>
              {
                user.email ? <Button sx={{ color: 'black' }} onClick={() => logOut(location, history)}>Logout</Button> :
                  <NavLink to='/Login' ><Button sx={{ color: 'black' }}>Login</Button></NavLink>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
