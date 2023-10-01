let brideSection = document.getElementById('bride');
let brideBtn = document.getElementById('brideBtn');
let home = document.getElementById('home');
let groomSection = document.getElementById('groom');
let groomBtn = document.getElementById('groomBtn');

brideBtn.onclick = function () {
    brideSection.classList.remove('d-none');
    home.classList.add('d-none');
}
groomBtn.onclick = function () {
    groomSection.classList.remove('d-none');
    home.classList.add('d-none');
    brideSection.classList.add('d-none');
}

let celebrateBtn = document.getElementById('celebrate');
let homePage = document.getElementById('pageHome');

celebrateBtn.onclick = function () {
    homePage.classList.add('bg1');
    setTimeout(function () {
        homePage.classList.remove('bg1');
    }, 5000);
}
