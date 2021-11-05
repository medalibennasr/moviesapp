import { Nav, Container, Navbar } from "react-bootstrap";
import AddMovie from "../Addmovie/AddMovie";
import SearchStudent from "../Filtre/Search";
import ReactStars from 'react-stars'

function NavBar({ addMovie, setFilterByName , setRateByName }) {

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
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
          <ReactStars
  count={5}
  onChange={(e)=>setRateByName(e)}
  size={24}
  edit={true}
  color2={'#ffd700'} />
          <SearchStudent setFilterByName={setFilterByName}  />
          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
