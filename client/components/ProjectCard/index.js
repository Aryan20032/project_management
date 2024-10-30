import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded border p-4 shadow dark:text-white">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
    </div>
  );
};

export default ProjectCard;
