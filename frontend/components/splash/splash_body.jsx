import { Link } from "react-router-dom"
import React from 'react'
const SplashBody = (props) => {
  let text = props.currentUser ? "LAUNCH TENSE" : "JOIN FOR FREE"
  return(
    <div className="">
      <div className="splash-body body-1">
        <h1>Tense makes it <span>downright stressful</span> to work together</h1>
        <Link className="signup" to="/signup">
          <button>{text}</button>
        </Link>
      </div>
      <div className="splash-body body-2">
        <div className="text">
          <h1>Tense is a messaging app inspired by Slack</h1>
          <p>With Tense, you can create channels and chat with other users, or create a direct messages to chat privately.</p>
        </div>
        <img src={window.screenshot} alt="Tense Screnshot" />
      </div>
      <div className="splash-body body-3">
        <div className="text">
          <h1>Technologies used</h1>
          <p>Tense uses a Ruby on Rails backend with a React/Redux frontend, and a PostgreSQL database.</p>
        </div>
        <ul>
          <li><span className="devicon-ruby-plain-wordmark"></span></li>
          <li><span className="devicon-rails-plain-wordmark"></span></li>
          <li><span className="devicon-javascript-plain"></span></li>
          <li><span className="devicon-react-original-wordmark"></span></li>
          <li><span className="devicon-redux-original"></span></li>
          <li><span className="devicon-postgresql-plain-wordmark"></span></li>
        </ul>
      </div>
      <div className="splash-body body-4">
        <div className="text">
          <h1>Check out my other projects</h1>
        </div>
        <div className="project-links">
          <a href="https://postcard-triplog.herokuapp.com/#/" target="_blank">
            <h1>Postcard</h1>
            <img src={window.postcard} alt="Postcard Screnshot" />
          </a>
          <a href="https://thedanielcho.github.io/tree_gen/" target="_blank">
            <h1>Tree Gen</h1>
            <img src={window.treegen} alt="Tree-gen Screnshot" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SplashBody