import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./Components/app";
import Login from "./Components/Login";
import Header from "./functional-components/Header";
import Footer from "./functional-components/Footer";
import ImagePageComp from "./Components/ImagePageComp";
import SignupComp from "./Components/SignupComp";
const route = (
  <React.Fragment>
    <HashRouter>
        <Header/>
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/image" component={ImagePageComp} exact={true} />
            <Route path="/signup" component={SignupComp} exact={true} />
          </Switch>
        <Footer/>
    </HashRouter>
  </React.Fragment>
);

ReactDOM.render(route, document.getElementById("root"));
