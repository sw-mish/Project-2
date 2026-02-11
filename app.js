// to toggle between day and night theme
const toggleBtn=document.getElementById('theme-toggle');
toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light-theme")?"light":"dark",
    );
    const isLightTheme = document.body.classList.contains("light-theme");
    toggleBtn.textContent = isLightTheme ? "🌙" : "🌞";
});

//array typing custom function.....
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["a Software Engineer","a Team Lead","a Yogi","a Runner","an Active Learner", "a Problem Solver"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on both elements
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Optional: Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});