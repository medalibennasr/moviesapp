import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./AddMovie.css";

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
    };

    addMovie(newMovie);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="stylingButton">
        Open Modal
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

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitMovie(e)}
          >
            Submit
          </Button>
        </Form>
        {/* <h1> Add Student </h1>
        <form>
          <input placeholder="Enter image adress..." />
          <input placeholder="Enter your first name ..." />
          <input placeholder="Enter your secondName ..." />
          <button>Submit</button>
        </form> */}
      </Modal>
    </div>
  );
};
export default AddMovie;
