function toggleButton(button) {
  // Remove the 'active' class from all buttons
  document.querySelectorAll(".btn-primary").forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Add the 'active' class to the clicked button
  btn.classList.add("active");
}
const collab1 = document.querySelector("._collab1");
const collab2 = document.querySelector("._collab2");
const collab0 = document.querySelector("._collab0");
const collabcont0 = document.querySelector(".collab-container0");
const collabcont1 = document.querySelector(".collab-container1");
const collabcont2 = document.querySelector(".collab-container2");


collab0.addEventListener("click", () => {
  collab0.classList.add("collab-active");
  collab1.classList.remove("collab-active");
  collab2.classList.remove("collab-active");
  collabcont0.style.display = "flex";
  collabcont1.style.display = "none";
  collabcont2.style.display = "none";
});
collab1.addEventListener("click", () => {
  collab0.classList.remove("collab-active");
  collab1.classList.add("collab-active");
  collab2.classList.remove("collab-active");
  collabcont1.style.display = "flex";
  collabcont2.style.display = "none";
  collabcont0.style.display = "none";
});
collab2.addEventListener("click", () => {
  collab0.classList.remove("collab-active");
  collab1.classList.remove("collab-active");
  collab2.classList.add("collab-active");
  collabcont0.style.display = "none";
  collabcont1.style.display = "none";
  collabcont2.style.display = "flex";
});

