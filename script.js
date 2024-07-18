let projContainer = document.querySelector("#projects");

projects = [["Project 1","Thank you for kassidy for believing in me"],["Project 2","She is amazing and I know its hard to do this"],["Project 3","I love her and she supports me so much."],["Project 4","Once I finaly get this new job I am going to spoil her."],["Project 5","Kassidy Seriously thank you for everything you have done!"],["Project 6","I have the best wife and the bestest friend anyone else could have asked for"],["Project 7","I will be a web developer for my family and for my future"]];
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

    let projContent = document.createElement("p");
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

trending = [""]