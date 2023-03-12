const darkModeToggle = () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = '../resources/lightmode.png';
    } else {
        icon.src = '../resources/darkmode.png';
    }
};

const blurFunction = (domElement) => {
    domElement.classList.toggle('search-blur');
}

const resources = {
    darkModeToggle,
    blurFunction
}

export default resources;