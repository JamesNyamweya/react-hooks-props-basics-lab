import React from "react";
import Links from "./Links";

function About({bio, links}) {
  console.log(bio, links)
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {!bio ? null : bio == "" ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links {...links}/> 
    </div>
  );
}

export default About;