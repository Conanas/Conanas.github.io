import React from 'react';
import "./style.css";
import ProjectsData from '../../assets/data/projects.json';


function Projects() {
  return (
    <div id="portfolio-container">
      <div className="container">
        <div className="row">
          <section id="portfolio-section" className="page-section col">
            <a className="target-anchor" name="portfolio-section-target">&nbsp;</a>
            <h1>Portfolio</h1>
            <div id="portfolio-div" className="row">
              {ProjectsData.map(project => {
                return (
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>{project.title}</h3>
                      <button id={`${project.name}-button`} className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id={`${project.name}-image`} src={project.image} alt={project.name} />
                    </div>
                  </section>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Projects