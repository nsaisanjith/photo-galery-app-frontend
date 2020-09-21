import React from "react";
import Base64Downloader from "react-base64-downloader";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
//import "@fortawesome/fontawesome-free/css/all.min.css";
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
            <div>
              <MDBBtn onClick={props.showEditPopUp}>Edit</MDBBtn>
              <MDBBtn onClick={props.requestOnDelete}>Delete</MDBBtn>
              <div style={{ marginLeft: 45, marginTop: 5 }}>
                <Base64Downloader
                  base64={props.base64}
                  downloadName="images"
                  style={{
                    "box-shadow": "inset 0px 1px 0px 0px #2BBBAD",
                    background:
                      "linear-gradient(to bottom, #2BBBAD 5%, # 2BBBAD 100%)",
                    "background-color": "#2BBBAD",
                    "border-radius": "2px",
                    border: "none",
                    display: "inline-block",
                    cursor: "pointer",
                    color: "#ffffff",
                    "font-family": "Arial",
                    "font-size": "13px",
                    outline: "none",
                    padding: "13px 24px",
                    "text-decoration": "none",
                    "text-shadow": "0px 1px 0px #2BBBAD",
                  }}>
                  DOWNLOAD
                </Base64Downloader>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}
