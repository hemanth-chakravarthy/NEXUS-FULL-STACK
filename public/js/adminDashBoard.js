function updatePassword() {
    const newPassword = document.getElementById('password').value;
    // Implement password update logic here
    alert('Password updated successfully');
  }
// const mongoose = require('mongoose')


const icons = document.querySelectorAll('._icon');
const iconsCont = document.querySelectorAll('._icon-cont');

var j ;
icons.forEach(icon => {
    icon.addEventListener('click',()=>{
        for(let i = 0;i<3;i++){
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
    for(let i=0;i<4;i++){
        if(i!==j){
            iconsCont[i].classList.add("hide");
        }
    }
}
