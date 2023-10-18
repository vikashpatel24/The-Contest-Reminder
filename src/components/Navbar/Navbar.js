import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from '../../Home/Home';
import ContestAll from '../ContestAll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contest from '../Contest';
import CodeForces from '../Codeforces';
import Codechef from '../Codechef';
import Leetcode from '../Leetcode';
import Atcoder from '../Atcoder';
import Topcoder from '../Topcoder';
import Google from '../Google';
import Hackerearth from '../Hackerearth';
import Hackerrank from '../Hackerrank';
import Dsa from '../Dsa';
import Contact from '../../Contact/Contact';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";




export default function Navbars(){
    
    return (
        <BrowserRouter>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand eventKey={1} as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link eventKey={1} as={Link} to="/contest">Contests</Nav.Link>
                    <Nav.Link eventKey={1} as={Link} to="/dsa">DSA</Nav.Link>
                    <Nav.Link eventKey={1} href='https://practice.geeksforgeeks.org/problem-of-the-day' target='_blank'>PoTD</Nav.Link>
                    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/codeforces">CodeForces</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/codechef">CodeChef</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/leetcode">LeetCode</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/google">Google</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/atcoder">AtCoder</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/hackerrank">HackerRank</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/hackerearth">HackerEarth</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/topcoder">TopCoder</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/contest">
                        All Contests
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} as={Link} to="/about">About US</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to="/contact">
                    Contact Us
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>


            <div>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<Contest/>} />
            <Route path="/contest" element={<ContestAll/>} />
            <Route path="/codeforces" element={<CodeForces/>} />
            <Route path="/codechef" element={<Codechef/>} />
            <Route path="/leetcode" element={<Leetcode/>} />
            <Route path="/atcoder" element={<Atcoder/>} />
            <Route path="/google" element={<Google/>} />
            <Route path="/hackerearth" element={<Hackerearth/>} />
            <Route path="/topcoder" element={<Topcoder/>} />
            <Route path="/hackerrank" element={<Hackerrank/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dsa" element={<Dsa />} />
         </Routes>
            </div>
            </BrowserRouter>
    )
}

