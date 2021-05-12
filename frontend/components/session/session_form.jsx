import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import snakifyObject from '../../util/snakify_util'
class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      displayName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    let railsReadyUser = snakifyObject(user)
    this.props.processForm(railsReadyUser);
  }

  handleDemo(){
    this.props.demoLogin();
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  render(){
    let link = (this.props.formType === "Login") ? "Signup" : "Login"
    let header = (this.props.formType === "Login") ? "Log in to TENSE" : "Sign up for TENSE"

    let errors = this.props.errors.session.map((error, index) => {
      return (
        <li key={index}>{error}</li>
      )
    })

    return(
      <div className="session-form-container">
        <NavLink to={"/"} className="logo">
          <img src={window.tempIcon} alt="temp icon" />
          <h2>TENSE</h2>
        </NavLink>
        <h1>{header}</h1>

        <NavLink to={`/${link}`} className="redirect">Click to {link} instead</NavLink> 

        <form onSubmit={this.handleSubmit} className="session-form">
          <label htmlFor="email">Email address:</label>
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInput("email")}
            placeholder="name@work-email.com"
          />
          

          {(this.props.formType === "Signup") ? 
            <>
            <label htmlFor="displayName">Display Name:</label>
            <input
              id="displayName"
              type="displayName"
              value={this.state.displayName}
              onChange={this.handleInput("displayName")}
              placeholder="Your name"
            />
            </> : <></>
          } 
          
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
            placeholder="Your password"  
          />
          
          <ul className="errors-list">
            {errors}
          </ul>

          <button type="submit">{this.props.formType}</button>
        </form>
        <button onClick={this.handleDemo}>Demo Login</button>
      </div>
    )
  }
}

export default SessionForm;