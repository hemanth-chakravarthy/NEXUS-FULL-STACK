document.addEventListener('DOMContentLoaded', function() {
  const settingsButton = document.querySelector('.settings');
  const popupContainer = document.getElementById('popup-container');
  const popup = document.getElementById('popup');
  const closeButton = document.getElementById('close-popup');
  const dropdownList = document.querySelector('.list');

    settingsButton.addEventListener('click', function() {
        if (dropdownList.style.display === 'block') {
          dropdownList.style.display = 'none';
        } else {
          dropdownList.style.display = 'block';
        }
      });

  // settingsButton.addEventListener('click', function() {
  //     popupContainer.style.display = 'flex';
  //     setTimeout(function() {
  //         popup.style.transform = 'scale(1)';
  //         popup.style.opacity = '1';
  //     }, 100);
  // });

  closeButton.addEventListener('click', function() {
      popup.style.transform = 'scale(0.5)';
      popup.style.opacity = '0';
      setTimeout(function() {
          popupContainer.style.display = 'none';
      }, 300);
  });
});
let profiles = {
data: [
  {
    studentName: "Nandhitha",
    category: "Data-Science",
    details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
    image: "./assets/profile-pic3.png",
    isSaved: false,
    isHired: false,
  },
  {
    studentName: "Hemanth",
    category: "Graphic-Design",
    details: "Skilled UI/UX designer with a strong understanding of user-centered design principles. Proficient in wireframing, prototyping. ",
    image: "./assets/profile-pic2.png",
    isSaved: false,
    isHired: false,
  },
  {
    studentName: "Shrishti",
    category: "Business",
    details: "Results-oriented business development manager with a proven track record of driving revenue growth and expanding market reach.",
    image: "./assets/profile-pic4.png",
    isSaved: false,
    isHired: false,
  },
  {
    studentName: "Ananya",
    category: "Architecture",
    details: "Innovative architectural designer with a passion for sustainable design and urban revitalization. Proficient in CAD software and skilled in creating aesthetically pleasing and functional designs. ",
    image: "./assets/profile-pic6.png",
    isSaved: false,
    isHired: false,
  },
  {
    studentName: "Varshitha",
    category: "Data-Science",
    details: "Detail-oriented data analyst with a strong background in data mining, cleaning, and interpretation. Skilled in generating actionable insights through data visualization and statistical analysis. ",
    image: "./assets/profile-pic5.png",
    isSaved: false,
    isHired: false,
  },
  {
    studentName: "Maheshwari",
    category: "Graphic-Design",
    details: "Innovative and versatile graphic designer with a keen eye for detail and a passion for creating visually stunning designs. ",
    image: "./assets/profile-pic4.png",
    isSaved: false,
    isHired: false,
  },{
    studentName: "Rupesh",
    category: "Architecture",
    details: "Detail-oriented project architect with a proven track record of managing large-scale architectural projects from inception to delivery. ",
    image: "./assets/profile-pic2.png",
    isSaved: false,
    isHired: false,
  },{
    studentName: "Ravi",
    category: "Business",
    details: "Analytically-driven financial analyst with expertise in financial modeling, forecasting, and budgeting. Proficient in conducting in-depth financial analysis to support strategic decision-making and optimize business performance.  ",
    image: "./assets/profile-pic2.png",
    // age: 25,
    // education: "Bachelor's Degree in Computer Science",
    // skills: ["JavaScript", "HTML", "CSS", "Python"],
    // experience: "2 years of internships in software development",
    // languages: ["English", "Spanish"],
    // projectLink: "https://www.nexus.com/profiles/profile0/projects",
    isSaved: false,
    isHired: false,
  },
],
};

