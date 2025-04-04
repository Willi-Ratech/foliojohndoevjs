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



// // PARAMETRE DE FLECHE LEFT RIGHT
// const buttonleft = document.getElementById ("prev");
// buttonleft.addEventListener ("click",myFunction);

// function myFunction (){
//     // document.getElementById ("demo").innerHTML = 'imagepreview';
//     buttonleft.addEventListener("click",() =>){
        
//     }
// }









document.addEventListener("DOMContentLoaded", function () {
    const imagesInner = document.querySelector(".images-inner");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".image-slide");
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
  
    // Fonction pour déplacer le slider vers la gauche
    prevButton.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Boucle vers le dernier slide
      }
      updateSlider();
    });
  
    // Fonction pour déplacer le slider vers la droite
    nextButton.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0; // Boucle vers le premier slide
      }
      updateSlider();
    });
  
    // Mettre à jour la position du slider
    function updateSlider() {
      imagesInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });


// Arrow flêche


// Ici je voulais mettre la fonction pour controller le slide mais 
// j'ai pa pu le faire , git





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






function toggleDropdown() {
    const dropdownList = document.getElementById('dropdown-list');
    // Alterne la visibilité de la liste déroulante
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
}





