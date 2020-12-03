import React from "react";
import "./Skills.css";
import SkillsCard from "./SkillsCard";
import htmlIcon from "./svg/html.svg";
import cssIcon from "./svg/css.svg";
import jsIcon from "./svg/js.svg";
import reactIcon from "./svg/react-js.svg";
import reduxIcon from "./svg/redux.svg";
import bootsIcon from "./svg/bootstrap-4.svg";
import jqueryIcon from "./svg/jquery.svg";
import pythonIcon from "./svg/python.svg";
import gitHubIcon from "./svg/gh.svg";
import gitIcon from "./svg/git.svg";
import fireIcon from "./svg/fb.svg";

const Skills = () => {
  return (
    <React.Fragment>
      <h1 className="skills__header" id="skills">
        My Skills
      </h1>
      <div className="skills">
        <SkillsCard
          className="skills__card col-md-3"
          icon={htmlIcon}
          name="HTML"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={cssIcon}
          name="CSS"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={jsIcon}
          name="JavaScript"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={reactIcon}
          name="React"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={reduxIcon}
          name="Redux"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={bootsIcon}
          name="BootsStrap"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={jqueryIcon}
          name="jQuery"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={pythonIcon}
          name="Python"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={gitIcon}
          name="Git"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={gitHubIcon}
          name="GitHub"
        />
        <SkillsCard
          className="skills__card col-md-3"
          icon={fireIcon}
          name="Firebase"
        />
      </div>
    </React.Fragment>
  );
};

export default Skills;
