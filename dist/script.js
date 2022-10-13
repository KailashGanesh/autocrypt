// == mobile nav ==
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
    document.getElementById("mobile-menu").style.padding = "0 40px";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
    document.getElementById("mobile-menu").style.padding = "0";
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
}

function toggleNav(open){
    document.getElementById("mobile-menu").style.width = open ? "100%":"0";
    document.getElementById("mobile-menu").style.padding = open ? "0 40px":"0";
    document.documentElement.style.overflow = open ? "hidden":'scroll';
    document.body.scroll = open ? 'no':'yes';
}


// == sticky header ==

function changeNavColor(color){
    let black = "rgb(0,0,0,0.8)"
    if (color == "black"){
        header.style.backgroundColor = black;
        header.style.position = "fixed";
        header.style.paddingTop = "20px"
        header.style.paddingBottom = "20px"
    }else{
        header.style.backgroundColor= "transparent";
        header.style.position = "absolute" ;
        header.style.paddingTop = "20px"
        header.style.paddingBottom = "0px"
    }
}

let header = document.getElementById("header");

document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition >= 100){
        changeNavColor("black")
    }else if(lastKnownScrollPosition == 0){
        changeNavColor()
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
    focus  : 'center',
    arrows: false,
    autowidth: false,
    waitForTransition: false,
    // updateOnMove: true,
    snap: true,
    breakpoints:{ 470:{ fixedWidth: '90%', } }
  } ).mount();

let slides = document.getElementsByClassName('splide__slide')



// == model == 

let model = document.getElementById("modelInput")
function openModel(){
    let black = "rgb(0,0,0,0.5)"
    model.style.display = 'block';
    window.setTimeout(function(){
      model.style.opacity = 1;
      model.style.transform = 'scale(1)';
    },0);

    window.setTimeout(function(){
        model.style.backdropFilter = "blur(6px)";
        model.style.backgroundColor = black;
    },300);

    // prevent  background scroll
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
}

function closeModel(){
    model.style.backgroundColor = "transparent";
    model.style.backdropFilter = "blur(0px)";
    window.setTimeout(function(){
        model.style.transform = 'scale(0)';
        model.style.opacity = 0;
    },200);
    window.setTimeout(function(){
      model.style.display = 'none';
    },700); // timed to match animation-duration
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = 'yes';
}

// show password btn

let showPassword = document.getElementById('showPassword');
let passwordInput = document.getElementById('passwordField')
let passwordInputIcon = document.getElementById('showPasswordIcon')

showPassword.addEventListener('click', () => {
    if (passwordInput.type == "password"){
        passwordInput.type ='text';
        passwordInputIcon.setAttribute('xlink:href', "./dist/image.svg#eye-slash-solid")
    }else{
        passwordInput.type ='password';
        passwordInputIcon.setAttribute('xlink:href', "./dist/image.svg#eye-solid")
    }
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
let slideWidth = carouselSlides[0].offsetWidth + 50;

carouselList.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = carouselList.scrollLeft;
    let carouselPos = Math.round(lastKnownScrollPosition / slideWidth);
    makeActive(carouselPos);
});

pageLink.forEach(pageBtn => {

    pageBtn.addEventListener('click', (e) => {
        let slideNumber = pageBtn.getAttribute('data-slide');
        carouselList.scrollLeft = slideNumber * slideWidth;

    //     pageLink.forEach( element =>{
    //         element.classList.remove('page__link--active')
    //     })
    //     carouselSlides.forEach(element => {
    //         element.classList.remove('slide--active')
    //     })

    //     pageBtn.classList.add('page__link--active')
    //    carouselSlides[slideNumber].classList.add('slide--active');
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