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