for (let i of profiles.data) {
// Create Card
let card = document.createElement("div");
card.classList.add("collab");
card.classList.add(i.category);

// Image Container
// let imageContainer = document.createElement("div");
// imageContainer.classList.add("collab-preview");
let imgContainer = document.createElement("div");
imgContainer.className = "img-container";
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
let name = document.createElement("h2");
name.innerText = i.studentName.toUpperCase();
infoContainer.appendChild(name);

// Details
let details = document.createElement("h6");
details.innerText = i.details;
infoContainer.appendChild(details);

// Resume
// let resume = document.createElement('object');
// resume.data = i.resume;
// resume.width = "800";
// resume.height = "500";
// infoContainer.appendChild(resume);

// Button
let button = document.createElement("button");
button.textContent = "Check Out This Profile";
infoContainer.appendChild(button);

card.appendChild(infoContainer);
document.getElementById("profile-cards").appendChild(card);
}

// Filter function
function filterProduct(value) {
let buttons = document.querySelectorAll(".button-value");
buttons.forEach((button) => {
  // Check if the button text is "All" or matches the specified value
  var buttonValue = button.innerText.toUpperCase();
  if (button.innerText.toUpperCase().split(" ").length === 2) buttonValue = button.innerText.toUpperCase().split(" ")[0] + button.innerText.toUpperCase().split(" ")[1];

  if (value.toUpperCase() === buttonValue) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});


let elements = document.querySelectorAll("#profile-cards .collab");
elements.forEach((element) => {
  if (value == "all") {
    element.classList.remove("hide");
  } else {
    if (element.classList.contains(value)) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  }
});
}

// Search function
document.getElementById("search").addEventListener("click", () => {
let searchInput = document.getElementById("search-input").value.trim().toUpperCase();
let elements = document.querySelectorAll(".collab-info h2");
let cards = document.querySelectorAll(".collab");

elements.forEach((element, index) => {
  let profileName = element.innerText.trim().toUpperCase();
  if (profileName.includes(searchInput)) {
    cards[index].classList.remove("hide");
  } else {
    cards[index].classList.add("hide");
  }
});
});

//Initially display all profiles
window.onload = () => {
filterProduct("all");
};


// Handle the modals (popup on-click of the "Check Out Profile Button")
var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".collab button");
var span = document.getElementsByClassName("close")[0];
var index;

// When the user clicks the button, open the modal
for (var i = 0; i < btns.length; i++) {
btns[i].onclick = function () {
  // Get which card got clicked
  index = Array.from(btns).indexOf(this);

  // console.log(profiles.data[index]);

  modal.style.display = "block";

  // Populate modal content with profile details
  populateModalContent();
}
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
modal.style.display = "none";
index = null;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
if (event.target == modal) {
  modal.style.display = "none";
  index = null;
}
}

// Function to populate modal content with profile details
function populateModalContent() {
// Get the modal content element
var modalContent = document.querySelector(".student-details");

modalContent.innerHTML = "";

// Create elements for profile details
var nameElement = document.createElement("h2");
nameElement.innerText = profiles.data[index].studentName.toUpperCase();
modalContent.appendChild(nameElement);

var categoryElement = document.createElement("p");
categoryElement.innerText = "Category: " + profiles.data[index].category;
modalContent.appendChild(categoryElement);

var detailsElement = document.createElement("p");
detailsElement.innerText = profiles.data[index].details;
modalContent.appendChild(detailsElement);

// Add additional profile details
// var ageElement = document.createElement("p");
// ageElement.innerText = "Age: " + profiles.data[index].age;
// modalContent.appendChild(ageElement);

// var educationElement = document.createElement("p");
// educationElement.innerText = "Education: " + profiles.data[index].education;
// modalContent.appendChild(educationElement);

// var skillsElement = document.createElement("p");
// skillsElement.innerText = "Skills: " + profiles.data[index].skills.join(", ");
// modalContent.appendChild(skillsElement);

// var experienceElement = document.createElement("p");
// experienceElement.innerText = "Experience: " + profiles.data[index].experience;
// modalContent.appendChild(experienceElement);

// var languagesElement = document.createElement("p");
// languagesElement.innerText = "Languages: " + profiles.data[index].languages.join(", ");
// modalContent.appendChild(languagesElement);

// Update buttons based on saved/hired status
var saveBtn = document.getElementById("saveBtn");
var hireBtn = document.getElementById("hireBtn");

if (profiles.data[index].isSaved) {
  saveBtn.style.backgroundColor = "red";
  saveBtn.innerText = "Unsave Profile";
} else {
  saveBtn.style.backgroundColor = "#4CAF50";
  saveBtn.innerText = "Save Profile";
}

if (profiles.data[index].isHired) {
  hireBtn.style.backgroundColor = "red";
  hireBtn.innerText = "Unhire Profile";
} else {
  hireBtn.style.backgroundColor = "#4CAF50";
  hireBtn.innerText = "Hire Profile";
}
}


