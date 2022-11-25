
// == mobile nav ==

const mobileMenu = document.getElementById("mobile-menu");
function toggleNav(open){
    mobileMenu.classList.toggle('overlay__nav--active');
    toggleScroll(allowScroll = open ? false:true);
}

// function to prevent background scrolling
function toggleScroll(allowScroll){
    document.body.style.overflow = allowScroll ? 'scroll' : 'hidden';
    // document.body.classList.toggle('no-scroll');
    document.body.scroll = allowScroll ? 'yes':'no';
}

const mobileNavLinks = document.querySelectorAll(".overlay__nav a");
const hamburger = document.getElementById("hamburger");

mobileNavLinks.forEach( (link) => {
    link.addEventListener('click', () => {toggleNav(open=false)})
});

hamburger.addEventListener('click', () => {toggleNav(open=true)})

// == sticky header ==

let header = document.getElementById("header");


document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition >= 100){
        header.classList.add('header--sticky');
    }else if(lastKnownScrollPosition == 0){
        header.classList.remove('header--sticky');
    }
})


// == slider with plugin ==

let splide = document.getElementById('splide');

new Splide( splide, {
    // clones  : 0,
    type   : 'loop',
    fixedWidth : '420px',
    fixedHeight : '500px',
    gap: '40px',
    perPage: 1,
    // focus  : 'center',
    arrows: false,
    autowidth: false,
    waitForTransition: false,
    // updateOnMove: true,
    snap: true,
    breakpoints:{ 470:{ fixedWidth: '90%',fixedHeight: '400px', } }
  } ).mount();



// == model == 

let model = document.getElementById("modelbox")
function openModel(){
    // model.style.display = 'block';
    model.classList.add('model-shown');
    window.setTimeout(function(){
      model.classList.add('model-animate');
    },0);

    window.setTimeout(function(){
        model.classList.add('model-background');
    },190);

    // prevent  background scroll
    toggleScroll(allowScroll = false);
}

function closeModel(){
    model.classList.remove('model-background');
    window.setTimeout(function(){
        model.classList.remove('model-animate');
    },180);
    window.setTimeout(function(){
        model.classList.remove('model-shown');
    },700); // timed to match animation-duration

    toggleScroll(allowScroll = true);
}


const getStartedButton = document.getElementById('getStartedButton')
const mobileRegisterButton = document.getElementById('mobileRegisterButton')
const navRegister = document.getElementById('navRegister')

getStartedButton.addEventListener('click', () => {openModel()});
navRegister.addEventListener('click', () => {openModel()});
mobileRegisterButton.addEventListener('click', () => { 
    toggleNav(false); 
    openModel();
});

// == prices ==

const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");
const price1 = document.getElementById("cardPrice1");
const price2 = document.getElementById("cardPrice2");
const price3 = document.getElementById("cardPrice3");

function switchPrices(isYearly){
    price1.innerText = isYearly ? "$96":"$10";
    price2.innerText = isYearly ? "$270":"$29";
    price3.innerText = isYearly ? "$350":"$49";
}

yearlyBtn.addEventListener('click', () => {
    switchPrices(isYearly = true)
    yearlyBtn.classList.add('btn--active')
    monthlyBtn.classList.remove('btn--active')

});
monthlyBtn.addEventListener('click', () => {
    switchPrices(isYearly = false)
    monthlyBtn.classList.add('btn--active')
    yearlyBtn.classList.remove('btn--active')
});


// == Carousel ==

const carouselSlides = document.querySelectorAll('.carousel__slide');
const pageLink = document.querySelectorAll('.page__link');
const carouselList = document.querySelector('#carouselList')
let slideWidth = carouselSlides[0].offsetWidth + 40;

carouselList.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = carouselList.scrollLeft;
    let carouselPos = Math.round(lastKnownScrollPosition / slideWidth);
    makeActive(carouselPos);
});

pageLink.forEach(pageBtn => {

    pageBtn.addEventListener('click', (e) => {
        let slideNumber = pageBtn.getAttribute('data-slide');
        carouselList.scrollLeft = slideNumber * slideWidth;
     })
})

function makeActive(indexNumber){
    pageLink.forEach( element =>{
        element.classList.remove('page__link--active')
    })
    carouselSlides.forEach(element => {
        element.classList.remove('slide--active')
    })
    carouselSlides[indexNumber].classList.add('slide--active');
    pageLink[indexNumber].classList.add('page__link--active')
}

// form validation 

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById('passwordField')

nameInput.addEventListener("input", (event) => {
    if (nameInput.validity.tooShort){
        nameInput.setCustomValidity("Name should be longer then 2 letters");
        nameInput.style.borderColor = "tomato";
        nameInput.reportValidity();
    }else{
        nameInput.style.borderColor = "#1fdb84";
        nameInput.setCustomValidity("");
    }
});

emailInput.addEventListener("input", (event) => {
  if (emailInput.validity.patternMismatch) {
    emailInput.style.borderColor = "tomato";
    emailInput.setCustomValidity("you have entered an invalid email - eg. bob@gmail.com");
    emailInput.reportValidity();
  } else {
    emailInput.style.borderColor = "#1fdb84";
    emailInput.setCustomValidity("");
  }
});

passwordInput.addEventListener("input", (event) => {
    if (passwordInput.validity.tooShort){
        passwordInput.setCustomValidity("Password should be longer then 4 letters");
        passwordInput.style.borderColor = "tomato";
        passwordInput.reportValidity();
    }else{
        passwordInput.style.borderColor = "#1fdb84";
        passwordInput.setCustomValidity("");
    }
});

// show password btn

const showPassword = document.getElementById('showPassword');
const passwordInputIcon = document.getElementById('showPasswordIcon')

showPassword.addEventListener('click', () => {
    if (passwordInput.type == "password"){
        passwordInput.type ='text';
        passwordInputIcon.setAttribute('href', "./dist/image.svg#eye-slash-solid")
    }else{
        passwordInput.type ='password';
        passwordInputIcon.setAttribute('href', "./dist/image.svg#eye-solid")
    }
});