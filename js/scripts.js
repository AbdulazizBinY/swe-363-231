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

document.getElementById('changeTheme').addEventListener('click', function () {
    var stylesheet = document.getElementById('stylesheet');

    if (stylesheet.getAttribute('href') == 'dark.css') {
        stylesheet.setAttribute('href', 'light.css');
    } else {
        stylesheet.setAttribute('href', 'dark.css');
    }
});