//Settings
document.addEventListener("DOMContentLoaded", function () {
  const settingsButton = document.querySelector(".settings");
  const popupContainer = document.getElementById("popup-container");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("close-popup");
  const dropdownList = document.querySelector('.list');

    settingsButton.addEventListener('click', function() {
        if (dropdownList.style.display === 'block') {
          dropdownList.style.display = 'none';
        } else {
          dropdownList.style.display = 'block';
        }
      });

  // settingsButton.addEventListener("click", function () {
  //   popupContainer.style.display = "flex";
  //   setTimeout(function () {
  //     popup.style.transform = "scale(1)";
  //     popup.style.opacity = "1";
  //   }, 100);
  // });

  closeButton.addEventListener("click", function () {
    popup.style.transform = "scale(0.5)";
    popup.style.opacity = "0";
    setTimeout(function () {
      popupContainer.style.display = "none";
    }, 300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("create-new"); // Changed the selector to match the ID in the HTML
  const popupForm = document.getElementById("colab-form");
  const workup = document.getElementById("colabup");
  const closeButton = document.getElementById("closec-icon");

  button.addEventListener("click", function () {
    // Changed the event to 'click' to listen for button clicks
    popupForm.style.display = "flex";
    setTimeout(function () {
      workup.style.transform = "scale(1)";
      workup.style.opacity = "1";
    }, 100);
  });

  closeButton.addEventListener("click", function () {
    workup.style.transform = "scale(0.5)";
    workup.style.opacity = "0";
    setTimeout(function () {
      popupForm.style.display = "none";
    }, 300);
  });
});

addEventListener("load", async function (event) {
  const response1 = await fetch("http://localhost:5000/api/get-all-posts");
  let postProject = await response1.json();
  
  const response2 = await fetch("http://localhost:5000/api/get-my-posts");
  let recieveRequests = await response2.json();

  const response3 = await fetch("http://localhost:5000/api/get-my-requests");
  let myRequests = await response3.json();

  for (let i of postProject.postsNoRequests) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);

    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");

    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.projectName;
    infoContainer.appendChild(title);

    // Details
    let details = document.createElement("h6");
    details.innerText = i.description;
    infoContainer.appendChild(details);

    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    // Button
    let button = document.createElement("button");
    button.id = i._id;
    button.classList.add("btn");
    button.classList.add("btna");
    button.textContent = "Request";
    btnContainer.appendChild(button);
    infoContainer.appendChild(btnContainer);

    card.appendChild(infoContainer);
    document.getElementById("collab-container-send").appendChild(card);
  }

  
  for (let i of postProject.postsRequests) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);

    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");

    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.projectName;
    infoContainer.appendChild(title);

    // Details
    let details = document.createElement("h6");
    details.innerText = i.description;
    infoContainer.appendChild(details);

    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    // Button
    let button = document.createElement("button");
    button.id = i._id;
    button.classList.add("btn-unresponsive");
    // button.classList.add("btna");
    button.textContent = "Requested";
    btnContainer.appendChild(button);
    infoContainer.appendChild(btnContainer);

    card.appendChild(infoContainer);
    document.getElementById("collab-container-send").appendChild(card);
  }

  for (let x of recieveRequests.requestsPending) {
    let i = x.project;
    let u = x.user;

    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);

    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");

    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.projectName;
    infoContainer.appendChild(title);

    // User Name
    let user = document.createElement("h3");
    user.innerText = "Requested By : " + u.fullname;
    infoContainer.appendChild(user);

    // Details
    let details = document.createElement("h6");
    details.innerText = i.description;
    infoContainer.appendChild(details);

    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    // Button
    let buttonA = document.createElement("button");
    buttonA.setAttribute("project", i._id);
    buttonA.setAttribute("user", u._id);
    buttonA.classList.add("btn");
    buttonA.classList.add("btnb");
    buttonA.textContent = "Accept";
    let buttonD = document.createElement("button");
    buttonD.setAttribute("project", i._id);
    buttonD.setAttribute("user", u._id);
    buttonD.classList.add("btn");
    buttonD.classList.add("btnb");
    buttonD.textContent = "Decline";
    btnContainer.appendChild(buttonA);
    btnContainer.appendChild(buttonD);
    infoContainer.appendChild(btnContainer);

    card.appendChild(infoContainer);
    document.getElementById("collab-container-receive").appendChild(card);
  }

  for (let x of recieveRequests.requestsNotPending) {
    let i = x.project;
    let u = x.user;

    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);

    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");

    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.projectName;
    infoContainer.appendChild(title);

    // User Name
    let user = document.createElement("h3");
    user.innerText = "Requested By : " + u.fullname;
    infoContainer.appendChild(user);

    // Details
    let details = document.createElement("h6");
    details.innerText = i.description;
    infoContainer.appendChild(details);

    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    // Button
    let buttonA = document.createElement("button");
    buttonA.setAttribute("project", i._id);
    buttonA.setAttribute("user", u._id);
    buttonA.classList.add("btn-unresponsive");
    // buttonA.classList.add("btnb");
    buttonA.textContent = "Accepted/Rejected";
    // let buttonD = document.createElement("button");
    // buttonD.setAttribute("project", i._id);
    // buttonD.setAttribute("user", u._id);
    // buttonD.classList.add("btn");
    // buttonD.classList.add("btnb");
    // buttonD.textContent = "Decline";
    btnContainer.appendChild(buttonA);
    // btnContainer.appendChild(buttonD);
    infoContainer.appendChild(btnContainer);

    card.appendChild(infoContainer);
    document.getElementById("collab-container-receive").appendChild(card);
  }
  for (let x of myRequests) {
    let i = x.project;

    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);

    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");

    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.projectName;
    infoContainer.appendChild(title);

    // Details
    let details = document.createElement("h6");
    details.innerText = i.description;
    infoContainer.appendChild(details);

    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);

    let status = document.createElement("span");
    status.innerText = "Status - [ " + x.status + " ]";
    infoContainer.appendChild(status);

    card.appendChild(infoContainer);
    document.getElementById("collab-container-status").appendChild(card);
  }

  if (
    postProject.postsNoRequests.length === 0 &&
    postProject.postsRequests.length === 0
  ) {
    let noRequestsText = document.createElement("p");
    noRequestsText.innerText = "Sorry, There Are No New Collab Listings";
    document
      .getElementById("collab-container-send")
      .appendChild(noRequestsText);
  }

  if (recieveRequests.requestsPending.length === 0 &&
    recieveRequests.requestsNotPending.length === 0
  ) {
    let noRequestsText = document.createElement("p");
    noRequestsText.innerText = "You Have Not Received Any Collab Requests";
    document
      .getElementById("collab-container-receive")
      .appendChild(noRequestsText);
  }

  if (myRequests.length === 0) {
    let noRequestsText = document.createElement("p");
    noRequestsText.innerText = "You Have Not Sent Any Collab Requests";
    document
      .getElementById("collab-container-status")
      .appendChild(noRequestsText);
  }

  let buttons = document.querySelectorAll(".btna");
  let buttonsAD = document.querySelectorAll(".btnb");

  buttons.forEach((button) => {
    button.addEventListener("click", async function () {
      let projectId = button.id;

      let response = await fetch("http://localhost:5000/api/collab-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId }),
      });
      let data = await response.json();
      console.log(data);
    });
  });

  buttonsAD.forEach((button) => {
    button.addEventListener("click", async function () {
      let projectId = button.getAttribute("project");
      let userId = button.getAttribute("user");
      let status = button.textContent === "Accept" ? "Accepted" : "Rejected";

      console.log(projectId, userId, status);
      let response = await fetch("http://localhost:5000/api/handle-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId, userId, status }),
      });
      let data = await response.json();
      console.log(data);
    });
  });
});
document.addEventListener('DOMContentLoaded',function(){
  const logoutButton = document.querySelector('.logoutbutton');
  const popupContainer = document.getElementById('popup-container');
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('close-popup');

  logoutButton.addEventListener('click', function() {
      popupContainer.style.display = 'flex';
      setTimeout(function() {
          popup.style.transform = 'scale(1)';
          popup.style.opacity = '1';
      }, 100);
  });

  closePopupButton.addEventListener('click', function() {
      popup.style.transform = 'scale(0.5)';
      popup.style.opacity = '0';
      setTimeout(function() {
          popupContainer.style.display = 'none';
      }, 300);
  });
})
document.addEventListener('DOMContentLoaded',function(){
  const deleteButton = document.querySelector('.deleteacc');
  const popupContainer = document.getElementById('delete-popup-container');
  const popup = document.getElementById('delete-popup');
  const closePopupButton = document.getElementById('close-delete-popup');

  deleteButton.addEventListener('click', function() {
      popupContainer.style.display = 'flex';
      setTimeout(function() {
          popup.style.transform = 'scale(1)';
          popup.style.opacity = '1';
      }, 100);
  });

  closePopupButton.addEventListener('click', function() {
      popup.style.transform = 'scale(0.5)';
      popup.style.opacity = '0';
      setTimeout(function() {
          popupContainer.style.display = 'none';
      }, 300);
  });
})
