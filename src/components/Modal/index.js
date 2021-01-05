import React from 'react';
import './style.css';

function Modal() {
  return (
    // <!-- Modal -->
    < div id="project-modal" className="modal fade" role="dialog" >
      <div className="modal-dialog">

        {/* <!-- Modal content--> */}
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title"></h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">

            <div>
              <img id="modal-image" src="" alt="" />
            </div>

            {/* <!-- Projects -->
                    <!-- A link to the deployed project (where applicable) -->
                    <!-- Multiple images of the project -->
                    <!-- What makes the project interesting technically -->
                    <!-- Brief description of the project -->
                    <!-- A list of languages used in the application --> */}
            <div id="project-description">

            </div>
            {/* // eslint-disable-next-line */}
            <a id="live-link" href="" target="_blank">
              <input className="modal-link-button" type="button" value="View Live Project" />
            </a>
            {/* // eslint-disable-next-line */}
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