import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: "",
      type: "both",
      active: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleclose = this.handleclose.bind(this);
    // this.handleClick = this.handleclose.bind(this);

  }

  handleInput(e){
    if(e.target.value.length > 0){
      debugger
      this.setState({
        input: e.target.value,
        active: true
      })
    } else {
      this.setState({
        active: false
      })
    }
  }

  handleclose(e){
    this.setState({
      active: false
    })
  }

  // handleClick(e){
  //   if(this.state.input.length > 0){
  //     this.setState({
  //       active: true
  //     })
  //   }
  //   e.stopPropagation()
  // }

  render(){
    
    let usersResultsIncludes = [];
    let usersResultsStarts = [];
    Object.values(this.props.users).map(user => {
      if(user.displayName.slice(0, this.state.input.length).toLowerCase() === this.state.input){
        usersResultsStarts.push(
          <a key={user.id}>
            <li>
              <img src={window.defaultAvatar} alt="avatar" className="avatar" />{user.displayName}
            </li>
          </a>
        )
      } else if(user.displayName.toLowerCase().includes(this.state.input)){
        usersResultsIncludes.push(
          <a key={user.id}>
            <li >
              <img src={window.defaultAvatar} alt="avatar" className="avatar" />{user.displayName}
            </li>
          </a>
        )
      }
    })

    let channelsResultsIncludes = [];
    let channelsResultsStarts = [];
    Object.values(this.props.channels).map(channel => {
      if(channel.name.slice(0, this.state.input.length).toLowerCase() === this.state.input){
        channelsResultsStarts.push(
          <a key={channel.id}>
            <li>
              <img src={window.defaultAvatar} alt="avatar" className="avatar" />{channel.name}
            </li>
          </a>
        )
      } else if(channel.name.toLowerCase().includes(this.state.input)){
        channelsResultsIncludes.push(
          <a key={channel.id}>
            <li>
              <img src={window.defaultAvatar} alt="avatar" className="avatar" />{channel.name}
            </li>
          </a>
        )
      }
    })
    
    let usersResults
    if(!this.state.active){
      usersResults = null
    } else if (usersResultsStarts.length > 0){
      usersResults = usersResultsStarts
    } else {
      usersResults = usersResultsIncludes
    }

    let channelsResults
    if(!this.state.active){
      channelsResults = null
    } else if (channelsResultsStarts.length > 0){
      channelsResults = channelsResultsStarts
    } else {
      channelsResults = channelsResultsIncludes
    }
    let background = this.state.active ? 
    <div className="search-background" onClick={this.handleclose}></div> : null
    
    let listname = this.state.active ? "search active" : "search"

    return(
    <nav className="search" onClick={e => e.stopPropagation()}>
      {background}
      <input
        type="text"
        placeholder="Search for users or channels" 
        onChange={this.handleInput}
        onClick={this.handleClick}
        onClick={e => e.stopPropagation()}
      />
      <ul className={listname} onClick={e => e.stopPropagation()}>
        {usersResults}
        {channelsResults}
      </ul>
    </nav>
    )
  }
}

export default SearchBar;