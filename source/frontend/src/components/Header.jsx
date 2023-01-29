import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Infernce Engine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/rules">Rules</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/our-adviser">
                Our Adviser
              </NavDropdown.Item>
              <NavDropdown.Item href="team-members">
                Team Members
              </NavDropdown.Item>
              <NavDropdown.Item href="http://github.com">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
