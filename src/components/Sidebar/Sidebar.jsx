import React, { useEffect, useState } from "react";
import NavElement from "../NavElement/NavElement";
import "./sidebar.css";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("home");
  const handleClickScroll = (e) => {
    // console.log("scroll")
    setActiveTab(e.target.name);
    console.log(e.target.name);
    const element = document.getElementById(e.target.name);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(()=>{
    console.log("first")
    //
  },[activeTab]);

  const elements = [
    {
      name: "home",
      title: "Home",
      class: "fa-solid fa-house",
    },
    {
      name: "about",
      title: "About",
      class: "fa-solid fa-notes-medical",
    },
    {
      name: "skills",
      title: "Skills",
      class: "fa-solid fa-heart",
    },
    {
      name: "contact",
      title: "Contact",
      class: "fa-regular fa-address-book",
    },
  ];
  return (
    <div className="sidebar" id="sidebar">
      <i
        className="fa-solid fa-close close-btn"
        onClick={() => {
          document.getElementById("sidebar").classList.remove("visible");
        }}
      ></i>
      <div className="navbar">
        {elements.map((ele, index) => {
          return (
            <NavElement
              active={activeTab}
              key={index}
              onPress={handleClickScroll}
              name={ele.name}
              title={ele.title}
              class={ele.class}
            />
          );
        })}
      </div>
    </div>
  );
}
