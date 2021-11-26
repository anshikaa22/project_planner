import { Button } from "@material-ui/core";
import React from "react";
import { useLocalContext } from "../../context/context";
import "./style.css";
const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div>
    <div className="header">
       Weclome to Project Planner!
    </div>
    <div className="login">
     
      <Button variant="contained" color="default" onClick={() => login()}>
        Login Using Google!
      </Button>
    </div>
    </div>
  );
};

export default Login;
