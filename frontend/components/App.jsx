
import React from "react";
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
import channel_container from "./channels/channel_container";
import left_sidebar_container from "./leftsidebar/left_sidebar_container";
import Header from "./header/header";
import header_container from "./header/header_container";
import Modal from "./modal/modal";


class App extends React.Component{

  componentDidMount(){

  }

  componentDidUpdate(){

  }
  
  render(){

    return(
      <div>
        <Modal />
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/login" component={login_form_container} />
        <AuthRoute path="/signup" component={signup_form_container} />
    
        <div className="channel-view">
          <ProtectedRoute path="/:viewType/:viewId" component={left_sidebar_container} />
          <ProtectedRoute path="/channel" component={header_container} />
          <ProtectedRoute path="/channel/:channelId" component={channel_container} />
        </div>
      </div>
    );
  }
} 

export default App;