import React from "react";
import { Button, Modal } from "react-bootstrap";
export default function MyProfile(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.clickm}>
        <Modal.Header closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <label style={{ textDecoration: "underline" }}>Name</label>
            <h5>{props.user.name}</h5>
            <label style={{ textDecoration: "underline" }}>Age</label>
            <h5>{props.user.age}</h5>
            <label style={{ textDecoration: "underline" }}>Email</label>
            <h5>{props.user.email}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.clickm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
