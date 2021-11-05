import { Nav, Container, Navbar } from "react-bootstrap";
import AddMovie from "../Addmovie/AddMovie";
import SearchStudent from "../Filtre/SearchStudent";

function NavBar({ addMovie, setFilterByName }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <SearchStudent setFilterByName={setFilterByName} />
          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
