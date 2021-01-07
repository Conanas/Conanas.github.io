import React from 'react';
import './style.css';

function Modal({ product }) {
  return (
    < div id="project-modal" className="modal fade" role="dialog" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{product.title}</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <div>
              <img id="modal-image" src={product.image} alt={product.name} />
            </div>
            <div id="project-description">
              <h4>Description</h4>
              {product.description.map((item, index) => {
                return (
                  <p key={index}>{item}</p>
                )
              })}
              <h4>Technologies used</h4>
              <ul>
                {product.technologies.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            </div>
            <a href={product.live_link} target="_blank" rel="noreferrer">
              <input className="modal-link-button" type="button" value="View Live Project" />
            </a>
            <a href={product.github_repo} target="_blank" rel="noreferrer">
              <input className="modal-link-button" type="button" value="View GitHub Repository" />
            </a>
          </div>
          <div className="modal-footer">
            <button type="button" id="modal-close-button" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal;