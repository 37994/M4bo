let darkmodeEnabled = localStorage.getItem('darkmode') == 'true';
const root = document.documentElement;
const darkmode = document.getElementById('js--darkmodeButton');

if (darkmode) {
    darkmode.addEventListener("click", function() {
        darkmodeEnabled = !darkmodeEnabled;
        localStorage.setItem('darkmode', darkmodeEnabled);
        root.setAttribute('darkmode', darkmodeEnabled);
    });
}

if (darkmodeEnabled) {
    root.setAttribute('darkmode', true);
}