/* Toggle for darkmode */
var icon = document.getElementById('icon');

icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'resources/lightmode.png';
    } else {
        icon.src = 'resources/darkmode.png';
    }
};

/*background image blurs when you click on search bar on home page */
var backgroundImg = document.querySelector('.logo-welcome-home')
var searchBar = document.getElementById('search-bar-container');
const blurFunction = () => {
    backgroundImg.classList.toggle('search-blur');
} 
searchBar.onclick = blurFunction; 

//Trending cities will animate in from left side (intersection observer)
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







/*

//functionality for higher tier box 
//For the movement to happen

const card = document.querySelector('.card');
const container = document.querySelector('.grid-container');
//Items
const title = document.querySelector('.title');
const city = document.querySelector('.city img')
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes');

//Moving animation event
container.addEventListener('mousemove', (e) => {
    
    //console.log(e.pageX, e.pageY) little trick to see X and Y axis on page when 'mousemove'
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//When we go in container
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //3D effect (popping out)
    title.style.transform = 'translateZ(150px)';
    city.style.transform = 'translateZ(200px)';
    purchase.style.transform = 'translateZ(150px)';
    info.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(150px)';
    
})
//When we go out of container it doesnt snap back to normal it kind of glides to normal for smoother look and feel
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    //Pop back in effect
    title.style.transform = 'translateZ(0px)';
    city.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)'; 
    
}) */


