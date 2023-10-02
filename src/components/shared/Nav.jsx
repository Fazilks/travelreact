import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navi() {
  return (
    <div>
      <Navbar
        className="position-fixed w-100"
        bg="transparent"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">TRAVELCO</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="text-success" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#fabout">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#images">Images</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
