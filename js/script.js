const darkmode = document.getElementById('js--darkmodeButton');
let darkmodeEnabled = false;

darkmode.addEventListener("click", function() {
    darkmodeEnabled = !darkmodeEnabled;
    document.documentElement.setAttribute('darkmode', darkmodeEnabled);
});
