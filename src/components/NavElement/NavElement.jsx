import React from 'react'

export default function NavElement(props) {
//    var activeClass = "";
//    if(props.active===props.name) activeClass="active";
//    // ${activeClass}
  return (
    <button name={props.name} onClick={props.onPress} >
        <i className={`${props.class}`}></i>
        <div>{props.title}</div>
    </button>
  )
}
