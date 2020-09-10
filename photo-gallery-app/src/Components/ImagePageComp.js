import React from "react";
import ImageComp from "./ImageComp";
import AddImage from "../functional-components/AddImage";
import axios from "axios";
import MyProfile from "../functional-components/MyProfile";
import { withRouter } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavbarImagePage from "./NavbarImagePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
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
        <NavbarImagePage
          myProfile={this.myProfileModale}
          logout={this.logout}
        />
        <ImageComp />
        <div
          style={{ "margin-top": "12%", float: "right", position: "relative" }}>
          <div>
            <Fab
              size="large"
              color="secondary"
              aria-label="add"
              onClick={this.close}
              style={{
                position: "fixed",
                right: 20,
                bottom: 80,
                outline: "none",
              }}>
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ImagePageComp);
