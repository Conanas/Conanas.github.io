import Header from './components/Header/';
import About from './components/About/';
import Projects from './components/Projects/';
import Footer from './components/Footer/';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <nav className="navbar sticky-top navbar-expand bg-dark navbar-dark">

        {/* Toggler/collapsible Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar links --> */}
        <div className="container collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home-section">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-section-target">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio-section-target">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section-target">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>

        <About />
        <Projects />

        <div id="contact-container">
          <div className="container">
            <div className="row">
              <section id="contact-section" className="page-section col">
                <a className="target-anchor" name="contact-section-target">&nbsp;</a>
                {/* <!-- Contact --> */}
                {/* <!-- Set up email messaging form --> */}
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

      </main>

      <Footer />

      {/* <!-- Modal --> */}
      <div id="project-modal" className="modal fade" role="dialog">
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
      </div>
    </>
  );
}

export default App;
