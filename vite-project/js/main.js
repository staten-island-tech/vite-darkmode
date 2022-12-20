import '../styles/style.css';
// import AOS from "aos";
// AOS.init();
import {menu} from "./menu";
console.log(menu);

function appetizerFilter(){
menu.filter((el)=> el.type === "Appetizer") 
.forEach((el)=> {
    console.log(el.name);
})
};

function phoFilter(){
menu.filter((el)=> el.type === "Pho")
.forEach((el)=> {
    console.log(el.name);
})
}

function sandwichFilter(){
menu.filter((el)=> el.type === "Banh Mi")
.forEach((el)=> {
    console.log(el.name);
})
}

appetizerFilter();
phoFilter();
sandwichFilter();

const DOMSelectors={
    btnA: document.querySelector(".btnA"),
    btnB: document.querySelector(".btnB"),
    btnC: document.querySelector(".btnC"),
    appDisplay: document.querySelector(".appetizers"),
    phoDisplay: document.querySelector(".noodleSoup"),
    sandDisplay: document.querySelector(".sandwiches"),
};

DOMSelectors.btnA.addEventListener("click", function(){
    const app ={};
    app.name = menu[0,1,2].name.value;
    app.description = menu[0,1,2].description.value;
    app.price = menu[0,1,2].price.value;
    html(app);
})

function html(app){
    DOMSelectors.appDisplay.insertAdjacentHTML(
        "afterbegin",
        `<div class="dish-card">
        <h3 class="dish-name">${app.name}</h3>
        <h4 class="dish-description">${app.description}</h4>
        <h4 class="dish-name">${app.price}</h4>
        </div>`
    )
}