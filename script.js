let projContainer = document.querySelector("#projects");

projects = [["Project 1","Thank you for kassidy for believing in me"],["Project 2","She is amazing and I know its hard to do this"],["Project 3","I love her and she supports me so much."],["Project 4","Once I finaly get this new job I am going to spoil her."],["Project 5","Kassidy Seriously thank you for everything you have done!"],["Project 6","I have the best wife and the bestest friend anyone else could have asked for"]];
let x = 0
let y = 1
for (let i = 0; i < projects.length; i++){
    let projTitle = document.createElement("h6");
    projTitle.textContent= projects[i][x];
    let projContent = document.createElement("p");
    projContent.textContent = projects[i][y];
    let projectCard =document.createElement("div");
    projectCard.className = "cardStyle";
    projectCard.appendChild(projTitle);
    projectCard.appendChild(projContent);
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