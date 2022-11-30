import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

  function Footer () {
    return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2022 Penelope Leung</p>
    </div>
    );
}

export default Footer;