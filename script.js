const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const close = document.getElementById("close");
const checkbox = document.getElementById("checkbox");
const featuresDark = document.getElementById("features-dark-box")



hamburger.addEventListener('click', function () {
    navUl.classList.add('show'); 
})
close.addEventListener('click', function () {
    navUl.classList.remove('show');  
})

checkbox.addEventListener('change',() => {
    //change the theme of the website
    featuresDark.classList.toggle('dark')
});


