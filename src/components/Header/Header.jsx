
import React, { Component } from "react";
import { Navbar, Container , Nav , FormControl , Form, Button } from "react-bootstrap";
import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Импорт рендера страниц.
import Home from 'Pages/Home';
import About from 'Pages/About';
import Blog from 'Pages/Blog';
import Contacts from 'Pages/Contacts';



export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            className="d-inline-block align-top "
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Galery</Nav.Link>
                            <Nav.Link href="about">About us</Nav.Link>
                            <Nav.Link href="contacts">Contacts</Nav.Link>
                            <Nav.Link href="blog">Blog</Nav.Link>
                        </Nav>
                         <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <Router>
                    <Routes>
                          <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}


