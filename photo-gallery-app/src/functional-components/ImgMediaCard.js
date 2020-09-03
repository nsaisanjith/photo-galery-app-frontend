import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.scoped.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function ImgMediaCard(props) {
  return (
    <div
      style={{
        padding: "10px",
        width: 300,
        margin: 20,
        display: "inline-block",
      }}>
      <MDBCol>
        <MDBCard style={{ width: "300px" }}>
          <div onClick={props.popup}>
            <MDBCardImage className="img-fluid" src={props.src} hover />
          </div>
          <MDBCardBody>
            <MDBCardTitle>{props.location}</MDBCardTitle>
            <MDBCardText>{props.message}</MDBCardText>
            <MDBBtn onClick={props.showEditPopUp}>Edit</MDBBtn>
            <MDBBtn onClick={props.requestOnDelete}>Delete</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}
