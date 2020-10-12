import React, {useState} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./Components/app";
import Login from "./Components/Login";
import Header from "./functional-components/Header";
import Footer from "./functional-components/Footer";
import ImagePageComp from "./Components/ImagePageComp";
import SignupComp from "./Components/SignupComp";


function MyApp() {
  let [isShowPeofile, setIsShowPeofile] = useState(false);
   
const [isLogin, setIsLoggedIn] = useState(false);

const showProfileFun = () => {
  setIsShowPeofile(true);
  console.log("hi");
} 
const handleShowProfile = ()=>  {
  setIsShowPeofile(false);
}

const handleLoggedin = (val)=>  {
  setIsLoggedIn(val);
}
  return (
  <React.Fragment>
    <HashRouter>
        <Header isLoggedIn={isLogin}  showProfile={showProfileFun}/>
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/login" exact={true}  
             render={(props) => (
              <Login handleLoggedin={(val) => handleLoggedin(val)}/>
             )}
            />
            <Route path="/image" exact={true}  
              render={(props) => (
              <ImagePageComp showProfile={isShowPeofile} handleShowProfile={() => handleShowProfile()}/>
            )} />
            <Route path="/signup" component={SignupComp} exact={true} />
          </Switch>
        <Footer/>
    </HashRouter>
  </React.Fragment>
)
}

ReactDOM.render(
  <MyApp />, 
  document.getElementById("root")
);
