import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Dropdown, DropdownButton} from "react-bootstrap";

const NavBarContainer = () => {
    const expand = "sm";
    return (
        <>
            <Navbar bg="light" expand={expand} className="mb-3 px-3">
                <Container fluid>
                    <Navbar.Brand href="#">Lyrics Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Lyrics Learning
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Aprender</Nav.Link>
                                <Nav.Link href="#action2">Practicar</Nav.Link>
                            </Nav>
                            <DropdownButton id="dropdown-basic-button" title="Yo" drop={"start"}>
                                <Dropdown.Item href="#/action-1">Mi perfil</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Salir</Dropdown.Item>
                            </DropdownButton>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}


export {NavBarContainer}