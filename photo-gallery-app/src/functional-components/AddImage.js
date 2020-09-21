import React from "react";
import { MDBBtn } from "mdbreact";
import { Button, Modal } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Input } from "@material-ui/core";
export default function AddImage(props) {
  let form = null;
  return (
    <div>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form ref={(ref) => form = ref} onSubmit={props.submit}>
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
            <div className={"modal-footer"}>
              <Button variant="outline-danger" onClick={props.close}>Close</Button>
              <Button variant="outline-primary" type="submit">Upload</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
