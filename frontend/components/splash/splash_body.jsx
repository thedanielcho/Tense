import { Link } from "react-router-dom"
import React from 'react'
const SplashBody = (props) => {
  return(
    <div className="splash-body">
      <h1>Tense makes it <span>downright stressful</span> to work together</h1>
      <Link className="signup" to="/signup">
        <button>JOIN FOR FREE</button>
      </Link>
    </div>
  )
}

export default SplashBody