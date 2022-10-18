import React from "react";
import {useState} from "react";
import "./App.css";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  let button;

  function handleLogOut() {
    setIsLoggedIn("false");
  }
  function handleLogin() {
    setIsLoggedIn("true");
  }

  if (isLoggedIn == "true") {
    button = <LogoutButton changeOnClick={handleLogOut} />;
  } else {
    button = <LoginButton changeOnClick={handleLogin} />;
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
