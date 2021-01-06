import React from 'react';
import './style.css';

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <section className="col">
          <h1>Contact</h1>
          <form action="mailto:someone@example.com" method="post" enctype="text/plain">
            <label className="contact-label" for="name"> Name:</label><br />
            <input className="contact-input" type="text" name="name" /><br />

            <label className="contact-label" for="mail">E-mail:</label><br />
            <input className="contact-input" type="text" name="mail" /><br />

            <label className="contact-label" for="comment">Comment:</label><br />
            <textarea name="comment" id="contact-textarea" rows="6"></textarea>

            <br /><br />

            <input className="contact-button" type="submit" value="Send" />
            <input className="contact-button" type="reset" value="Reset" />
          </form>
        </section>
      </div>
    </div>
  )
}

export default Contact