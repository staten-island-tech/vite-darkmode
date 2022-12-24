import '../styles/style.css';
// import AOS from "aos";
// AOS.init();
import {menu} from "./menu";

const DOMSelectors={
    btnA: document.querySelector(".btnA"),
    btnB: document.querySelector(".btnB"),
    btnC: document.querySelector(".btnC"),
    btnAll: document.querySelector(".btnAll"),
    display: document.querySelector(".display"),
    him: change("Appetizer"),
    her: change("Pho"),
    them: change("Banh Mi"),
};

function change(change){
    return menu.filter((el)=> el.type === `${change}`)
}

function remove () {
  document.querySelectorAll(".dish-card").forEach((e)=> e.remove());
  document.querySelectorAll(".subhead").forEach((e)=> e.remove());
};

function subhead(type, comment){
  DOMSelectors.display.insertAdjacentHTML(
    "beforebegin",
    `<div class="subhead">
    <h3 class="hero"> ${type}</h3>
    <h4 class="hero"> ${comment}</h4>
  </div>`
)};

function start(){
    menu.forEach((el)=> console.log(el));
  subhead("all!", "get the full experience :)");
  menu.forEach(function htmlher(dish){
  DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="dish-card">
      <h3 class="dish-name">${dish.name}</h3>
      <h4 class="dish-description">${dish.description}</h4>
      <h4 class="dish-name">${dish.price}</h4>
      <img class= "image" src="${dish.img}">
      </div>
      `
)})
};

function html(dish){
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="dish-card">
    <h3 class="dish-name">${dish.name}</h3>
    <h4 class="dish-description">${dish.description}</h4>
    <h4 class="dish-name">${dish.price}</h4>
    <img class= "image" src="${dish.img}">
    </div>
   `
)}

start();

DOMSelectors.btnA.addEventListener("click", function(){
  remove();
    console.log(DOMSelectors.him);
    subhead("appetizers!", "here are some good starters!");
    const map1 = Array.from(DOMSelectors.him);
    map1.forEach((el) => html(el));
});

DOMSelectors.btnB.addEventListener("click", function(){
  remove();
    console.log(DOMSelectors.her);
    subhead("pho!", "the best part");
    const map2 = Array.from(DOMSelectors.her);
    map2.forEach((el) => html(el));
});

DOMSelectors.btnC.addEventListener("click", function(){
  remove();
    console.log(DOMSelectors.them);
    subhead("sandwiches!", "it gets even better");
    const map3 = Array.from(DOMSelectors.them);
    map3.forEach((el) => html(el));
    });

DOMSelectors.btnAll.addEventListener("click", function(){
  remove();
  start();
});

document.querySelector(".color").addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
});

