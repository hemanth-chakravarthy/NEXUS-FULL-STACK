document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.querySelector('.settings');
    const dropdownList = document.querySelector('.list');
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');
    

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



//project reactions 
let cards = document.querySelectorAll(".card");
cards.forEach(c => {
    let like = c.querySelector('.like');
    let save = c.querySelector('.save');
    let comment = c.querySelector('.comment');
    like.addEventListener('click',()=>{
        if(!like.classList.contains('liked')){
            like.innerHTML = '<i class="fa-solid fa-heart" style="color: #ff0000;"></i>';
            like.classList.add('liked');
        }else{
            like.innerHTML = '<i class="fa-regular fa-heart"></i>';
            like.classList.remove('liked');
        }
    });
    save.addEventListener('click',()=>{
        if(!save.classList.contains('saved')){
            save.innerHTML = '<i class="fa-solid fa-bookmark" style="color: #080d96;"></i>';
            save.classList.add('saved');
        }else{
            save.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
            save.classList.remove('saved');
        }
    });
    comment.addEventListener('click',()=>{
        if(!comment.classList.contains('commented')){
            comment.innerHTML = '<i class="fa-solid fa-comment"></i>';
            comment.classList.add('commented');
        }else{
            comment.innerHTML = '<i class="fa-regular fa-comment"></i>';
            comment.classList.remove('commented');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('create'); // Changed the selector to match the ID in the HTML
    const popupForm = document.getElementById('create-container');
    const workup = document.getElementById('create-up');
    const closeButton = document.getElementById('close-create');

    button.addEventListener('click', function() { // Changed the event to 'click' to listen for button clicks
        popupForm.style.display = 'flex';
        setTimeout(function() {
            workup.style.transform = 'scale(1)';
            workup.style.opacity = '1';
        }, 100);
    });

    closeButton.addEventListener('click', function() {
        workup.style.transform = 'scale(0.5)';
        workup.style.opacity = '0';
        setTimeout(function() {
            popupForm.style.display = 'none';
        }, 300);
    });
});
