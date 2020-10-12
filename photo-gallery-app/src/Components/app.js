import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
          <div className="view intro-2 into-image-height">
            <div className="full-bg-img">
              <div className="mask rgba-black-light flex-center">
                <div className="container text-center white-text">
                  <div className="white-text text-center wow fadeInUp">
                    <h2>The new way to store your masterpice</h2>
                    <h5>in an easy and secure way</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12">
              <p align="justify">
                {/* INTRO TEXT HERE */}
              </p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
