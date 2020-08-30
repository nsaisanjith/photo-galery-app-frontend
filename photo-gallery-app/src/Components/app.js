import React from "react";
import classes from "../css/title.module.css";
class App extends React.Component {
  render() {
    return (
      <div className={classes.welcome}>
        <h3>Welcome</h3>
      </div>
    );
  }
}

export default App;
