import './App.css';
import weatherWearImage from "./assets/screenshots/weather-wear/weather-wear-welcome-screen.png";
import workDaySchedulerImage from "./assets/screenshots/work-day-scheduler/work-scheduler-main.png";
import weatherDashboardImage from "./assets/screenshots/weather-dashboard/weather-dashboard-screenshot.png";
import eatDatBurgerImage from "./assets/screenshots/eat-dat-burger/eat-dat-burger-screenshot.png";
import mealBudgeterImage from "./assets/screenshots/meal-budgeter/meal-budgeter-screenshot.png";
import noteTakerImage from "./assets/screenshots/note-taker/note-taker.png";
import tobyTimeImage from "./assets/screenshots/toby-time/toby-screenshot-main.png";
import portfolioImage from "./assets/portfolio-img/tom-portfolio-photo.jpg"

function App() {
  return (
    <>
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

        <div id="about-container">
          <div className="container">
            <div className="row">
              <section id="about-section" className="page-section col">
                <a className="about-target-anchor" name="about-section-target">&nbsp;</a>
                {/* <!-- About -->
                        <!-- Who am I? -->
                        <!-- List of soft skills that differentiate you from others -->
                        <!-- A link to your resume --> */}
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
                <div>

                </div>
              </section>
            </div>
          </div>
        </div>

        <div id="portfolio-container">
          <div className="container">
            <div className="row">
              <section id="portfolio-section" className="page-section col">
                <a className="target-anchor" name="portfolio-section-target">&nbsp;</a>
                {/* <!-- Portfolio -->
                        <!-- A picture (or even better, a gif) for each project -->
                        <!-- A live link to the project -->
                        <!-- A sub-page with technical details for each project -->
                        <!-- Note: You can also provide high-level information about the project without users having to navigate to a new page. You can use a hovering feature or meaningful caption to accomplish this. --> */}
                <h1>Portfolio</h1>
                <div id="portfolio-div" className="row">

                  {/* <!-- weather dashboard project --> */}
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>Weather Dashboard</h3>
                      <button id="weather-dashboard-button" className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id="weather-dashboard-image" src={weatherDashboardImage} alt="weather-dashboard" />
                    </div>
                  </section>

                  {/* <!-- Eat dat burger project --> */}
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>Eat Dat Burger</h3>
                      <button id="eat-dat-burger-button" className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id="eat-dat-burger-image" src={eatDatBurgerImage} alt="eat-dat-burger" />
                    </div>
                  </section>

                  {/* <!-- Meal Budgeter Project --> */}
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>Meal Budgeter</h3>
                      <button id="meal-budgeter-button" className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id="meal-budgeter-image" src={mealBudgeterImage} alt="meal-budgeter" />
                    </div>
                  </section>

                  {/* <!-- work day scheduler project --> */}
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>Work Day Scheduler</h3>
                      <button id="work-scheduler-button" className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id="work-scheduler-image" src={workDaySchedulerImage} alt="work-day-scheduler" />
                    </div>
                  </section>

                  {/* <!-- note taker project --> */}
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>Note Taker</h3>
                      <button id="note-taker-button" className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id="note-taker-image" src={noteTakerImage} alt="note-taker" />
                    </div>
                  </section>

                  {/* <!-- toby time project --> */}
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>Toby Time</h3>
                      <button id="toby-time-button" className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id="toby-time-image" src={tobyTimeImage} alt="toby-time" />
                    </div>
                  </section>

                  {/* <!-- weatherwear project --> */}
                  <section className="row project-section">
                    <div className="col-md-4 project-section-title">
                      <h3>WeatherWear</h3>
                      <button id="weather-wear-button" className="project-button" data-toggle="modal" data-target="#project-modal">View Project Info</button>
                    </div>
                    <div className="col-md-8 project-section-image">
                      <img className="project-image" id="weather-wear-image" src={weatherWearImage} alt="weather-wear" />
                    </div>
                  </section>

                </div>
              </section>
            </div>
          </div>
        </div>

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

      <footer id="footer-container">
        {/* <!-- Your name -->
        <!-- Basic contact information -->
        <!-- Links to your social media (at least LinkedIn and GitHub) -->
        <!-- Your location (City, State) -->
        <!-- A link to your resume --> */}
        <div>
          <label id="phone-number" className="phone-number">Phone: 0406 253 030 || </label>
          <label id="email-address" className="email-address">Email: tmhaigh@gmail.com || </label>
          <label>Location: Melbourne, Victoria, Australia</label>
        </div>
        <div>
          <a className="links-div-anchor" href="https://www.linkedin.com/in/thomas-haigh-5960b81aa/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin font-awesome social-icon"></i>
          </a>
          <a className="links-div-anchor" href="https://github.com/Conanas" target="_blank" rel="noreferrer">
            <i className="fab fa-github font-awesome social-icon"></i>
          </a>
        </div>
      </footer>

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
