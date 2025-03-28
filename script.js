const title = document.getElementById("title");
title.addEventListener("mouseover", () => {
    title.style.color = "orange";
    title.style.fontSize = "36px";
});

title.addEventListener("mouseout", () => {
    title.style.color = "white";
    title.style.fontSize = "28px";
});



const text = document.getElementById("fadeText");
text.addEventListener("mouseover", () => {
    text.style.color = "orange";
    text.style.fontSize = "20px";
    
    // text.style.opacity = "0";
    // setTimeout(() => {
    //     text.style.opacity = "1";
    // }, 1000);
});


//Arrow flêche



text.addEventListener("mouseout", () => {
    text.style.color = "white";
    text.style.fontSize = "18px";
});



//PARAMETRE MODE SOMBRE 
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') 
        ? 'Mode Clair' 
        : 'Mode Sombre';
});



const logo = document.getElementById("logojohn");
logo.addEventListener("click", () => {
logo.style.transform = "rotate(360deg)";
});






