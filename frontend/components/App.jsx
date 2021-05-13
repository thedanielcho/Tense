
import React from "react";
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
import channel_container from "./channels/channel_container";


const App = () => (
  <div>
    <AuthRoute exact path="/" component={SplashContainer} />
    <ProtectedRoute path="/channel" component={channel_container} />
    <AuthRoute path="/login" component={login_form_container} />
    <AuthRoute path="/signup" component={signup_form_container} />
  </div>
);

export default App;