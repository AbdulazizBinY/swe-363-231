// Toggle the navigation menu visibility
document.getElementById('menuToggle').addEventListener('change', function () {
    const navContent = document.getElementById('navbarNavAltMarkup');
    toggleMenuVisibility(navContent);
});

const toggleMenuVisibility = (navContent) => {
    if (navContent.classList.contains('show')) {
        navContent.classList.remove('show');
    } else {
        navContent.classList.add('show');
    }
};

// Show the site content and hide the loader on window load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.site-content').classList.remove('d-none');
    }, 2000);
});

// Handle hover events for the navbar and the hamburger icon
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('mouseenter', () => navbar.classList.add('show-links'));
    navbar.addEventListener('mouseleave', () => navbar.classList.remove('show-links'));
});

document.getElementById('themeSwitcher').addEventListener('click', () => {
    toggleTheme(document.body);
});

const toggleTheme = (bodyElement) => {
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.replace('light-theme', 'dark-theme');
    } else {
        bodyElement.classList.replace('dark-theme', 'light-theme');
    }
};



const hobbies = [
    {
        hobby: "Swimming",
        rank: "#1",
        when: "Twice a week",
        why: "It stretches my body and gives me energy."
    },
    {
        hobby: "Playing",
        rank: "#2",
        when: "Over the weekend",
        why: "I like to spend my free time playing video games."
    },
    {
        hobby: "Reading",
        rank: "#3",
        when: "Three times a week",
        why: "Reading books helps me learn new information."
    }
];

const projects = [
    {
        title: "KFUPMSOC",
        link: "https://github.com/mostafaSWE/KFUPMSOC",
        subtitle: "Database project",
        description: "In this project, we design a website that can manage and record football matches with an organized database system."
    },
    {
        title: "SWE326",
        subtitle: "Software testing",
        description: "In this project, we were asked to test a new system for KFUPM faculty and try to find the bugs."
    }
];


// Dynamically add projects to the page
function populateProjects() {
    const projectContainer = document.getElementById("details");
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'border p-3 mb-3';

        const projectLegend = document.createElement('legend');
        if (project.link) {
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.className = 'projects';
            projectLink.textContent = project.title;
            projectLegend.appendChild(projectLink);
        } else {
            projectLegend.textContent = project.title;
        }
        projectLegend.innerHTML += `: <em>${project.subtitle}</em>`;
        projectDiv.appendChild(projectLegend);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);

        projectContainer.appendChild(projectDiv);
    });
}

// Dynamically add hobbies to the page
function populateHobbies() {
    const hobbyTableBody = document.querySelector("table.table tbody");
    hobbies.forEach(hobby => {
        const hobbyRow = document.createElement('tr');

        const hobbyName = document.createElement('td');
        hobbyName.textContent = hobby.hobby;
        hobbyRow.appendChild(hobbyName);

        const hobbyRank = document.createElement('td');
        hobbyRank.textContent = hobby.rank;
        hobbyRow.appendChild(hobbyRank);

        const hobbyWhen = document.createElement('td');
        hobbyWhen.textContent = hobby.when;
        hobbyRow.appendChild(hobbyWhen);

        const hobbyWhy = document.createElement('td');
        hobbyWhy.textContent = hobby.why;
        hobbyRow.appendChild(hobbyWhy);

        hobbyTableBody.appendChild(hobbyRow);
    });
}

// Call the functions to populate data
populateProjects();
populateHobbies();


// JavaScript for signature canvas
let canvas = document.getElementById('signatureCanvas');
let ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});

function draw(event) {
    if (!isDrawing) return;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Screensaver Logic
const screensaverDiv = document.getElementById('screensaver');

// Three.js setup for the screensaver (using a rotating torus as an example)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
screensaverDiv.appendChild(renderer.domElement);
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
camera.position.z = 30;
function animateScreensaver() {
    requestAnimationFrame(animateScreensaver);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// User inactivity detection
let inactivityTimer;
function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showScreensaver, 60000); // 1 minute
}

function showScreensaver() {
    document.getElementById('screensaver').style.display = 'block';
    animateScreensaver();
}

// Add the event listeners to reset the inactivity timer
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('scroll', resetTimer);
resetTimer();  // Start the timer for the first time