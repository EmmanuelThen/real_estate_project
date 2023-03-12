import domActivities from "../modules/dom-functions.js";
const { darkModeToggle, blurFunction } = domActivities;

/* Toggle for darkmode */
const icon = document.getElementById('icon');
icon.onclick = darkModeToggle;

/*background image blurs when you click on search bar on home page */
const backgroundImg = document.querySelector('.logo-welcome-home');
const searchBar = document.getElementById('search-bar');
searchBar.onclick = () => {
    blurFunction(backgroundImg);
};

//animate in from left side (intersection observer)
//This is a class that takes a callback function as its constructor, this is our boiler plate for our observer now we just have to tell it what to observe 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); //this is to animate every single time not only once
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden'); // Grabbing all elements with 'hidden' class 
hiddenElements.forEach((element) => observer.observe(element)); //Telling observer to observe each hidden element



