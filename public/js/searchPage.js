document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('categories-button');
    const content = document.getElementById('dropdown-content');
    const input = document.querySelector('.search input[type="text"]');
    const clearButton = document.querySelector('.search button[type="submit"]'); 

    button.addEventListener('click', function() {
        content.classList.toggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#categories-button')) {
            content.classList.remove('show');
        }
    });

    // Remove placeholder when input is clicked
    input.addEventListener('focus', function() {
        input.removeAttribute('placeholder');
    });

    // Clear input value when clear button is clicked
    clearButton.addEventListener('click', function() {
        input.value = "";
        input.setAttribute('placeholder','What are you looking for?')
    });

});

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
    

    //tiles as button

const tiles = document.querySelectorAll('._tile');
const tilesCont = document.querySelectorAll('._tile-cont');
const cat = document.querySelector('.categories');

var j ;
tiles.forEach(tile => {
    tile.addEventListener('click',()=>{
        for(let i = 0;i<4;i++){
            if(tiles[i] != tile){
                tiles[i].classList.remove("openTile");
            }else
                j=i;
        }
        tile.classList.add("openTile")

        displayCont(j);
    });
});


function displayCont(j){
    tilesCont[j].classList.remove("hide");
    for(let i=0;i<4;i++){
        if(i!==j){
            tilesCont[i].classList.add("hide");
        }
    }
    cat.classList.add("hide");
}

const searchIcon = document.getElementById('search-icon');
const tile = document.querySelector('.search-tile');

// Add click event listener to the search icon
searchIcon.addEventListener('click', function() {
  // Toggle the 'open' class on the tile element
  
  for(let i=0;i<4;i++){
        tilesCont[i].classList.add("hide"); 
}
tile.classList.toggle('open');
  cat.classList.add("hide");
});

// document.addEventListener('DOMContentLoaded', function () {
//     const searchButton = document.getElementById('search-icon');
//     const chummsContainer = document.querySelector('.chumma');

//     searchButton.addEventListener('click', function () {

//         chummsContainer.style.display = 'flex'
//     });
// });
