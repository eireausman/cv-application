import React, { useState } from "react";

const EmploymentAddJob = ({ handleJobFormSubmit, handleJobFormDataChange }) => {
  return (
    <div>
      <h2> Add a job </h2>
      <form className="newJobForm" onSubmit={handleJobFormSubmit}>
        <input
          type="text"
          required="required"
          name="company"
          placeholder="Company"
          onChange={handleJobFormDataChange}
        ></input>
        <input
          type="text"
          required="required"
          name="jobTitle"
          placeholder="Job Title"
          onChange={handleJobFormDataChange}
        ></input>
        <input
          type="date"
          required="required"
          name="startDate"
          placeholder="Start Date"
          onChange={handleJobFormDataChange}
        ></input>
        <input
          type="text"
          required="required"
          name="endDate"
          placeholder="End Date"
          onChange={handleJobFormDataChange}
        ></input>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmploymentAddJob;
