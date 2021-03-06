import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import SplashBody from './splash_body';
import SplashFooter from './splash_footer';
import SplashHeader from './splash_header';

class Splash extends React.Component{
  constructor(props){
    super(props)
    this.handleDemo = this.handleDemo.bind(this)
  }

  handleDemo(){
    this.props.demoLogin()
    .then(()=> {
      this.props.history.push("/channel/1")
    })
  }

  render(){
    return(
      <div className="splash">
        <SplashHeader
          handleDemo={this.handleDemo}
          logout={this.props.logout}
          currentUser={this.props.currentUser}
        />
        <SplashBody currentUser={this.props.currentUser} />
        <SplashFooter />
      </div>
    )
  }
}

export default Splash;