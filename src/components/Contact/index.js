import React from 'react';
import './style.css';

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <section className="col">
          <h1 className="section-heading">Contact</h1>
          <form action="mailto:someone@example.com" method="post" encType="text/plain">
            <label className="contact-label name-label" htmlFor="name"> Name:</label><br />
            <input className="contact-input name-input" type="text" name="name" /><br />

            <label className="contact-label email-label" htmlFor="mail">E-mail:</label><br />
            <input className="contact-input email-input" type="text" name="mail" /><br />

            <label className="contact-label comment-label" htmlFor="comment">Comment:</label><br />
            <textarea className="comment-input" name="comment" id="contact-textarea" rows="6"></textarea>

            <br /><br />

            <input className="btn contact-button submit-button" type="submit" value="Send" />
            <input className="btn contact-button reset-button" type="reset" value="Reset" />
          </form>
        </section>
      </div>
    </div>
  )
}

export default Contact