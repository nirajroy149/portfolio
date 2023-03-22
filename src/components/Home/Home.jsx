import React from "react";
import "./home.css";
import profilePic from "../../images/face_profile.png";
import { Connect } from "../Connect/Connect";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* <div className="home-container home"> */}

      <div className="discription">
        <div className="title">
          <span>Hello, my name is </span>
          <span className="red">Niraj Kumar Roy</span>
        </div>
        <div className="qualification">
          I'm a <span className="red">W</span>eb <span className="red">D</span>
          eveloper
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="buttons">
          <button className="red">More About Me</button>
          <button className="white">Download CV</button>
        </div>
        <Connect />
      </div>
      <div className="profile-pic">
        <img src={profilePic} alt="not found"></img>
      </div>
      {/* </div> */}
    </section>
  );
}
