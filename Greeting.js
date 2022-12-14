import React from "react";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn == "true") {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
};

export default Greeting;
