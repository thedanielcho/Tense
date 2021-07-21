import React from 'react';
class SplashFooter extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul className="splash-footer">
        <div className="left">
          <li className="logo">
              <img src={window.tempIcon} alt="temp icon" />
              <h2>TENSE</h2>
          </li>
          <li className="footer-links">
            <ul>
              <li >
                <a href="https://github.com/thedanielcho/Tense" target="_blank">
                  <img  src={window.tempIcon} alt="temp icon" />
                </a>
                
                <a href="https://github.com/thedanielcho" target="_blank">
                  <img src={window.gitHubLogo} alt="gitHub logo" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-cho-376110189/" target="_blank">
                  <img src={window.linkedInLogo} alt="linkedin Logo" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-cho-376110189/" target="_blank">
                  <img src={window.angelListIcon} alt="linkedin Logo" />
                </a>
              </li>
            </ul>
          </li>
        </div>
        <div className="right">
          <h2>
            Contact
          </h2>
          <ul>
            <li>
              <a href="https://thedanielcho.com"  target="_blank">Daniel Cho</a>
            </li>
            <li>
              <a href="tel:+2019161683">201-916-1683</a>
            </li>
            <li>
              <a href="mailto:thedanielcho@gmail.com">thedanielcho@gmail.com</a>
            </li>
          </ul>
        </div>
      </ul>
    )
  }
}

export default SplashFooter