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
    phoDisplay: document.querySelector(".phoDiv"),
    sandDisplay: document.querySelector(".sandDiv"),
    him: change("Appetizer"),
    her: change("Pho"),
    them: change("Banh Mi"),
};

DOMSelectors.btnA.addEventListener("click", function(){
    console.log(DOMSelectors.him);
    const map1 = Array.from(DOMSelectors.him);
    map1.forEach(function htmlHim(dish){
    DOMSelectors.appDisplay.insertAdjacentHTML(
        "beforeend",
        `    <div class="subhead">
        <h3 class="hero">appetizers!</h3>
        <h4 class="hero">here are some good starters</h4>
      </div>
        <div class="appDiv">
        <div class="dish-card">
        <h3 class="dish-name">${dish.name}</h3>
        <h4 class="dish-description">${dish.description}</h4>
        <h4 class="dish-name">${dish.price}</h4>
        </div>
        </div>
       `
)})
}); 
// use .map to create a new array with objects in menu that have given type
// then htmlHim that

DOMSelectors.btnB.addEventListener("click", function(){
    console.log(DOMSelectors.her);
    const map2 = Array.from(DOMSelectors.her);
    map2.forEach(function htmlHer(dish){
    DOMSelectors.phoDisplay.insertAdjacentHTML(
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
    const map3 = Array.from(DOMSelectors.them);
    map3.forEach(function htmlHer(dish){
    DOMSelectors.sandDisplay.insertAdjacentHTML(
            "beforeend",
            `<div class="dish-card">
            <h3 class="dish-name">${dish.name}</h3>
            <h4 class="dish-description">${dish.description}</h4>
            <h4 class="dish-name">${dish.price}</h4>
            </div>
            `
    )})
    });

DOMSelectors.btnAll.addEventListener("click", function(){
})


function start(){
    htmlHim(menu[0]);
    htmlHim(menu[1]);
    htmlHim(menu[2]);
    htmlHer(menu[3]);
    htmlHer(menu[4]);
    htmlHer(menu[5]);
    htmlThem(menu[6]);
    htmlThem(menu[7]);
    htmlThem(menu[8]);
}

start();