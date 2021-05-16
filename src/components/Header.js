import React from "react";
import "./Header.css";
import Image from "./images/jeswin-round.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="header__image" src={Image} alt="" />
      </div>
      <div className="header__text">
        <h1 className="header__mainText">Hello , I am Jeswin</h1>
        <h3 className="header__subText">Full Stack Developer</h3>
      </div>
    </div>
  );
};

export default Header;
