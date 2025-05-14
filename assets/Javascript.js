//Reviews page carousel
const carousel = document.querySelector(".carousel");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const scrollAmount = carousel.querySelector(".review").offsetWidth + 16;
leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});
carousel.addEventListener('mouseup', () => {
    isDragging = false;
});
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
});

//Navigation bar more button
$(document).on("click", ".more-toggle", function (e) {
    e.preventDefault();
    $(".more-nav").toggle();
    e.stopPropagation(); 
});

$(document).on("click", function () {
    $(".more-nav").hide();
});

$(document).on("click", ".more-nav a", function () {
    $(".more-nav").hide();
});

//Seminars page register prompt
    function registerSeminar() {
    const name = prompt("Please enter your name to register:");
    if (name) {
      alert("Thank you, " + name + "! You have successfully registered.");
    } else {
      alert("Registration canceled.");
    }
  }

//To validate form
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const numberError = document.getElementById("number-error");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    numberError.innerHTML = "";

    let isValid = true;
    if (name === "") {
      nameError.innerHTML = "Name is required";
      isValid = false;
    }

    if (email === "") {
      emailError.innerHTML = "Email is required";
      isValid = false;
    } else if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      emailError.innerHTML = "Invalid email format";
      isValid = false;
    }

    if (number === "") {
      numberError.innerHTML = "Phone number is required";
      isValid = false;
    }

    return isValid;
  }

  //Home page counters
  var counterlang=document.getElementById("counterlang");
  var counterstudents=document.getElementById("counterstudents");

  var i=0;
  setInterval(()=>{
    if(i==50){
        clearInterval();
    } else {
        i=i+1;
        counterlang.innerHTML=i+"+";
    }
  }, 50);

  var j=0;
  setInterval(()=>{
    if(j==150){
        clearInterval();
    } else {
        j=j+3;
        counterstudents.innerHTML=j+"+";
    }
  }, 50);