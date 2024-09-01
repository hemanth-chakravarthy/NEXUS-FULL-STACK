// const { name } = require("ejs");
const icons = document.querySelectorAll('._icon');
const iconsCont = document.querySelectorAll('._icon-cont');

var j ;
icons.forEach(icon => {
    icon.addEventListener('click',()=>{
        for(let i = 0;i<2;i++){
            if(icons[i] != icon){
                icons[i].classList.remove("openIcon");
            }else
                j=i;
        }
        icon.classList.add("openIcon")
        displayCont(j);
    });
});
function displayCont(j){
    iconsCont[j].classList.remove("hide");
    for(let i=0;i<3;i++){
        if(i!==j){
            iconsCont[i].classList.add("hide");
        }
    }
}
//create post


//Settings

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

// sliderrr

document.addEventListener('DOMContentLoaded', function() {
    const checkBox = document.getElementById('toggle-checkbox');
    const popupForm = document.getElementById('popup-int-form');
    const workup = document.getElementById('workup');
    const saveButton = document.getElementById('close-workup');
    const closeButton = document.getElementById('close-icon');

    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            popupForm.style.display = 'flex';
            setTimeout(function() {
                workup.style.transform = 'scale(1)';
                workup.style.opacity = '1';
            }, 100);
        } else {
            workup.style.transform = 'scale(0.5)';
            workup.style.opacity = '0';
            setTimeout(function() {
                popupForm.style.display = 'none';
            }, 300);
        }
    });
    closeButton.addEventListener('click', function() {
        workup.style.transform = 'scale(0.5)';
        workup.style.opacity = '0';
        setTimeout(function() {
            popupForm.style.display = 'none';
        }, 300);
        checkBox.checked = false;
    }); 
})
//edit form 
document.addEventListener('DOMContentLoaded', function() {
    const edit = document.getElementById('edit'); // Changed to match the ID in the HTML
    const editform = document.getElementById('edit-container');
    const editit = document.getElementById('editit');
    const saveEdits = document.getElementById('Save-edits');
    const cancelEdits = document.getElementById('Cancel-edits');
    const nameElement = document.querySelector('.Name');
    const aboutElement = document.querySelector('.bio');
    const imageElement = document.querySelector('.profile-picture img');

    edit.addEventListener('click', function() {
        editform.style.display = 'flex';
        setTimeout(function() {
            editit.style.transform = 'scale(1)';
            editit.style.opacity = '1';
        }, 100);
    });

    cancelEdits.addEventListener('click', function() {
        editit.style.transform = 'scale(0.5)';
        editit.style.opacity = '0';
        setTimeout(function() {
            editform.style.display = 'none';
        }, 300);
    });
    // saveEdits.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     // Update name
    //     const nameInput = document.getElementById('name').value;
    //     if (nameInput !== '') {
    //         nameElement.textContent = nameInput;
    //     }

    //     // Update about
    //     const aboutInput = document.getElementById('about').value;
    //     if (aboutInput !== '') {
    //         aboutElement.textContent = aboutInput;
    //     }

    //     // Update profile picture (optional)
    //     const imageInput = document.getElementById('pfp-img').files[0];
    //     if (imageInput) {
    //         const reader = new FileReader();
    //         reader.onload = function(e) {
    //             imageElement.src = e.target.result;
    //         };
    //         reader.readAsDataURL(imageInput);
    //     }

    //     // Hide the edit form
    //     document.getElementById('edit-container').style.display = 'none';
    // });
    // function updateFileName(input) {
    //     const fileName = input.files[0].name;
    //     const label = input.nextElementSibling;
    //     label.innerText = fileName;
    // }


    // saveEdits.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     const role = document.getElementById('role').value;
    //     const resume = document.getElementById('resume').value;
    //     const description = document.getElementById('description').value;

    //     if (role !== '' && resume !== '' && description !== '') {
    //         workup.style.transform = 'scale(0.5)';
    //         workup.style.opacity = '0';
    //         setTimeout(function() {
    //             popupForm.style.display = 'none';
    //         }, 300);
    //     } else {
    //         console.log('Please fill in all required fields.');
    //     }
    // });
})


//post data
// const workConfirm = document.getElementById('close-workup')
// workConfirm.addEventListener('click',function(){

// });

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

