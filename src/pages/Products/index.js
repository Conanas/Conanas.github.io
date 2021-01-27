import React, { useState } from 'react';
import ProjectsData from '../../assets/data/projects.json';
import Modal from '../../components/Modal/';
import Card from '../../components/Card/';

export default function Products() {
  const [product] = useState(ProjectsData);
  const [currentProduct, setCurrentProduct] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col">
            <h1 className="section-heading">Products</h1>
            <div className="card-deck d-flex flex-lg-row flex-column">
              {product.map((project, index) => {
                return (
                  <Card project={project} index={index} setCurrentProduct={setCurrentProduct}></Card>
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
