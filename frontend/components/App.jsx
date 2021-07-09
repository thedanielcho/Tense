
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
import direct_message_container from "./direct_messages/direct_message_container";
import direct_message_header_container from "./direct_messages/direct_message_header_container";


class App extends React.Component{

  componentDidMount(){

  }

  componentDidUpdate(){

  }
  
  render(){

    return(
      <div>
        {/* <Modal /> */}
        <Route path="/:viewType/:viewId" component={Modal} />
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/login" component={login_form_container} />
        <AuthRoute path="/signup" component={signup_form_container} />
    
        <Route path="/channel">
          <div className="channel-view">
            <ProtectedRoute path="/:viewType/:viewId" component={left_sidebar_container} />
            <ProtectedRoute path="/channel" component={header_container} />
            <ProtectedRoute path="/channel/:channelId" component={channel_container} />
          </div>
        </Route>
        <Route path="/dm">
        <div className="dm-view">
            <ProtectedRoute path="/:viewType/:viewId" component={left_sidebar_container} />
            <ProtectedRoute path="/dm" component={header_container} />
            <ProtectedRoute path="/dm/:directMessageId" component={direct_message_container} />
          </div>
        </Route>
      </div>
    );
  }
} 

export default App;