import React from 'react';
import { useSpring, animated } from 'react-spring';
import Heading from '../../components/Heading';
import './style.css';

export default function Contact() {

  const animation = useSpring({
    from: {
      transform: `translate(1400px)`,
    },
    to: {
      transform: `translate(0px)`,
    },
    config: {
      tension: 200
    },
    onStart: () => document.body.style.overflow = "hidden",
    onRest: () => document.body.style.overflow = "auto"
  })

  return (
    <div className="container">
      <div className="row">
        <section className="col">
          <Heading>Contact</Heading>
          <animated.form action="mailto:someone@example.com" method="post" encType="text/plain" style={animation}>
            <label className="contact-label name-label" htmlFor="name"> Name:</label><br />
            <input className="contact-input name-input" type="text" name="name" /><br />

            <label className="contact-label email-label" htmlFor="mail">E-mail:</label><br />
            <input className="contact-input email-input" type="text" name="mail" /><br />

            <label className="contact-label comment-label" htmlFor="comment">Comment:</label><br />
            <textarea className="comment-input" name="comment" id="contact-textarea" rows="6"></textarea>

            <br /><br />

            <input className="btn contact-button submit-button" type="submit" value="Send" />
            <input className="btn contact-button reset-button" type="reset" value="Reset" />
          </animated.form>
        </section>
      </div>
    </div>
  )
}
