import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
//this is the parent component
import user from "../data/user";

function App() {
  console.log(user)
  return (
    <div>
      <NavBar />
      <Home
        name={user.name}
        city={user.city}
        color={user.color}
      />
      <About bio="I made this!" links={user.links} />
    </div>
  );
}

export default App;