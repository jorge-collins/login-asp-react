import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo-dei.png";


function NavbarComp() {

    return (
        <div>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Image src={Logo} height={40}></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link eventKey="1" as={Link} to={"/menu"}>
                                Inicio
                            </Nav.Link>
                            <Nav.Link eventKey="2" as={Link} to={"/expociencias"}>
                                Expociencias
                            </Nav.Link>
                            <Nav.Link eventKey="3" as={Link} to={"/extremofilos"}>
                                Extremofilos
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;
