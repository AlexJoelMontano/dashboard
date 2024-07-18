let projContainer = document.querySelector("#projects");

projects = [["Custom color palatte","We are thinking about creating a new theme and color palatte for our website to improve clarity and brand adhesion."],["New photos needed","Currently we need to work on a project to invest in acquiring higher quality photos to edit"],["Newly added SVG Icons","We have been working steady and hard in building a new library of custom svg icons for the website"],["Fixing UI and add space","Currently the website is flooded with ads and we need to refresh their current locations and how they affect user experience"],["Preparing for new product launch","Subject matter expert training required to allow equal growth as a team dynamic on the new product."],["Bug IOS-420","Working on fixing the new iPhone bug in our website that slows down interaction and user experience."],["Lets get Hired","Thank you for review my project hopefully someday this could help me get a job and I appreciate you actually reading this far!"]];
buttonLogos = ["./img/star-plus-outline.svg","./img/eye-plus-outline.svg","./img/export-variant.svg"]
let x = 0
let y = 1

let profileNames = document.querySelectorAll(".profileName");
let usernames = document.querySelectorAll(".username");

for (let name of profileNames){
    name.textContent = "Kassidy Montano";
}

for (let user of usernames){
    user.textContent = "@kassyj13";
}

for (let i = 0; i < projects.length; i++){
    let projTitle = document.createElement("h6");
    projTitle.textContent= projects[i][x];
    projTitle.style.marginTop = "6%"
    projTitle.style.fontWeight = 600;
    projTitle.style.fontSize = "calc(0.66rem + 0.7vw)";

    let projContent = document.createElement("p");
    projContent.style.fontSize = "calc(0.5rem + 0.5vw)";
    projContent.textContent = projects[i][y];

    let btnContainer = document.createElement("div");
    btnContainer.className = "proj-buttons";

    let bar = document.createElement("div");
    bar.className = "bar";
    for(let logo of buttonLogos){
        let button = document.createElement("div");
        button.className = "cardButton"
        let btnLogo = document.createElement("img");
        btnLogo.src = logo;
        btnLogo.style.height = "26px";
        btnLogo.style.width = "26px";
        btnLogo.className = "btn-logo img-fluid";
        button.appendChild(btnLogo);
        btnContainer.appendChild(button);
    }

    let projectCard =document.createElement("div");
    projectCard.className = "cardStyle";
    projectCard.appendChild(bar);
    projectCard.appendChild(projTitle);
    projectCard.appendChild(projContent);
    projectCard.appendChild(btnContainer);
    projContainer.appendChild(projectCard);
}
let annouceContainer = document.querySelector("#annoucements");

annoucements = [["Site Maintenance","Hello everyone, we are going to have a site outage from 3am-4am EST."],["New Launch this month","We will have the new product launch later this month be on the lookout for needed changes."],["New training ","There is new mandated training due this month make sure you are on the look out for the email."]];

for (let i = 0; i < annoucements.length; i++){
    let annouceTitle = document.createElement("h6");
    annouceTitle.textContent = annoucements[i][x];
    annouceTitle.style.fontWeight = "600";
    let annouceContent = document.createElement("p");
    annouceContent.textContent = annoucements[i][y];
    let annoucement = document.createElement("div");
    annoucement.className = "annoucement";
    annoucement.appendChild(annouceTitle);
    annoucement.appendChild(annouceContent);
    annouceContainer.appendChild(annoucement);
}

let trendContainer = document.querySelector("#trending");

profilePics = {"kassyj13":"./img/black-cat.jpg","alexthegreat":"./img/vw-gti.jpg","blueturbo11":"./img/rally-GTI.jpg", "elliebell02":"./img/unicorn.jpg"};

profiles = ["kassyj13","alexthegreat","blueturbo11","elliebell02"];

for (let profile of profiles){
    let usrCard = document.createElement("div");
    let usrName = document.createElement("h6");
    let profilePhoto = document.createElement("img");
    usrName.textContent = `@${profile}`;
    usrName.style.alignContent = "center"
    profilePhoto.src = profilePics[profile];
    profilePhoto.style.height = "50px";
    profilePhoto.style.width = "50px";
    profilePhoto.style.borderRadius = "100%";
    usrCard.className = "trendCard";
    usrCard.appendChild(profilePhoto);
    usrCard.appendChild(usrName);
    trendContainer.appendChild(usrCard);

}

