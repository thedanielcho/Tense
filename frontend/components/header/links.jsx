import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

class LinksTab extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    this.handleclose = this.handleclose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(){
    this.setState({
      active: true
    })
  }

  handleclose(e){
    this.setState({
      active: false
    })
  }

  render(){
    let background = this.state.active ? 
    <div className="links-background" onClick={this.handleclose}></div> : null

    let list = this.state.active ?
    <ul className="links-list">
        <li>
          <a href="https://github.com/thedanielcho/Tense" target="_blank">
            Tense
          </a>
        </li>
        <li>
          <a href="https://github.com/thedanielcho/" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/daniel-cho-376110189/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/daniel-cho-31" target="_blank">
            AngelList
          </a>
        </li>
        <li>
          <a href="https://www.thedanielcho.com/" target="_blank">
            Daniel Cho
          </a>
        </li>
      </ul> : null

    return(
    <div className="links">
      <button onClick={this.handleOpen}>Links</button>
      {background}
      {list}
    </div>
    )
  }
}

export default LinksTab;