import React from "react";

const SkillsAddSkill = ({
  handleSkillFormSubmit,
  handleSkillsFormDataChange,
  showAddNewSkillForm,
}) => {
  return (
    <div>
      <h2> Add a Skill </h2>
      <form className="newSkillForm" onSubmit={handleSkillFormSubmit}>
        <input
          type="text"
          required="required"
          name="skill"
          placeholder="Skill"
          onChange={handleSkillsFormDataChange}
        ></input>
        <input
          type="text"
          required="required"
          name="level"
          placeholder="Level"
          onChange={handleSkillsFormDataChange}
        ></input>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SkillsAddSkill;
