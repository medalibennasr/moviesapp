import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./AddMovie.css";
import ReactStars from 'react-stars'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [rate, setRate] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitMovie = (e) => {
    e.preventDefault();
    let newMovie = {
      id: uuidv4(),
      photo,
      description,
      titre,
      rate,
    };
    if (titre==='' || photo==='' || description===''|| rate==='' )
    return alert("Please complete")

    addMovie(newMovie);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="stylingButton">
        Add Movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the movie's title .."
              onChange={(e) => setTitre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description :</Form.Label>
            <Form.Control
              placeholder="Enter yout second name .."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Photo : </Form.Label>
            <Form.Control
              placeholder="Enter you image adress ..."
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Form.Group>

          <ReactStars
  count={5}
  onChange={(e)=>setRate(e)}
  size={24}
  edit={true}
  color2={'#ffd700'} />
          

          
          <Button className='add'
            variant="primary"
            type="submit"
            onClick={(e) => submitMovie(e)}
          >
            Add
          </Button>
        </Form>
       
      </Modal>
    </div>
  );
};
export default AddMovie;
