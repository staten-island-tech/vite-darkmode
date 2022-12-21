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
    appDisplay: document.querySelector(".appDiv"),
    phoDisplay: document.querySelector(".phoDiv"),
    sandDisplay: document.querySelector(".sandDiv"),
};

function clickBtnA(){
    DOMSelectors.btnA.addEventListener("click", function(){
    let him = change("Appetizer");
    console.log(him);
    htmlHim(menu[0]);
    htmlHim(menu[1]);
    htmlHim(menu[2]);
});
}

function clickBtnB(){
DOMSelectors.btnB.addEventListener("click", function(){
    let him = change("Pho");
    console.log(him);
    htmlHer(menu[3]);
    htmlHer(menu[4]);
    htmlHer(menu[5]);
});
}

function clickBtnC(){
DOMSelectors.btnC.addEventListener("click", function(){
    let him = change("Banh");
    console.log(him);
    htmlThem(menu[6]);
    htmlThem(menu[7]);
    htmlThem(menu[8]);
});
}

clickBtnA();
clickBtnB();
clickBtnC();
   
// DOMSelectors.btnD.addEventListener("click", function(){

// })

function htmlHim(dish){
    DOMSelectors.appDisplay.insertAdjacentHTML(
        "beforeend",
        `<div class="dish-card">
        <h3 class="dish-name">${dish.name}</h3>
        <h4 class="dish-description">${dish.description}</h4>
        <h4 class="dish-name">${dish.price}</h4>
        </div>
       `
)}

function htmlHer(dish){
    DOMSelectors.phoDisplay.insertAdjacentHTML(
        "beforeend",
        `<div class="dish-card">
        <h3 class="dish-name">${dish.name}</h3>
        <h4 class="dish-description">${dish.description}</h4>
        <h4 class="dish-name">${dish.price}</h4>
        </div>
       `
)}
function htmlThem(dish){
    DOMSelectors.sandDisplay.insertAdjacentHTML(
        "beforeend",
        `<div class="dish-card">
        <h3 class="dish-name">${dish.name}</h3>
        <h4 class="dish-description">${dish.description}</h4>
        <h4 class="dish-name">${dish.price}</h4>
        </div>
       `
)}
//in the addeventlistener function, use map to create a new function out of the change(); with .map and in that function 
//define the three values of each of those arrays .value (ie: let dishOne = newArray[o].value)