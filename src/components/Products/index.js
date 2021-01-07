import React, { useState } from 'react';
import "./style.css";
import ProjectsData from '../../assets/data/projects.json';
import Modal from '../Modal/';


export default function Products() {
  const [product, setProduct] = useState(ProjectsData);
  const [currentProduct, setCurrentProduct] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col">
            <h1>Products</h1>
            <div className="card-deck d-flex flex-lg-row flex-column">
              {product.map((project, index) => {
                return (
                  <div className="card" key={index}>
                    <img className="card-img-top" src={project.image} alt={project.name} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.quick_description}</p>
                      <button
                        className="btn"
                        id={`${project.name}-button`}
                        value={index}
                        data-toggle="modal"
                        data-target="#project-modal"
                        onClick={(e) => setCurrentProduct(e.target.value)}
                      >
                        View Project Info
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
      <Modal product={product[currentProduct]} />
    </>
  )
}
