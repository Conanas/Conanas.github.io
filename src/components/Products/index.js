import React from 'react';
import "./style.css";
import ProjectsData from '../../assets/data/projects.json';


export default function Products() {
  return (
    <div className="container">
      <div className="row">
        <section className="col">
          <h1>Products</h1>
          <div className="card-deck d-flex flex-lg-row flex-column">
            {ProjectsData.map(project => {
              return (
                <div className="card">
                  <img className="card-img-top" src={project.image} alt={project.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.quick_description}</p>
                    <button className="btn" id={`${project.name}-button`} data-toggle="modal" data-target="#project-modal">View Project Info</button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
