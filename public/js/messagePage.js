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

// messaging js
//msg request
function msg(){
    const showRequests = document.querySelector(".msg-requests");
    const closeRequests = document.querySelector(".close-req");
    const contactchats = document.querySelector(".contact-chats");
    const msgRequests = document.querySelector(".msg-requests-div");
    showRequests.addEventListener('click',()=>{
        msgRequests.style.display = "flex";
        contactchats.style.display = "none"
    });
    closeRequests.addEventListener('click',()=>{
        msgRequests.style.display = "none";
        contactchats.style.display = "flex";
    });
    //block user
    function blockContact(user){
        const blockUser = user.querySelector('.block-user');
        const blockContainer = user.querySelector('#block-popup');
        const blockPopup = user.querySelector('#block-msg-popup');
        const confirmYes = user.querySelector('#yes-close-popup');
        const confirmNo = user.querySelector('#no-close-popup');
        const userBlocked = user.querySelector('#user-blocked');
        const msgInput = user.querySelector('#msg-input');

        blockUser.addEventListener('click', function() {
            blockContainer.style.display = 'flex';
            setTimeout(function() {
                blockPopup.style.transform = 'scale(1)';
                blockPopup.style.opacity = '1';
            }, 100);
        });

        confirmNo.addEventListener('click', function() {
            blockPopup.style.transform = 'scale(0.5)';
            blockPopup.style.opacity = '0';
            setTimeout(function() {
                blockContainer.style.display = 'none';
            }, 300);
        });
        confirmYes.addEventListener('click', function() {
            blockPopup.style.transform = 'scale(0.5)';
            blockPopup.style.opacity = '0';
            blockContainer.style.display = 'none';
            userBlocked.style.display = "flex";
            msgInput.disabled = "true";
        });
    }
    
}
// message request accept decline
function createContact(req){
    let newContact = document.createElement('button');
    newContact.className = 'contact-chat';
    let contacts = document.querySelectorAll('.contact-chat');
    let newDiv = document.createElement('div');
    newDiv.className = "contact";
    let idno = contacts.length+1;
    newContact.id = `contact-${idno}`;
    let newProfile = document.createElement('div');
    newProfile.className = "contact-profile";
    newProfile.innerHTML = req.querySelector('.req-profile').innerHTML;
    let newDetails = document.createElement('div');
    newDetails.className = "contact-details";
    newDetails.innerHTML = req.querySelector('.req-contact-name').innerHTML;
    newDiv.appendChild(newProfile);
    newDiv.appendChild(newDetails);
    newContact.appendChild(newDiv);
    let contactChats = document.querySelector('.contacts-list');
    contactChats.appendChild(newContact);
    let msgBox = document.querySelector('.msg-box');
    let emptyChat = document.querySelector('#contact-empty-texts');
    console.log("element created");
    let newChat = document.createElement('div');
    newChat.innerHTML = emptyChat.innerHTML;
    newChat.className = 'texts';
    newChat.classList.add('hide');
    newChat.id = `contact-${idno}-texts`;
    newChat.querySelector('.chat-profile').innerHTML = req.querySelector('.req-profile').innerHTML;
    newChat.querySelector('.name').innerHTML = req.querySelector('.req-contact-name h5').innerHTML;
    msgBox.appendChild(newChat);
    msg();
}
const requests = document.querySelectorAll('.reqsts');

const declMsg =document.querySelector(".declined-msg");
requests.forEach(req => {
    let a = req.querySelector('.accept-req');
    a.addEventListener('click',()=>{
        let rm = req.id;
        let removeReq = document.getElementById(rm);
        removeReq.parentNode.removeChild(removeReq);
        createContact(req);
    });
    let d = req.querySelector('.decline-req');
    d.addEventListener('click',()=>{
        let rm = req.id;
        let removeReq = document.getElementById(rm);
        removeReq.parentNode.removeChild(removeReq);
        declMsg.style.display='flex';
        setTimeout(function() {
            declMsg.style.display = 'none';
        }, 1500); 
    });
});
msg();

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
