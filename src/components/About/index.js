import React from "react";
import "./style.css";
import portfolioImage from "../../assets/portfolio-img/tom-portfolio-photo.jpg";

function About() {
  return (
    <div id="about-container">
      <div className="container">
        <div className="row">
          <section id="about-section" className="page-section col">
            <a className="about-target-anchor" name="about-section-target">&nbsp;</a>
            <h1>About</h1>
            <div className="row about-main-div">
              <div className="col">
                <img className="float-left" id="about-img" src={portfolioImage} alt="portfolio" />
                <p className="section-statement">
                  Originally from the Peak District National Park in the UK, I came to Australia in 2010 and I became an Australian citizen in 2018. It is in the Peak District I got into rock climbing and I continue to climb because not only do I enjoy moving on rock but
                  because of the similarities rock climbing has with coding. They both require a lot of problem solving and give me great satisfaction when I complete a climb or a project.
                </p>
                <p className="section-statement">
                  I am a resourceful full-stack web developer based in Melbourne, Australia with creative problem solving skills who is an adaptable team player that values effective communication, hard work and self improvement through critical feedback.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About