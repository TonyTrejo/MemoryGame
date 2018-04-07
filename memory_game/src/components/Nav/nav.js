import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
        <div className="score">
      <nav>
        <div className="nav-container">
         
            <ul className='right'>
              <li className="score"> Score: {props.score}</li>
              <li className="score"> Top Score: {props.topScore}</li>
            </ul>
        </div>
      </nav>
    </div>
);}

export default Nav;