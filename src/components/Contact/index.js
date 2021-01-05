import React from 'react';
import './style.css';

function Contact() {
  return (
    <div id="contact-container">
      <div className="container">
        <div className="row">
          <section id="contact-section" className="page-section col">
            <a className="target-anchor" name="contact-section-target">&nbsp;</a>
            <h1>Contact</h1>
            <form action="mailto:someone@example.com" method="post" enctype="text/plain">
              <label className="contact-label" for="name"> Name:</label><br />
              <input className="contact-input" type="text" name="name" /><br />

              <label className="contact-label" for="mail">E-mail:</label><br />
              <input className="contact-input" type="text" name="mail" /><br />

              <label className="contact-label" for="comment">Comment:</label><br />
              <textarea name="comment" id="contact-textarea" rows="10"></textarea>

              <br /><br />

              <input className="contact-button" type="submit" value="Send" />
              <input className="contact-button" type="reset" value="Reset" />
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact