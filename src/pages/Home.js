import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Penelope</h2>
        <div className="prompt">
          <p> A Software Developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, React, NPM, Bootstrap, Figma, JQuery
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span> NodeJS, ExpressJS, MySQL, MongoDB, MVC</span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span> JavaScript, Python, C++, TypeScript</span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home;
