$("#weather-dashboard-button").on("click", loadWeatherDashboardProject);
$("#work-scheduler-button").on("click", loadWorkSchedulerProject);
$("#toby-time-button").on("click", loadTobyTimeProject);
$("#weather-wear-button").on("click", loadWeatherWearProject);

var modalHeader = $(".modal-header");
var modalTitle = $(".modal-title");
var modalImage = $("#modal-image");
var modalBodyText = $("#project-description");
var liveLink = $("#live-link");
var githubLink = $("#github-link");

function loadWeatherDashboardProject() {
    modalTitle.text("Weather Dashboard");
    modalImage.attr({
        src: "./assets/screenshots/weather-dashboard/weather-dashboard-screenshot.png",
        alt: "weather-dashboard-welcome-screen"
    });
    // Projects
    // What makes the project interesting technically
    // Brief description of the project
    // A list of languages used in the application
    modalBodyText.html(`
        <h4>Description</h4>

        <p>
            Planning a round the world trip? Then this web 
            app helps you plan that trip by giving you a 5 
            day forecast of any chosen city on your route. 
            Weather Dashboard will save your chosen cities 
            for your future reference.
        </p>
        <p>
            Weather Dashboard is an excellent example of 
            using third party web API's. The app calls weather
            information from openweathermap.org then using 
            JavaScript and JQuery the returned information 
            is rendered onto a single html page, using css 
            for styling and bootstrap for responsiveness.
        </p>

        <h4>Technologies used</h4>

        <ul>
            <li>html</il>
            <li>css</il>
            <li>Bootstrap</il>
            <li>javaScript</il>
            <li>jQuery</il>
            <li>Third Party Web API</il>
            <ul>
                <li>openweathermap.org</il>
            </ul>
        </ul>

    `);
    liveLink.attr("href", "https://conanas.github.io/weather-dashboard/");
    githubLink.attr("href", "https://github.com/Conanas/weather-dashboard");
}

function loadWorkSchedulerProject() {
    modalTitle.text("Work Day Scheduler");
    modalImage.attr({
        src: "./assets/screenshots/work-day-scheduler/work-scheduler-main.png",
        alt: "work-scheduler-main"
    });
    modalBodyText.html(`
        <h4>Description</h4>

        <p>
            Need to organise your work day? This web app makes 
            planning your work day easy. Start your day with an 
            empty plan, then fill in the time slots with events 
            for the day. Work Day Scheduler will save the events 
            if you need to refresh your browser and helps keep 
            track of the time by changing the colours of the 
            time slots based on the current time of the day.
        </p>
        <p>
            Work Day Scheduler is a fine example of using 
            localStorage to save and retrieve information. 
            Moment.js is utilised to retrieve the current 
            time of day which is then used by the javaScript 
            to render the background colours of the different 
            timeslots. App is fully responsive thanks to bootstrap 
            and the styling on the html is achieved by css.
        </p>

        <h4>Technologies used</h4>

        <ul>
            <li>html</il>
            <li>css</il>
            <li>Bootstrap</il>
            <li>javaScript</il>
            <li>jQuery</il>
            <li>moment.js</il>
        </ul>
    `);
    liveLink.attr("href", "https://conanas.github.io/work-day-scheduler/");
    githubLink.attr("href", "https://github.com/Conanas/work-day-scheduler");
}

function loadTobyTimeProject() {
    modalTitle.text("Toby Time");
    modalImage.attr({
        src: "./assets/screenshots/toby-time/toby-screenshot-main.png",
        alt: "toby-screenshot-main"
    });
    modalBodyText.html(`
        <h4>Description</h4>

        <p>
            Like to workout? Like Cats? Toby Time is a set and 
            rep tracker for your workouts and upon completion 
            you are rewarded with a picture of my cat Toby. 
            Simply enter the reps, rest time, sets and break 
            time and start doing your pressups, pullups or 
            situps etc... You can save your workouts parameters 
            to local storage to be reloaded for future use.
        </p>
        <p>
            Fully responsive with the use of bootstrap, a single 
            html page is styled with CSS and rendered with javaScript 
            and jQuery. Includes the use of sounds to indicate when 
            the rest or break period is about to end.
        </p>

        <h4>Technologies used</h4>

        <ul>
            <li>html</il>
            <li>css</il>
            <li>Bootstrap</il>
            <li>javaScript</il>
            <li>jQuery</il>
        </ul>
    `);
    liveLink.attr("href", "https://conanas.github.io/toby-time/");
    githubLink.attr("href", "https://github.com/Conanas/toby-time");
}

function loadWeatherWearProject() {
    modalTitle.text("Weather Wear");
    modalImage.attr({
        src: "./assets/screenshots/weather-wear/weather-wear-welcom-screen.png",
        alt: "weather-wear-welcom-screen"
    });
    modalBodyText.html(`
        <h4>Description</h4>

        <p>
            WeatherWear is a single paged, fully responsive javaScript 
            and jQuery rendered html web app styled with CSS that aids 
            users plan what to wear depending on the weather forecast 
            for a user selected time range. The user is presented with 
            going out and coming home times that are generated live 
            with the use of moment.js. After the location and times 
            are selected WeatherWear will show the user what they are 
            suggested to wear based on the current temperature, uv 
            index and wind speed.
        </p>
        <p>
            As well as suggesting what users should wear WeatherWear 
            has functionality for users to look up local places to 
            eat whilst they are out. The generated places-to-eat list 
            can be filtered by cuisine type and sorted by rating and 
            by price.
        </p>

        <h4>Technologies used</h4>

        <ul>
            <li>html</il>
            <li>css</il>
            <li>Materialize</il>
            <li>javaScript</il>
            <li>jQuery</il>
            <li>moment.js</il>
            <li>Third Party API's</il>
            <ul>
                <li>weatherbit.io</il>
                <li>zomato.com</il>
            </ul>
        </ul>
    `);
    liveLink.attr("href", "https://lionhatt.github.io/project-WeatherWear/");
    githubLink.attr("href", "https://github.com/lionhatt/project-WeatherWear");
}