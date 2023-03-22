import React from "react";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { EachConnect } from "./EachConnect";
import "./style.css"


export const Connect = () => {
  return (
    <div className="connect-container">
      <a href="https://github.com/nirajroy149" target="_blank" rel="noreferrer" className="each-connect">
      <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/niraj-kumar-roy-0188821b2/" rel="noreferrer" target="_blank" className="each-connect">
      <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};
