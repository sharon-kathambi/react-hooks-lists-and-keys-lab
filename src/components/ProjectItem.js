import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <div className="technologies">
      <h3>{name}</h3>
      <p>{about}</p>
      {technologies.map((technology) => {
         return <div key={technology}><span>{technology}</span></div>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
