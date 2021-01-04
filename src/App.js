import Header from './components/Header/';
import About from './components/About/';
import Footer from './components/Footer/';
import './App.css';
import weatherWearImage from "./assets/screenshots/weather-wear/weather-wear-welcome-screen.png";
import workDaySchedulerImage from "./assets/screenshots/work-day-scheduler/work-scheduler-main.png";
import weatherDashboardImage from "./assets/screenshots/weather-dashboard/weather-dashboard-screenshot.png";
import eatDatBurgerImage from "./assets/screenshots/eat-dat-burger/eat-dat-burger-screenshot.png";
import mealBudgeterImage from "./assets/screenshots/meal-budgeter/meal-budgeter-screenshot.png";
import noteTakerImage from "./assets/screenshots/note-taker/note-taker.png";
import tobyTimeImage from "./assets/screenshots/toby-time/toby-screenshot-main.png";

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
