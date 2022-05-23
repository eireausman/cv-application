import "./skillsStyles.css";
import React, { useState, Fragment } from "react";
import data from "./skills-data.json";
import SkillsReadOnlySkill from "./SkillsReadOnlySkill";
import SkillsEditSkill from "./SkillsEditSkill";
import SkillsAddSkill from "./SkillsAddSkill";
import { nanoid } from "nanoid";

const Skills = () => {
  const [skills, setSkills] = useState(data);
  const [addSkill, setaddSkill] = useState({
    skill: ``,
    level: ``,
  });
  const [editID, setEditID] = useState(null);
  const [newSkillMarker, setNewSkillMarker] = useState(null);
  const [editSkillFormData, setEditSkillFormData] = useState({
    id: ``,
    skill: ``,
    level: ``,
  });

  const showAddNewSkillForm = (e, changeToValue) => {
    e.preventDefault();
    setNewSkillMarker(changeToValue);
  };

  const handleSkillsFormDataChange = (e) => {
    e.preventDefault();
    const copyaddSkill = { ...addSkill };
    const fieldValue = e.target.value;
    const fieldName = e.target.getAttribute("name");
    copyaddSkill[fieldName] = fieldValue;
    setaddSkill(copyaddSkill);
  };

  const handleSkillsEditFormChange = (e) => {
    e.preventDefault();

    const copyEditSkillFormData = { ...editSkillFormData };
    const fieldValue = e.target.value;
    const fieldName = e.target.getAttribute("name");
    copyEditSkillFormData[fieldName] = fieldValue;
    setEditSkillFormData(copyEditSkillFormData);
  };

  const handleSkillCancelFormChange = (e) => {
    e.preventDefault();
    setEditID(null);
  };

  const handleEditSkillSaveButtonClick = (e) => {
    e.preventDefault();
    console.log(addSkill);
    const skillsCopy = [...skills];
    const copyEditSkillFormData = { ...editSkillFormData };
    const IndexPosition = skillsCopy.findIndex(
      (skillsEntry) => skillsEntry.id === copyEditSkillFormData.id
    );
    skillsCopy[IndexPosition] = copyEditSkillFormData;
    setSkills(skillsCopy);
    setEditID(null);
  };

  const handleDeleteSkillEntry = (e, skill) => {
    if (
      window.confirm(
        `Are you sure you want to delete the following skill: ${skill.skill}`
      ) !== true
    ) {
      return;
    }
    const skillsCopy = [...skills];
    const IndexPosition = skillsCopy.findIndex(
      (skillsEntry) => skillsEntry.id === skill.id
    );
    console.log(IndexPosition);
    skillsCopy.splice(IndexPosition, 1);
    setSkills(skillsCopy);
    console.log(skillsCopy);
    console.log(skills);
  };

  const handleSkillFormSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      id: nanoid(),
      skill: addSkill.skill,
      level: addSkill.level,
    };
    const skillsCopy = [...skills, newSkill];
    setSkills(skillsCopy);
    setNewSkillMarker(null);
  };

  const handleEditButtonClick = (e, skill) => {
    e.preventDefault();
    setEditID(skill.id);

    const formValues = {
      id: skill.id,
      skill: skill.skill,
      level: skill.level,
    };
    setEditSkillFormData(formValues);
  };

  return (
    <Fragment>
      {newSkillMarker === 1 ? (
        <SkillsAddSkill
          handleSkillFormSubmit={handleSkillFormSubmit}
          handleSkillsFormDataChange={handleSkillsFormDataChange}
          showAddNewSkillForm={showAddNewSkillForm}
        />
      ) : (
        <div className="addSkill">
          <button onClick={(e) => showAddNewSkillForm(e, 1)}>
            Add new skill
          </button>
        </div>
      )}
      <section className="sectionContainer">
        {skills.map((skill) => (
          <div>
            {editID === skill.id ? (
              <SkillsEditSkill
                skill={skill}
                handleSkillCancelFormChange={handleSkillCancelFormChange}
                editSkillFormData={editSkillFormData}
                handleSkillsEditFormChange={handleSkillsEditFormChange}
                handleEditSkillSaveButtonClick={handleEditSkillSaveButtonClick}
              />
            ) : (
              <SkillsReadOnlySkill
                skill={skill}
                handleEditButtonClick={handleEditButtonClick}
                handleDeleteSkillEntry={handleDeleteSkillEntry}
              />
            )}
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Skills;
