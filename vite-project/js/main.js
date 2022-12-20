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
    appDisplay: document.querySelector(".appetizers"),
    phoDisplay: document.querySelector(".noodleSoup"),
    sandDisplay: document.querySelector(".sandwiches"),
    app: document.querySelector(""),
    pho: document.querySelector(""),
    banh: document.querySelector(""),
};

DOMSelectors.btnA.addEventListener("click", function(){
    let him = change("Appetizer");
    console.log(him);
    A();
})

DOMSelectors.btnB.addEventListener("click", function(){
    let her = change("Pho");
    console.log(her);
    B();
})

DOMSelectors.btnC.addEventListener("click", function(){
    let temp = change("Banh Mi");
    console.log(temp)
    C();
})

function A(){
    DOMSelectors.appDisplay.insertAdjacentHTML(
        "afterbegin",
        `<div class="dish-card">
        <h3 class="dish-name">${app.name}</h3>
        <h4 class="dish-description">${app.description}</h4>
        <h4 class="dish-name">${app.price}</h4>
        </div>`
)}

function B(){
    DOMSelectors.appDisplay.insertAdjacentHTML(
        "afterbegin",
        `<div class="dish-card">
        <h3 class="dish-name">${app.name}</h3>
        <h4 class="dish-description">${app.description}</h4>
        <h4 class="dish-name">${app.price}</h4>
        </div>`
)}

function C(){
    DOMSelectors.appDisplay.insertAdjacentHTML(
        "afterbegin",
        `<div class="dish-card">
        <h3 class="dish-name">${app.name}</h3>
        <h4 class="dish-description">${app.description}</h4>
        <h4 class="dish-name">${app.price}</h4>
        </div>`
)}