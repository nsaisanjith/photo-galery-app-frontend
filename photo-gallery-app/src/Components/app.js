import React from "react";
import classes from "../css/title.module.css";
import Navbar from "../functional-components/nav";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={classes.welcome}>
          <h3>Welcome</h3>
        </div>
      </div>
    );
  }
}

export default App;
