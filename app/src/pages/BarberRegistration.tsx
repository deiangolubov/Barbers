import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../components/NavBar";

const useStyles = makeStyles({
  
});

function RegistrationPage() {
  const styles = useStyles();

  return (
    <div>
      <Navbar />
      <div>Registration</div>
    </div>
  )
}

export default RegistrationPage