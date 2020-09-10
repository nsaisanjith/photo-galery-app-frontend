import React from "react";
import { MDBBtn } from "mdbreact";
import { Button, Modal } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function EditFormPhoto(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.showEditPopUp}>
        <Modal.Header closeButton>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.submitEditForm}>
            <p className="h4 text-center mb-4">EDIT</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Location
            </label>
            <input
              type="string"
              id="defaultFormLoginEmailEx"
              className="form-control"
              defaultValue={props.location}
              name="location"
              required
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Description
            </label>
            <input
              type="string"
              name="message"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              defaultValue={props.message}
              required
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit">
                save
              </MDBBtn>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.showEditPopUp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
