const form = document.querySelector("form");
    form.onsubmit= function(e){
    if(!form.checkValidity()) {
        e.preventDefault();
    };
    form.classList.add('was-validated');
    };
    
let sIcon = document.querySelector(".collapse img");
let sFeild = document.querySelector(".s .search");
let sImg = document.querySelector(".collapse img");
let navbar = document.querySelector("ul");
let aboutUs = document.querySelector(".landing .button1 .btn1");
let quotes = document.querySelector(".landing .btn2");
let loginbtn = document.querySelector(".collapse .btn-success");
let scrolUp = document.getElementById("scrolUp");
let readMore = document.querySelector(".button2 .info-btn1");
let readMoreAt = document.getElementById("abtbtn");
let readMoreContent1 = document.querySelector(".container .info-span");
let readMoreContent2 = document.querySelector(".about .container .info-span2");
let resicons = document.querySelectorAll(".res .col-item .img");
let redTheme = document.querySelector(".themec .theme1");
let greenTheme = document.querySelector(".themec .theme2");
let originalTheme = document.querySelector(".themec .theme3");
let themes = document.querySelectorAll(".themec .theme");
let red = window.localStorage.getItem("theme1","rgb(196, 0, 0)");
let hire = document.querySelector(".hirebtn");
let facebook = document.querySelector(".f-link img:nth-of-type(1)"); 
let twitter = document.querySelector(".f-link img:nth-of-type(2)"); 
let linkedin = document.querySelector(".f-link img:nth-of-type(3)"); 
let instgram = document.querySelector(".f-link img:nth-of-type(4)");
let youtube = document.querySelector(".f-link img:nth-of-type(5)");

// footer links
facebook.onclick = function(){
    window.location.href = "https://www.facebook.com/ahmed.saife.1238";
};
twitter.onclick = function(){
    window.location.href = "https://www.twitter.com";
};
linkedin.onclick = function(){
    window.location.href = "https://www.linkedin.com";
};
instgram.onclick = function(){
    window.location.href = "http://www.insatgram.com";
};
youtube.onclick = function(){
    window.location.href = "https://www.youtube.com";
};
// After reloading & loading the page check what is in Localstorage?
if(window.localStorage.getItem("theme1")){
    document.documentElement.style.setProperty("--binaryColor",window.localStorage.getItem("theme1"));
    redTheme.classList.add("activetheme");
};
if(window.localStorage.getItem("theme2")){
    document.documentElement.style.setProperty("--binaryColor",window.localStorage.getItem("theme2"));
    greenTheme.classList.add("activetheme");
};
if(window.localStorage.getItem("theme3")){
    document.documentElement.style.setProperty("--binaryColor",window.localStorage.getItem("theme3"));
    originalTheme.classList.add("activetheme");
};

// set to and get from local storage Object's properties on Click
redTheme.onclick = function(){
    window.localStorage.clear();
    window.localStorage.setItem("theme1","rgb(196, 0, 0)");
    document.documentElement.style.setProperty("--binaryColor",window.localStorage.getItem("theme1"));
};
greenTheme.onclick = function(){
    window.localStorage.clear();
    window.localStorage.setItem("theme2","rgb(0, 102, 0)");
    document.documentElement.style.setProperty("--binaryColor",window.localStorage.getItem("theme2"));
};
originalTheme.onclick = function(){
    window.localStorage.clear();
    window.localStorage.setItem("theme3","rgb(0, 163, 163)");
    document.documentElement.style.setProperty("--binaryColor",window.localStorage.getItem("theme3","rgb(0, 163, 163)"));
};
console.log(window.localStorage.getItem("theme1"));


// Add class to one element(that is connected to a css style) and remove from others
themes.forEach((theme)=>{
    theme.addEventListener("click",function(){   
        document.querySelector(".activetheme")?.classList.remove("activetheme");
        theme.classList.add("activetheme");
    });
});
sIcon.onclick = function() {
    sFeild.style = "display: block;";
    sImg.style ="display: none;";
};
aboutUs.onclick = function() {
    window.scrollTo(0,2500)
};
quotes.onclick = function(){
    window.scrollTo(0,3500)
};
scrolUp.addEventListener("click",()=>{
    window.scrollTo(0,0)
});
window.onscroll = function(){
    if(scrollY > 600){
        scrolUp.style = "display: inline-block;";
    }else{
        scrolUp.style = "display:none;";
    };
};
readMore.addEventListener("click",()=>{
    readMoreContent1.classList.toggle("info-span");
    if(readMore.innerText === "Read More"){
        readMore.innerText = "Read Less";
    }else{
        readMore.innerText = "Read More";
    };
});
readMoreAt.addEventListener("click",()=>{
    readMoreContent2.classList.toggle("info-span2");
    if(readMoreAt.innerText === "Read More"){
        readMoreAt.innerText = "Read Less";
    }else{
        readMore.innerText = "Read More";
    };
});
hire.onclick= function(){
    window.alert("There Are No Freelancers Available At The Moment !! We Are Currently Working On That!!");
};