import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./Components/app";
import Login from "./Components/Login";
import Header from "./functional-components/Header";
import Navbar from "./functional-components/nav";
import Footer from "./functional-components/Footer";
import ImageComp from "./Components/ImageComp";

const route = (
  <BrowserRouter>
    <div>
      <Header head={"Photo-Gallery App"} />
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/image" component={ImageComp} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(route, document.getElementById("root"));
