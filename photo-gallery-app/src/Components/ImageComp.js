import React, { Component } from "react";
import axios from "axios";
import ImgMediaCard from "../functional-components/ImgMediaCard";
import { encode } from "base64-arraybuffer";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import EditFormPhoto from "../functional-components/EditFormPhoto";
import "../css/style.css";
export class ImageComp extends Component {
  constructor(props) {
    super(props);
    this.request();
  }

  state = {
    visible: false,
    data: undefined,
    image: undefined,
    showEditPopUp: false,
    edit: {
      location: undefined,
      message: undefined,
      im: undefined,
      indexOf: undefined,
    },
  };

  request = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:3200/images", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await this.setState({
        data: res.data,
      });
    } catch (e) {}
  };
  requestOnDelete = async (indexOf, im) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        "http://localhost:3200/image/delete/" + im._id.toString(),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        const data = [...this.state.data];
        data.splice(indexOf, 1);
        await this.setState({
          data,
        });
      }
    } catch (error) {
      if (error.status === 404) {
        alert("Couldn't find the image");
      }
      if (error.status === 500) {
        alert("server error");
      }
    }
  };
  popImage = async (im) => {
    await this.setState({
      visible: !this.state.visible,
      image: im.image.data,
    });
  };
  showEditPopUp = async (im, indexOf) => {
    await this.setState({
      edit: {
        location: im.location,
        message: im.message,
        im,
        indexOf,
      },
      showEditPopUp: !this.state.showEditPopUp,
    });
  };
  close = async () => {
    await this.setState({
      showEditPopUp: !this.state.showEditPopUp,
    });
  };
  submitEditForm = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value.trim();
    const message = e.target.elements.message.value.trim();
    if (!location || !message) {
      return alert("all fields are required");
    }
    try {
      const data = {
        location,
        message,
      };
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "http://localhost:3200/image/update/" +
          this.state.edit.im._id.toString(),
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        this.close();
        this.request();
      }
    } catch (e) {
      alert("server error");
    }
  };
  render() {
    return (
      <div>
        <EditFormPhoto
          show={this.state.showEditPopUp}
          location={this.state.edit.location}
          message={this.state.edit.message}
          showEditPopUp={this.close}
          submitEditForm={this.submitEditForm}
        />
        {this.state.visible && (
          <Lightbox
            mainSrc={"data:image/png;base64," + encode(this.state.image)}
            onCloseRequest={async () =>
              this.setState({ visible: !this.state.visible })
            }
          />
        )}

        {this.state.data &&
          (this.state.data.length > 0 ? (
            this.state.data.map((im, indexOf) => {
              return (
                <ImgMediaCard
                  src={"data:image/png;base64," + encode(im.image.data)}
                  location={im.location}
                  key={im._id.toString()}
                  message={im.message}
                  popup={() => this.popImage(im)}
                  requestOnDelete={() => this.requestOnDelete(indexOf, im)}
                  showEditPopUp={() => this.showEditPopUp(im, indexOf)}
                />
              );
            })
          ) : (
            <h3>Please add an image</h3>
          ))}
      </div>
    );
  }
}

export default ImageComp;
