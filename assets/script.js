$("#weather-dashboard-button").on("click", loadWeatherDashboardProject);
$("#work-scheduler-button").on("click", loadWorkSchedulerProject);
$("#toby-time-button").on("click", loadTobyTimeProject);
$("#weather-wear-button").on("click", loadWeatherWearProject);

var modalHeader = $(".modal-header");
var modalTitle = $(".modal-title");
var carouselImage1 = $("#carousel-image-1");
var carouselImage2 = $("#carousel-image-2");
var carouselImage3 = $("#carousel-image-3");
var modalBodyText = $(".modal-body p");
var modalFooterLink = $(".modal-footer a");

function loadWeatherDashboardProject() {
    modalTitle.text("Weather Dashboard");
    carouselImage1.attr({
        src: "./assets/screenshots/weather-dashboard/weather-dashboard-welcome-screen.png",
        alt: "weather-dashboard-welcome-screen"
    });
    carouselImage2.attr({
        src: "./assets/screenshots/weather-dashboard/weather-dashboard-sunny-city.png",
        alt: "weather-dashboard-sunny-city"
    });
    carouselImage3.attr({
        src: "./assets/screenshots/weather-dashboard/weather-dashboard-more-cities.png",
        alt: "weather-dashboard-more-cities"
    });
    // Projects
    // What makes the project interesting technically
    // Brief description of the project
    // A list of languages used in the application
    modalBodyText.html(
        "<p>" +

        "Planning a round the world trip? Then this web app helps you plan that trip by giving you a " +
        "5 day forecast of any chosen city on your route. Weather Dashboard will save your chosen cities " +
        "for your future reference." +

        "</p>" +

        "<p>" +

        "Weather Dashboard is an excellent example of using third party web API's. The app calls weather " +
        "information from openweathermap.org then using JavaScript and JQuery the returned information " +
        "is rendered onto a single html page, using css for styling and bootstrap for responsiveness" +

        "</p>" +

        "<h4>Technologies used</h4>" +

        "<ul>" +
        "<li>html</il>" +
        "<li>css</il>" +
        "<li>Bootstrap</il>" +
        "<li>javaScript</il>" +
        "<li>jQuery</il>" +
        "<li>Third Party Web API's</il>" +
        "</ul>"

    );
    modalFooterLink.attr("href", "https://conanas.github.io/weather-dashboard/");
}

function loadWorkSchedulerProject() {
    modalTitle.text("Work Day Scheduler");
    carouselImage1.attr({
        src: "./assets/screenshots/work-day-scheduler/work-scheduler-main.png",
        alt: "work-scheduler-main"
    });
    carouselImage2.attr({
        src: "./assets/screenshots/work-day-scheduler/work-scheduler-items-added.png",
        alt: "work-scheduler-items-added"
    });
    carouselImage3.attr({
        src: "./assets/screenshots/work-day-scheduler/work-scheduler-change-time.png",
        alt: "work-scheduler-items-added - copy"
    });
    modalBodyText.html(
        "<p>" +

        "Need to organise your work day? This web app makes planning your work day easy. Start your day with an empty " +
        "plan, then fill in the time slots with events for the day. Work Day Scheduler will save the events if you need to refresh " +
        "your browser and helps keep track of the time by changing the colours of the time slots based on the current time of the day." +

        "</p>" +
        "<p>" +

        "Work Day Scheduler is a fine example of using localStorage to save and retrieve information. Moment.js is utilised to " +
        "retrieve the current time of day which is then used by the javaScript to render the background colours of the different " +
        "timeslots. App is fully responsive thanks to bootstrap and the styling on the html is achieved by css." +

        "</p>" +

        "<h4>Technologies used</h4>" +

        "<ul>" +
        "<li>html</il>" +
        "<li>css</il>" +
        "<li>Bootstrap</il>" +
        "<li>javaScript</il>" +
        "<li>jQuery</il>" +
        "<li>moment.js</il>" +
        "</ul>"
    );
    modalFooterLink.attr("href", "https://conanas.github.io/work-day-scheduler/");
}

function loadTobyTimeProject() {
    modalTitle.text("Toby Time");
    carouselImage1.attr({
        src: "./assets/screenshots/toby-time/toby-screenshot-main.png",
        alt: "toby-screenshot-main"
    });
    carouselImage2.attr({
        src: "./assets/screenshots/toby-time/toby-screenshot-countdown.png",
        alt: "toby-screenshot-countdown"
    });
    carouselImage3.attr({
        src: "./assets/screenshots/toby-time/toby-screenshots-face.png",
        alt: "toby-screenshots-face"
    });
    modalBodyText.html(
        "<p>" +

        "" +

        "</p>" +
        "<p>" +

        "" +

        "</p>" +

        "<h4>Technologies used</h4>" +

        "<ul>" +
        "<li>html</il>" +
        "<li>css</il>" +
        "<li>Bootstrap</il>" +
        "<li>javaScript</il>" +
        "<li>jQuery</il>" +
        "</ul>"
    );
    modalFooterLink.attr("href", "https://conanas.github.io/toby-time/");
}

function loadWeatherWearProject() {
    modalTitle.text("Weather Wear");
    carouselImage1.attr({
        src: "./assets/screenshots/weather-wear/weather-wear-welcom-screen.png",
        alt: "weather-wear-welcom-screen"
    });
    carouselImage2.attr({
        src: "./assets/screenshots/weather-wear/weather-wear-welcom-screen.png",
        alt: "weather-wear-welcom-screen"
    });
    carouselImage3.attr({
        src: "./assets/screenshots/weather-wear/weather-wear-welcom-screen.png",
        alt: "weather-wear-welcom-screen"
    });
    modalBodyText.html(
        "<p>" +

        "" +

        "</p>" +
        "<p>" +

        "" +

        "</p>" +

        "<h4>Technologies used</h4>" +

        "<ul>" +
        "<li>html</il>" +
        "<li>css</il>" +
        "<li>Bootstrap</il>" +
        "<li>javaScript</il>" +
        "<li>jQuery</il>" +
        "<li>moment.js</il>" +
        "</ul>"
    );
    modalFooterLink.attr("href", "https://lionhatt.github.io/project-WeatherWear/");
}