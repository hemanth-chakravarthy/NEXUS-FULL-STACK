// let sections = document.querySelectorAll(".nav a");
// sections.forEach(s => {
//     let li = s.querySelector('.inner-circle');
//     s.addEventListener('click',()=>{
//         li.classList.add("active");
//         for(let i = 0;i<sections.length;i++){
//             if(sections[i]!=s){
//                 let a = 
//                 sections[i].classList.remove("active");
//             }
//         }
//     });
// });
// const section = document.querySelectorAll('.section');
//   const navLinks = document.querySelectorAll('.nav li');

//   function highlightNav() {
//     let index = section.length;

//     while(--index && window.scrollY + 50 < section[index].offsetTop) {}

//     navLinks.forEach((link) => link.classList.remove('active'));
//     navLinks[index].classList.add('active');
//   }
  // Highlight nav link on scroll
//   window.addEventListener('scroll', highlightNav);


// particle js
particlesJS("particles-js", {
    particles: {
      number: {
        value: 180,
        density: { enable: true, value_area: 866.4828672705786 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5197920831667335,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  // var count_particles, stats, update;
  // stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.left = "0px";
  // stats.domElement.style.top = "0px";
  // document.body.appendChild(stats.domElement);
  // count_particles = document.querySelector(".js-count-particles");
  // update = function () {
  //   stats.begin();
  //   stats.end();
  //   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  //   }
  //   requestAnimationFrame(update);
  // };
  // requestAnimationFrame(update);
  


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}