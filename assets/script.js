$("#weather-dashboard-button").on("click", loadWeatherDashboardProject);
$("#work-scheduler-button").on("click", loadWorkSchedulerProject);
$("#toby-time-button").on("click", loadTobyTimeProject);
$("#weather-wear-button").on("click", loadWeatherWearProject);

var modalHeader = $(".modal-header");
var modalTitle = $(".modal-title");
var modalBody = $(".modal-body");
var carouselImage1 = $("#carousel-image-1");
var carouselImage2 = $("#carousel-image-2");
var carouselImage3 = $("#carousel-image-3");
var modalFooter = $(".modal-footer");

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
        src: "./assets/screenshots/work-day-scheduler/work-scheduler-items-added - copy.png",
        alt: "work-scheduler-items-added - copy"
    });
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
}