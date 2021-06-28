import React from 'react';
class SplashFooter extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul className="splash-footer">
        <li className="summary">
          <ul>
            <li >
              <a href="https://github.com/thedanielcho/Tense" target="_blank">
                <img className="logo" src={window.tempIcon} alt="temp icon" />
              </a>
              
              <a href="https://github.com/thedanielcho" target="_blank">
                <img src={window.gitHubLogo} alt="gitHub logo" />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <img src={window.linkedInLogo} alt="linkedin Logo" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

export default SplashFooter