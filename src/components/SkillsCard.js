import React from "react";
import "./SkillsCard.css";

const skillsCard = ({ icon, name }) => {
  return (
    <div className="skillsCard">
      <div className=" skillsCard__left">
        <img src={icon} alt="" />
      </div>
      <div className="skillsCard__right">
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default skillsCard;
