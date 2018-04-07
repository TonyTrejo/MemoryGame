import React from "react";
import "./nav.css";

const Nav = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <ul className='right'>
            <li className="score"> Score: {props.score}</li>
            <li className="score"> Top Score: {props.topScore}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;