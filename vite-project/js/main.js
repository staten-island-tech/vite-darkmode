import '../styles/style.css';
// import AOS from "aos";
// AOS.init();
import {menu} from "./menu";

function change(change){
    return menu.filter((el)=> el.type === `${change}`)
}

const DOMSelectors={
    btnA: document.querySelector(".btnA"),
    btnB: document.querySelector(".btnB"),
    btnC: document.querySelector(".btnC"),
    btnAll: document.querySelector(".btnAll"),
    appDisplay: document.querySelector(".appetizers"),
    subAppDisplay: document.querySelector(".appDiv"),
    phoDisplay: document.querySelector(".noodleSoup"),
    subPhoDisplay: document.querySelector(".phoDiv"),
    sandDisplay: document.querySelector(".sandwiches"),
    subSandDisplay: document.querySelector(".sandDiv"),
    him: change("Appetizer"),
    her: change("Pho"),
    them: change("Banh Mi"),
};

DOMSelectors.btnA.addEventListener("click", function(){
    console.log(DOMSelectors.him);
    DOMSelectors.appDisplay.insertAdjacentHTML(
        "afterbegin",
        `<div class="subhead">
        <h3 class="hero">appetizers!</h3>
        <h4 class="hero">here are some good starters</h4>
      </div>`
    )
    const map1 = Array.from(DOMSelectors.him);
    map1.forEach(function htmlHim(dish){
    DOMSelectors.subAppDisplay.insertAdjacentHTML(
        "beforeend",
        `<div class="dish-card">
        <h3 class="dish-name">${dish.name}</h3>
        <h4 class="dish-description">${dish.description}</h4>
        <h4 class="dish-name">${dish.price}</h4>
        </div>
       `
)})
}); 
// use .map to create a new array with objects in menu that have given type
// then htmlHim that

DOMSelectors.btnB.addEventListener("click", function(){
    console.log(DOMSelectors.her);
    DOMSelectors.phoDisplay.insertAdjacentHTML(
        "afterbegin",
        `<div class="subhead">
        <h3 class="hero">pho!</h3>
        <h4 class="hero">the best part</h4>
      </div>`
    )
    const map2 = Array.from(DOMSelectors.her);
    map2.forEach(function htmlHer(dish){
    DOMSelectors.subPhoDisplay.insertAdjacentHTML(
            "beforeend",
            `<div class="dish-card">
            <h3 class="dish-name">${dish.name}</h3>
            <h4 class="dish-description">${dish.description}</h4>
            <h4 class="dish-name">${dish.price}</h4>
            </div>
           `
)})
});

DOMSelectors.btnC.addEventListener("click", function(){
    console.log(DOMSelectors.them);
    DOMSelectors.sandDisplay.insertAdjacentHTML(
        "afterbegin",
        `<div class="subhead">
        <h3 class="hero">sandwiches!</h3>
        <h4 class="hero">it gets even better</h4>
      </div>`
    )
    const map3 = Array.from(DOMSelectors.them);
    map3.forEach(function htmlHer(dish){
    DOMSelectors.subSandDisplay.insertAdjacentHTML(
            "beforeend",
            `<div class="dish-card">
            <h3 class="dish-name">${dish.name}</h3>
            <h4 class="dish-description">${dish.description}</h4>
            <h4 class="dish-name">${dish.price}</h4>
            </div>
            `
    )})
    });

DOMSelectors.btnAll.addEventListener("click", start());

document.querySelector(".color").addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
});

function start(){
    
};

start();