document.getElementById('menuToggle').addEventListener('change', function () {
    var navContent = document.getElementById('navbarNavAltMarkup');
    if (this.checked) {
        navContent.classList.add('show');
    } else {
        navContent.classList.remove('show');
    }
});

window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.site-content').classList.remove('d-none');
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('mouseenter', function () {
        navbar.classList.add('show-links');
    });

    navbar.addEventListener('mouseleave', function () {
        navbar.classList.remove('show-links');
    });
});

document.getElementById('themeSwitcher').addEventListener('click', function () {
    const body = document.body;

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});
