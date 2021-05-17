import React from 'react';
import { Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import RightSidebarAbout from './right_sidebar_about';
import RightSidebarMembersList from './right_sidebar_members_list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class RightSidebar extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    let aboutPath = (this.props.pathName === `/channel/${this.props.channel.id}/sidebar/about`) ?
    `/channel/${this.props.channel.id}/sidebar`
    : `/channel/${this.props.channel.id}/sidebar/about`;

    let membersPath = (this.props.pathName === `/channel/${this.props.channel.id}/sidebar/members`) ?
    `/channel/${this.props.channel.id}/sidebar`
    : `/channel/${this.props.channel.id}/sidebar/members`;

    let membersArrow = (this.props.pathName === `/channel/${this.props.channel.id}/sidebar/members`) ?
    faChevronDown : faChevronRight

    let aboutArrow = (this.props.pathName === `/channel/${this.props.channel.id}/sidebar/about`) ?
    faChevronDown : faChevronRight

    let members = [];
    if (Object.keys(this.props.memberships).length > 0){
      members = this.props.users.filter(user => (
        (Object.keys(user).includes("membershipId") &&
        Object.keys(this.props.memberships).includes(user.membershipId.toString()))
      ))
    }
    return(
      <div className="right-side-bar">
        <div className="details">
          <h2>Details</h2>
          <NavLink to={`/channel/${this.props.channel.id}`}>
            <FontAwesomeIcon icon={faTimes} />
          </NavLink>
        </div>
        <ul className="details-list">
          <li className="about-tab">
            <NavLink to={aboutPath}>
              <div>About</div>
              <div><FontAwesomeIcon icon={aboutArrow} /></div>
            </NavLink>
            <Route path={aboutPath} render={props => <RightSidebarAbout {...props} channel={this.props.channel}/>}/>
          </li>
          <li className="members-tab">
            <NavLink to={membersPath}>
              <div>Members</div>
              <div><FontAwesomeIcon icon={membersArrow} /></div>
            </NavLink>
            <Route path={membersPath} render={props => <RightSidebarMembersList {...props} users={this.props.users} members={members}/>}/>
          </li>
        </ul>
      </div>

    )
  }
}

export default RightSidebar;