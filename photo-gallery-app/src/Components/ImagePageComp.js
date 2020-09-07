import React from "react";
import ImageComp from "./ImageComp";
import { MDBBtn } from "mdbreact";
import AddImage from "../functional-components/AddImage";
import axios from "axios";
import MyProfile from "../functional-components/MyProfile";
import { withRouter } from "react-router-dom";
class ImagePageComp extends React.Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem("token")) {
      alert("please signin");
      this.props.history.push("/login");
      window.location.reload(false);
    }
  }
  state = {
    AddImageForm: false,
    image: undefined,
    myProfile: false,
    user: JSON.parse(localStorage.getItem("user")),
  };
  addImageForm = async (e) => {
    e.preventDefault();
    console.log(e.target.elements[0].files[0]);
    const location = e.target.elements.location.value.trim();
    const message = e.target.elements.message.value.trim();
    if (!location || !message) {
      return alert("all fields are required");
    }
    try {
      const data1 = {
        location,
        message,
      };
      const token = localStorage.getItem("token");
      var data = new FormData();
      data.append("text", JSON.stringify(data1));
      data.append("imag", e.target.elements[0].files[0]);
      const res = await axios.post("http://localhost:3200/image", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        this.close();
        window.location.reload(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  close = async () => {
    await this.setState({
      AddImageForm: !this.state.AddImageForm,
    });
  };
  addImageState = async (files) => {
    // await this.setState({
    //   image: files[0],
    // });
    // console.log(files);
  };
  myProfileModale = async () => {
    await this.setState({
      myProfile: !this.state.myProfile,
    });
  };
  logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:3200/users/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        localStorage.clear();
        this.props.history.push("/");
      }
    } catch (e) {
      alert();
    }
  };
  render() {
    return (
      <div>
        <MyProfile
          clickm={this.myProfileModale}
          show={this.state.myProfile}
          user={this.state.user}
        />
        <AddImage
          close={this.close}
          show={this.state.AddImageForm}
          submit={(e) => this.addImageForm(e)}
          onchange={this.addImageState}
        />
        <div style={{ textAlign: "center" }}>
          <MDBBtn color="primary" onClick={this.close}>
            Add Image
          </MDBBtn>

          <MDBBtn color="success" onClick={this.myProfileModale}>
            My Profile
          </MDBBtn>
          <MDBBtn
            style={{ float: "right", marginRight: 20 }}
            onClick={this.logout}
            color="warning">
            Logout
          </MDBBtn>
        </div>
        <ImageComp />
      </div>
    );
  }
}
export default withRouter(ImagePageComp);
