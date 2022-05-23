import React from "react";
import imgEdit from "../z_img/edit.png";
import imgDelete from "../z_img/delete.png";

const EmploymentReadOnlyJob = ({
  skill,
  handleEditButtonClick,
  handleDeleteSkillEntry,
}) => {
  return (
    <div className="readOnlySkill">
      <div className="skillBoxControls">
        <img
          src={imgEdit}
          alt="edit"
          className="skillBoxControlsIcon"
          onClick={(e) => handleEditButtonClick(e, skill)}
        ></img>
        <img
          src={imgDelete}
          alt="delete"
          className="skillBoxControlsIcon"
          onClick={(e) => handleDeleteSkillEntry(e, skill)}
        ></img>
      </div>
      <div className="skillBoxTextDetails">
        <p className="readOnlySkillTextBlock">
          <span className="readOnlySkillTextBlockTitle">Skill: </span>
          {skill.skill}
        </p>
        <p className="readOnlySkillTextBlock">
          <span className="readOnlySkillTextBlockTitle">Level: </span>
          {skill.level}
        </p>
      </div>
    </div>
  );
};

export default EmploymentReadOnlyJob;
