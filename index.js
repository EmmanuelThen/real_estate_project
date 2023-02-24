/* Toggle for darkmode */
var icon = document.getElementById('icon');
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "resources/lightmode.png";
    } else {
        icon.src = "resources/darkmode.png";
    }
}

