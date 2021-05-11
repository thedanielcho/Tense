
import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";


const App = () => (
  <div>
    <h1>Tense</h1>
    <GreetingContainer />
    <AuthRoute path="/login" component={login_form_container} />
    <AuthRoute path="/signup" component={signup_form_container} />
  </div>
);

export default App;