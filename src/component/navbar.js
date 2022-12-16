import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

function NavbarScreen() {
  const pathname = useLocation().pathname;
  return (
    <Navbar className="px-3 px-lg-5" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-4 fw-bold">
          Resep Makanan <span className="text-info">Tomorisakura</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarScreen;
