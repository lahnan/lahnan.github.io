const body = document.body;
const nav = document.querySelector("nav");
const cta = document.getElementById("cta");
const contact = document.getElementById("contact");
const project = document.getElementById("project");

const repoList = document.getElementById("repoList")
const getData = document.getElementById("getData")
const modeIconN = document.getElementById("modeIconN")
const modeIconP = document.getElementById("modeIconP")

const responsiveNav = document.querySelector(".nav-responsive")

const showNavIcon = document.getElementById("showNavIcon")

mode = localStorage.getItem("mode") || "day";

let responsiveNavShow = "False"

if (mode == "day") {
    modeIconN.className = "bi bi-moon"
    modeIconP.className = "bi bi-moon"
} else {
    modeIconN.className = "bi bi-sun"
    modeIconP.className = "bi bi-sun"

}

cta.dataset.mode = mode;
contact.dataset.mode = mode;
project.dataset.mode = mode;
body.dataset.mode = mode;
nav.dataset.mode = mode;

function changeMode() {
    if (mode == "day") {
        cta.dataset.mode = "night";
        contact.dataset.mode = "night";
        project.dataset.mode = "night";
        body.dataset.mode = "night";
        nav.dataset.mode = "night";
        modeIconN.className = "bi bi-sun"
        modeIconP.className = "bi bi-sun"
        mode = "night"
        localStorage.clear();
        localStorage.setItem("mode", "night");
    } else {
        cta.dataset.mode = "day";
        contact.dataset.mode = "day";
        project.dataset.mode = "day";
        body.dataset.mode = "day";
        nav.dataset.mode = "day";
        modeIconN.className = "bi bi-moon"
        modeIconP.className = "bi bi-moon"
        mode = "day"
        localStorage.clear();
        localStorage.setItem("mode", "day");
    }
}

function getRepo() {

    getData.innerText = "Reading HDD"
    const repoUrl = document.createElement("a")
            repoUrl.innerText = "Testing 123"
            repoUrl.href = "#"
            repoUrl.style.color = "#0f0"
            repoUrl.style.flex = "0"
            repoUrl.className = "repoUrl"
            getData.appendChild(repoUrl);

    const URL = `https://api.github.com/users/lahnan/repos`

    fetch(URL)
    .then(response => response.json())
    .then(result => {
        const apiData = result.length;

        getData.innerText = result.length + " Folder"
        
        for (let loopApi = 0; loopApi < apiData; loopApi++) {
            
            const repo = document.createElement("li")
            repo.className = "repo"
            repoList.appendChild(repo);
            
            const repoName = document.createElement("span")
            repoName.innerText = "/project/" + result[loopApi].name
            repoName.className = "repo"
            repo.appendChild(repoName);
            
            const repoUrl = document.createElement("a")
            repoUrl.innerText = "Open"
            repoUrl.href = result[loopApi].html_url
            repoUrl.style.color = "#0f0"
            repoUrl.className = "repoUrl"
            repo.appendChild(repoUrl);

            console.log(result[loopApi].name)
            
            // const repoOwner = document.createElement("p")
            // repoOwner.innerText = result[loopApi].owner.login
            // repoOwner.style.margin = "20px"
            // repoOwner.style.flex = "0"
            // repo.appendChild(repoOwner);

        }
    }).catch(err => {
        return err
    });
}



function showNav() {
    if (responsiveNavShow == "False") {
        responsiveNav.style.display = "flex";
        responsiveNavShow = "True"
        showNavIcon.className = "bi bi-x-circle"
    } else if(responsiveNavShow == "True") {
        responsiveNav.style.display = "none" ;
        responsiveNavShow = "False"
        showNavIcon.className = "bi <bi-list></bi-list>"
    }

}

window.onload = () => {
    getRepo()
}
