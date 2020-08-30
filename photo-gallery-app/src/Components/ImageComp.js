import React, { Component } from "react";
import axios from "axios";
import ImgMediaCard from "../functional-components/ImgMediaCard";
import { encode } from "base64-arraybuffer";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import EditFormPhoto from "../functional-components/EditFormPhoto";

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
  };

  request = async () => {
    console.log("hi");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzJkOGY2OWY2ODViMmQ0NDAxOTczNSIsImlhdCI6MTU5ODU0MDYwMX0.0I2oY1bGlDritjRvccAks3m40jo51U-_sNO80b_D6Io";
    try {
      const res = await axios.get("http://localhost:3200/images", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await this.setState({
        data: res.data,
      });
      console.log(this.state.data[0].location);
    } catch (e) {}
  };
  requestOnDelete = async (indexOf, im) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzJkOGY2OWY2ODViMmQ0NDAxOTczNSIsImlhdCI6MTU5ODU0MDYwMX0.0I2oY1bGlDritjRvccAks3m40jo51U-_sNO80b_D6Io";
      console.log(im._id.toString());
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
        console.log("Couldn't find the image");
      }
      if (error.status === 500) {
        console.log("server error");
      }
    }
  };
  popImage = async (im) => {
    await this.setState({
      visible: !this.state.visible,
      image: im.image.data,
    });
  };
  showEditPopUp = async () => {
    await this.setState({
      showEditPopUp: !this.state.showEditPopUp,
    });
  };
  render() {
    return (
      <div>
        {this.state.visible && (
          <Lightbox
            mainSrc={"data:image/png;base64," + encode(this.state.image)}
            onCloseRequest={async () =>
              this.setState({ visible: !this.state.visible })
            }
          />
        )}
        <div style={{ height: 50, display: "inline" }}>
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
                    showEditPopUp={this.showEditPopUp}
                  />
                );
              })
            ) : (
              <h3>Please add an image</h3>
            ))}
        </div>
        <EditFormPhoto
          show={this.state.showEditPopUp}
          showEditPopUp={this.showEditPopUp}
        />
      </div>
    );
  }
}

export default ImageComp;
