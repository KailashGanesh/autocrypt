function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
}

function changeNavColor(color){
    let white = "rgb(0,0,0,0.9)"
    if (color == "white"){
        header.style.backgroundColor = white;
        header.style.position = "fixed";
        header.style.paddingTop = "28px"
        header.style.paddingBottom = "14px"
        console.log("turned white")
    }else{
        header.style.backgroundColor= "transparent";
        header.style.position = "absolute" ;
        header.style.paddingTop = "56px"
        header.style.paddingBottom = "0px"
        console.log("turned initial")
    }
}

let header = document.getElementById("header");

document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition >= 100){
        changeNavColor("white")
    }else if(lastKnownScrollPosition == 0){
        changeNavColor()
    }
})


// import Splide from '@splidejs/splide';

let splide = document.getElementById('splide');

new Splide( splide, {
    type   : 'loop',
    perPage: 2,
    focus  : 'center',
  } ).mount();



// prices

let monthlyBtn = document.getElementById("monthly");
let yearlyBtn = document.getElementById("yearly");
let yearlyCards = document.getElementById("yearlyCards");
let monthlyCards = document.getElementById("monthlyCards");

yearlyBtn.addEventListener('click', () => {
    yearlyCards.style.display = "block";
    yearlyCards.style.textAlign = "center";
    monthlyCards.style.display = "none";

});
monthlyBtn.addEventListener('click', () => {
    yearlyCards.style.display = "none";
    monthlyCards.style.display = "block";

});