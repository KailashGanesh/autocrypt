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


// == sticky header ==

function changeNavColor(color){
    let black = "rgb(0,0,0,0.8)"
    if (color == "black"){
        header.style.backgroundColor = black;
        header.style.position = "fixed";
        header.style.paddingTop = "20px"
        header.style.paddingBottom = "20px"
        console.log("turned white")
    }else{
        header.style.backgroundColor= "transparent";
        header.style.position = "absolute" ;
        header.style.paddingTop = "20px"
        header.style.paddingBottom = "0px"
        console.log("turned initial")
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
    // updateOnMove: true,
    snap: true,
    breakpoints:{ 470:{ fixedWidth: '90%', } }
  } ).mount();

let slides = document.getElementsByClassName('splide__slide')

console.log(slides)

for (let i = 0; i < slides.length; i++){
    console.log(slides[i].classList.value)
}

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

let monthlyBtn = document.getElementById("monthly");
let yearlyBtn = document.getElementById("yearly");
let yearlyCards = document.getElementById("yearlyCards");
let monthlyCards = document.getElementById("monthlyCards");

yearlyBtn.addEventListener('click', () => {
    yearlyCards.style.display = "block";
    yearlyCards.style.textAlign = "center";
    monthlyCards.style.display = "none";
    yearlyBtn.classList.add('btn--active')
    monthlyBtn.classList.remove('btn--active')

});
monthlyBtn.addEventListener('click', () => {
    yearlyCards.style.display = "none";
    monthlyCards.style.display = "block";
    monthlyBtn.classList.add('btn--active')
    yearlyBtn.classList.remove('btn--active')
});

// let cards = document.querySelectorAll('.card');
// cards[1].classList.add("card--best");
// for(let i = 0; i < cards.length; i++){
//     cards[i].addEventListener('mouseover', (e) => {
//         if(e.target.classList == "card"){
//             cards[1].classList.remove("card--best");
//             e.target.classList.add("card--best");
//         }else{
//             e.target.parrentElement.add("card--best");
//         }
//     })

//     cards[i].addEventListener('mouseout', (e) => {
//             e.target.classList.remove("card--best");
//     })
// }