import React from "react";
import "./styles.css";
import CircularProgress from "@mui/material/CircularProgress";
function Loader() {
  return (
    <div className="loader-wrapper">
      <CircularProgress style={{'color': '#18978F'}}/>
    </div>
  );
}

export default Loader;