// Save button click event
document.querySelectorAll("#saveBtn").forEach(function (btn) {
btn.addEventListener("click", function (event) {
  console.log("Saved " + index);

  profiles.data[index].isSaved = !profiles.data[index].isSaved;

  updateSavedProfiles();

  // Populate modal content with profile details
  populateModalContent();
});
});

// Hired button click event
document.querySelectorAll("#hireBtn").forEach(function (btn) {
btn.addEventListener("click", function (event) {
  console.log("Hired " + index);

  profiles.data[index].isHired = !profiles.data[index].isHired;

  updateHiredProfiles();

  // Populate modal content with profile details
  populateModalContent();
});
});


function updateSavedProfiles() {
var cardContainer = document.getElementsByClassName("saved-cards-container");
cardContainer[0].innerHTML = "";

if(profiles.data.some(obj => obj.isSaved === true)){
  let h2 = document.createElement("h2");
  h2.innerText = "Saved Profiles";
  cardContainer[0].appendChild(h2);
}

let div = document.createElement("div");
div.setAttribute("id", "saved-cards");
div.innerHTML = "";
cardContainer[0].appendChild(div);

for (let i of profiles.data) {
  if (i.isSaved === true) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");

    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
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
    let name = document.createElement("h2");
    name.innerText = i.studentName.toUpperCase();
    infoContainer.appendChild(name);

    // Details
    let details = document.createElement("h6");
    details.innerText = i.details;
    infoContainer.appendChild(details);

    var categoryElement = document.createElement("p");
categoryElement.innerText = "Category: " + profiles.data[index].category;
infoContainer.appendChild(categoryElement);

    // Project Link
    // let projectLink = document.createElement("a");
    // projectLink.setAttribute("href", i.projectLink);
    // projectLink.setAttribute("target", "_blank");
    // projectLink.innerText = i.projectLink;
    // infoContainer.appendChild(projectLink);
    

    card.appendChild(infoContainer);
    document.getElementById("saved-cards").appendChild(card);
    card.scrollIntoView();
    card.scrollIntoView({behavior: "smooth"});
  }
}
}

function updateHiredProfiles() {
var cardContainer = document.getElementsByClassName("hired-cards-container");
cardContainer[0].innerHTML = "";

if(profiles.data.some(obj => obj.isSaved === true)){
  let h2 = document.createElement("h2");
  h2.innerText = "Hired Profiles";
  cardContainer[0].appendChild(h2);
}

let div = document.createElement("div");
div.setAttribute("id", "hired-cards");
div.innerHTML = "";
cardContainer[0].appendChild(div);

document.getElementById("hired-cards").innerHTML = "";
for (let i of profiles.data) {
  if (i.isHired === true) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");

    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
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
    let name = document.createElement("h2");
    name.innerText = i.studentName.toUpperCase();
    infoContainer.appendChild(name);

    // Details
    let details = document.createElement("h6");
    details.innerText = i.details;
    infoContainer.appendChild(details);

    var categoryElement = document.createElement("p");
categoryElement.innerText = "Category: " + profiles.data[index].category;
infoContainer.appendChild(categoryElement);

    // Project Link
    // let projectLink = document.createElement("a");
    // projectLink.setAttribute("href", i.projectLink);
    // projectLink.setAttribute("target", "_blank");
    // projectLink.innerText = i.projectLink;
    // infoContainer.appendChild(projectLink);

    card.appendChild(infoContainer);
    document.getElementById("hired-cards").appendChild(card);
    card.scrollIntoView();
    card.scrollIntoView({behavior: "smooth"});
  }
}
}
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
