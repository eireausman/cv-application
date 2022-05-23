import "./employmentStyles.css";
import React, { useState, Fragment } from "react";
import data from "./employment-data.json";
import EmploymentReadOnlyJob from "./EmploymentReadOnlyJob";
import EmploymentEditJob from "./EmploymentEditJob";
import EmploymentAddJob from "./EmploymentAddJob";
import { nanoid } from "nanoid";

const Employment = () => {
  const [jobs, setJobs] = useState(data);
  const [addJob, setAddJob] = useState({
    company: ``,
    jobTitle: ``,
    startDate: ``,
    endDate: ``,
  });
  const [editJobID, setEditJobID] = useState(null);
  const [editJobFormData, setEditJobFormData] = useState({
    id: ``,
    company: ``,
    jobTitle: ``,
    startDate: ``,
    endDate: ``,
  });

  const handleJobFormDataChange = (e) => {
    e.preventDefault();
    const copyAddJob = { ...addJob };
    const fieldValue = e.target.value;
    const fieldName = e.target.getAttribute("name");
    copyAddJob[fieldName] = fieldValue;
    setAddJob(copyAddJob);
  };

  const handleJobEditFormChange = (e) => {
    e.preventDefault();

    const copyEditJobFormData = { ...editJobFormData };
    const fieldValue = e.target.value;
    const fieldName = e.target.getAttribute("name");
    copyEditJobFormData[fieldName] = fieldValue;
    setEditJobFormData(copyEditJobFormData);
  };

  const handleJobCancelFormChange = (e) => {
    e.preventDefault();
    setEditJobID(null);
  };

  const handleEditSaveButtonClick = (e) => {
    e.preventDefault();
    const jobsCopy = [...jobs];
    const copyEditJobFormData = { ...editJobFormData };
    const IndexPosition = jobsCopy.findIndex(
      (jobsEntry) => jobsEntry.id === copyEditJobFormData.id
    );
    jobsCopy[IndexPosition] = copyEditJobFormData;
    setJobs(jobsCopy);
    setEditJobID(null);
  };

  const handleDeleteJobEntry = (e, job) => {
    if (
      window.confirm(
        `Are you sure you want to delete the following job entry: ${job.company}`
      ) !== true
    ) {
      return;
    }
    const jobsCopy = [...jobs];
    const IndexPosition = jobsCopy.findIndex(
      (jobsEntry) => jobsEntry.id === job.id
    );
    console.log(IndexPosition);
    jobsCopy.splice(IndexPosition, 1);
    setJobs(jobsCopy);
    console.log(jobsCopy);
    console.log(jobs);
  };

  const handleJobFormSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: nanoid(),
      company: addJob.company,
      jobTitle: addJob.jobTitle,
      startDate: addJob.startDate,
      endDate: addJob.endDate,
    };
    const jobsCopy = [...jobs, newJob];
    setJobs(jobsCopy);
  };

  const handleEditButtonClick = (e, job) => {
    e.preventDefault();
    setEditJobID(job.id);

    const formValues = {
      id: job.id,
      company: job.company,
      jobTitle: job.jobTitle,
      startDate: job.startDate,
      endDate: job.endDate,
    };
    setEditJobFormData(formValues);
  };

  return (
    <Fragment>
      <EmploymentAddJob
        handleJobFormSubmit={handleJobFormSubmit}
        handleJobFormDataChange={handleJobFormDataChange}
      />
      <section className="sectionContainer">
        {jobs.map((job) => (
          <div>
            {editJobID === job.id ? (
              <EmploymentEditJob
                job={job}
                handleJobCancelFormChange={handleJobCancelFormChange}
                editJobFormData={editJobFormData}
                handleJobEditFormChange={handleJobEditFormChange}
                handleEditSaveButtonClick={handleEditSaveButtonClick}
              />
            ) : (
              <EmploymentReadOnlyJob
                job={job}
                handleEditButtonClick={handleEditButtonClick}
                handleDeleteJobEntry={handleDeleteJobEntry}
              />
            )}
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Employment;
