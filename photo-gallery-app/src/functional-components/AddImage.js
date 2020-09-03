import React from "react";
import { MDBBtn } from "mdbreact";
import { Button, Modal } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.scoped.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Input } from "@material-ui/core";
export default function AddImage(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form onSubmit={props.submit}>
            <p className="h4 text-center mb-4">Add Image</p>
            <div style={{ textAlign: "center" }}>
              <Input
                type="file"
                inputProps={{ accept: ".png,.jpg,.jpeg" }}
                required={true}
                name="imageFile"
                onChange={(e) => props.onchange(e.target.files)}
              />
            </div>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              location
            </label>
            <input
              type="string"
              id="defaultFormLoginEmailEx"
              className="form-control"
              name="location"
              required
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              message
            </label>
            <input
              type="string"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              name="message"
              required
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit">
                upload
              </MDBBtn>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
