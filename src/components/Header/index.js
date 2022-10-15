import Drawer from "./Drawer";
import React from "react";
import Button from "../Button";
import "./styles.css";

function Header() {
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
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="#card-news">
          <p className="links">Crypto News</p>
        </a>
        <a href="/about-us">
          <p className="links">About Us</p>
        </a>
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