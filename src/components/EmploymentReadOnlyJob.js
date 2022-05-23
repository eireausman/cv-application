import React from "react";
import imgEdit from "../z_img/edit.png";
import imgDelete from "../z_img/delete.png";

const EmploymentReadOnlyJob = ({
  job,
  handleEditButtonClick,
  handleDeleteJobEntry,
}) => {
  return (
    <div className="readOnlyJob">
      <div className="jobBoxControls">
        <img
          src={imgEdit}
          alt="edit"
          className="jobBoxControlsIcon"
          onClick={(e) => handleEditButtonClick(e, job)}
        ></img>
        <img
          src={imgDelete}
          alt="delete"
          className="jobBoxControlsIcon"
          onClick={(e) => handleDeleteJobEntry(e, job)}
        ></img>
      </div>
      <p className="readOnlyJobTextBlock">
        <span className="readOnlyJobTextBlockTitle">Company</span>
        {job.company}
      </p>
      <p className="readOnlyJobTextBlock">
        <span className="readOnlyJobTextBlockTitle">Job Title</span>
        {job.jobTitle}
      </p>
      <p className="readOnlyJobTextBlock">
        <span className="readOnlyJobTextBlockTitle">Start Date</span>
        {job.startDate}
      </p>
      <p className="readOnlyJobTextBlock">
        <span className="readOnlyJobTextBlockTitle">End Date</span>
        {job.endDate}
      </p>
    </div>
  );
};

export default EmploymentReadOnlyJob;
