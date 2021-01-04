import React from 'react'
import './style.css'

function Header() {
  return (
    <header id="home-container">
      <div className="container">
        <div className="row">
          <section id="home-section" className="page-section col">

            <h1>Tom Haigh Portfolio Page</h1>

            <p className="section-statement">
              Full-stack web developer with JavaScript, HTML, CSS, React.js, MySQL, PHP, Web API and responsive web design skills dedicated to making the web a more accessible and user friendly experience. Projects include a Weather Dashboard, a Work Day Scheduler,
              a workout timer and a web app that helps you decide what to wear when heading out.
            </p>
            <div className="home-contact-info">
              <label id="phone-number" className="contact-info">
                Phone: 0406 253 030 ||
              </label>
              <label id="email-address" className="contact-info">
                Email: tmhaigh@gmail.com ||
                </label>
              <label className="contact-info">
                Location: Melbourne, Victoria, Australia
              </label>
            </div>
            <a id="resume-button" href="https://drive.google.com/file/d/1z3gjUkCu5Dn3i_F7ltW7irqJMeowSegt/view?usp=sharing" target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt"></i> Resume
            </a>
            <div id="links-div">
              <a className="links-div-anchor" href="https://www.linkedin.com/in/thomas-haigh-5960b81aa/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin font-awesome social-icon"></i>
              </a>
              <a className="links-div-anchor" href="https://github.com/Conanas" target="_blank" rel="noreferrer">
                <i className="fab fa-github font-awesome social-icon"></i>
              </a>
            </div>

            <a href="#about-section-target">
              <input id="portfolio-button" type="button" value="View my Portfolio" />
            </a>

          </section>
        </div>
      </div>

    </header>
  )
}

export default Header