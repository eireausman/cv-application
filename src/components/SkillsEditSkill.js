import React from "react";
import imgSave from "../z_img/save.png";
import imgCancel from "../z_img/cancel.png";

const SkillsEditSkill = ({
  skill,
  handleSkillsEditFormChange,
  editSkillFormData,
  handleEditSkillSaveButtonClick,
  handleSkillCancelFormChange,
}) => {
  return (
    <div>
      {console.log(editSkillFormData)}
      <form className="skillEditForm">
        <label htmlFor="skill" className="skillEditFormLabel">
          Skill
        </label>
        <input
          type="text"
          required="required"
          name="skill"
          placeholder="Skill"
          className="skillEditFormInput"
          value={editSkillFormData.skill}
          onChange={(e) => handleSkillsEditFormChange(e, skill)}
        ></input>
        <label htmlFor="level" className="skillEditFormLabel">
          Level
        </label>
        <input
          type="text"
          required="required"
          name="level"
          placeholder="Proficiency Level"
          className="skillEditFormInput"
          value={editSkillFormData.level}
          onChange={(e) => handleSkillsEditFormChange(e, skill)}
        ></input>

        <div className="skillBoxControls">
          <img
            src={imgSave}
            alt="save"
            className="skillBoxControlsIcon"
            onClick={handleEditSkillSaveButtonClick}
          ></img>
          <img
            src={imgCancel}
            alt="cancel"
            className="skillBoxControlsIcon"
            onClick={handleSkillCancelFormChange}
          ></img>
        </div>
      </form>
    </div>
  );
};

export default SkillsEditSkill;
