import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/style.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    width: 500,
    height: 500,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditFormPhoto(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.show}
        onClose={props.showEditPopUp}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={props.show}>
          <div className={classes.paper}>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>
                    <p className="h4 text-center mb-4">Sign in</p>
                    <label
                      htmlFor="defaultFormLoginEmailEx"
                      className="grey-text">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="defaultFormLoginEmailEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormLoginPasswordEx"
                      className="grey-text">
                      Your password
                    </label>
                    <input
                      type="password"
                      id="defaultFormLoginPasswordEx"
                      className="form-control"
                    />
                    <div className="text-center mt-4">
                      <MDBBtn color="indigo" type="submit">
                        Login
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
