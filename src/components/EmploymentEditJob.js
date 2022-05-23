import React from "react";
import imgSave from "../z_img/save.png";
import imgCancel from "../z_img/cancel.png";

const EmploymentEditJob = ({
  job,
  handleJobEditFormChange,
  editJobFormData,
  handleEditSaveButtonClick,
  handleJobCancelFormChange,
}) => {
  return (
    <div className="editJob">
      <form>
        <label htmlFor="company" className="jobEditFormLabel">
          Company
        </label>
        <input
          className="jobEditFormInput"
          type="text"
          required="required"
          name="company"
          id="company"
          placeholder="Company"
          value={editJobFormData.company}
          onChange={(e) => handleJobEditFormChange(e, job)}
        ></input>
        <label htmlFor="jobTitle" className="jobEditFormLabel">
          Job Title
        </label>
        <input
          className="jobEditFormInput"
          type="text"
          required="required"
          name="jobTitle"
          id="jobTitle"
          placeholder="Job Title"
          value={editJobFormData.jobTitle}
          onChange={(e) => handleJobEditFormChange(e, job)}
        ></input>
        <label htmlFor="startDate" className="jobEditFormLabel">
          Start Date
        </label>
        <input
          className="jobEditFormInput"
          type="date"
          required="required"
          name="startDate"
          id="startDate"
          placeholder="Start Date"
          value={editJobFormData.startDate}
          onChange={(e) => handleJobEditFormChange(e, job)}
        ></input>
        <label htmlFor="endDate" className="jobEditFormLabel">
          End Date
        </label>
        <input
          className="jobEditFormInput"
          type="date"
          required="required"
          name="endDate"
          id="endDate"
          placeholder="End Date"
          value={editJobFormData.endDate}
          onChange={(e) => handleJobEditFormChange(e, job)}
        ></input>
        <div className="jobBoxControls">
          <img
            src={imgSave}
            alt="save"
            className="jobBoxControlsIcon"
            onClick={handleEditSaveButtonClick}
          ></img>
          <img
            src={imgCancel}
            alt="cancel"
            className="jobBoxControlsIcon"
            onClick={handleJobCancelFormChange}
          ></img>
        </div>
      </form>
    </div>
  );
};

export default EmploymentEditJob;
