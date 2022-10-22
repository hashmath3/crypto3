import Drawer from "./Drawer";
import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";
import { Switch } from "@mui/material";


function Header() {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  const [darkTheme, setDarkTheme] = useState(
    defaultDark == "dark" ? true : false
  );

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (!darkTheme) {
      setDark();
    } else {
      setLight();
    }
    setDarkTheme(!darkTheme);
  };
  return (
    <div className="navbar">
    {/* https://media.tenor.com/eQct0ds38s4AAAAC/bitcoin-bitcoins.gif */}
    <div className="first">
        <img className="navimg" src="https://bitcoinminingcompany.co.uk/wp-content/uploads/2021/05/bitcoin-loader-1.gif"/>
     
      <a href="/">
      <h1 className="heading">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      </a></div>
      <div className="links-flex">
        <Switch   sx={{
        '& .Mui-checked': {
          color: '#18978F !important',
       
      },
      '& .MuiSwitch-track': {
          backgroundColor:'#18978F !important'
      },}}

        
          defaultChecked
          value={!darkTheme}
          onClick={() => toggleTheme()}
        />
    
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/compare">
          <p className="links">Compare</p>
        </a>
        {/* <a href="/#card-news">
          <p className="links">Crypto News</p>
        </a> */}
    
        <a href="/dashboard">
          <p className="links">
            <Button text="Dashboard" />
          </p>
        </a>
      </div>
      <div className="menu-div">
        <Drawer />
      </div>
    </div>
 
  );
}

export default Header;


// defaultChecked
// value={!darkTheme}
// onClick={() => toggleTheme()}