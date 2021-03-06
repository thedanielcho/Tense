import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => 
      !loggedIn ? <Component { ...props } /> : <Redirect to="/channel/1" />
    }
  />
)

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route 
    path={path}
    render={(props) =>
      loggedIn ? <Component { ...props } /> : <Redirect to="/" />
    }
  />
)

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);