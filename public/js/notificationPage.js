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




//Mard as Read
document.addEventListener("DOMContentLoaded", function () {
    var markAsReadBtn = document.getElementById("markAsReadBtn");
    var notificationListItems = document.querySelectorAll(".notification-list");
    var loadMoreBtn = document.getElementById("loadMoreBtn");
    var additionalNotificationsContainer = document.getElementById("additionalNotifications");

    markAsReadBtn.addEventListener("click", function () {
        markAllAsRead();
    });

    notificationListItems.forEach(function (notification) {
        notification.addEventListener("click", function () {
            markSingleAsRead(notification);
        });
    });

    loadMoreBtn.addEventListener("click", function () {
        loadMoreNotifications();
    });

    function markAllAsRead() {
        notificationListItems.forEach(function (notification) {
            notification.classList.remove("notification-list--unread");
        });
    }

    function markSingleAsRead(notification) {
        notification.classList.remove("notification-list--unread");
    }

    //Load More Activity
    function loadMoreNotifications() {
        
        var dummyNotificationHTML = `
        
        <div class="notification-list">
        <div class="notification-list_content">
            <div class="notification-list_img">
                <img src="./assets/profile-pic3.png" alt="user">
            </div>
            <div class="notification-list_detail">
                <p><b>Nandhitha</b> liked your post</p>
                <p class="text-muted"></p>
                <p class="text-muted"><small>2 hours ago</small></p>
            </div>
        </div>
        <div class="notification-list_feature-img">
            <img src="./assets/predictive-maintenance-img.jpeg" alt="Feature image">
        </div>
        </div>
        
            <div class="notification-list">
            <div class="notification-list_content">
                <div class="notification-list_img">
                    <img src="./assets/profile-pic4.png" alt="user">
                </div>
                <div class="notification-list_detail">
                    <p><b>Shristi</b> commented on your post</p>
                    <p class="text-muted">Excellent Work.</p>
                    <p class="text-muted"><small>3 hour ago</small></p>
                </div>
            </div>
            <div class="notification-list_feature-img">
                <img src="./assets/music-img.jpeg" alt="Feature image">
            </div>
        </div>
        `;

        // Append the dummy content to the additionalNotificationsContainer
        additionalNotificationsContainer.insertAdjacentHTML("beforeend", dummyNotificationHTML);

        loadMoreBtn.style.display = "none";
    }
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
