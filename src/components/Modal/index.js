import React from 'react';
import './style.css';

function Modal() {
  return (
    < div id="project-modal" className="modal fade" role="dialog" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title"></h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <div>
              <img id="modal-image" src="" alt="" />
            </div>
            <div id="project-description"></div>
            <a id="live-link" href="" target="_blank">
              <input className="modal-link-button" type="button" value="View Live Project" />
            </a>
            <a id="github-link" href="" target="_blank">
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