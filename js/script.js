let darkmodeEnabled = localStorage.getItem('darkmode') == 'true';
const root = document.documentElement;
const darkmode = document.getElementById('js--darkmodeButton');

if (darkmode) {
    darkmode.addEventListener("click", function() {
        darkmodeEnabled = !darkmodeEnabled;
        localStorage.setItem('darkmode', darkmodeEnabled);
        root.setAttribute('darkmode', darkmodeEnabled);
    });
}

if (darkmodeEnabled) {
    root.setAttribute('darkmode', true);
}

const scmodbuttonOpen = document.getElementById("js--scmod-buttonOpen");
const scmodbuttonClose = document.getElementById("js--scmod-buttonClose");
const scmod = document.getElementById("js--scmod");
let item1 = 0;
let item2 = 0;
let item3 = 0;
let item4 = 0;
let item5 = 0;
let item6 = 0;
let item7 = 0;

scmodbuttonOpen.addEventListener("click", () => {
    scmod.showModal()
});

scmodbuttonClose.addEventListener("click", () => {
    scmod.close()
});

const modal1buttonOpen = document.getElementById("js--modal1-buttonOpen");
const modal1buttonClose = document.getElementById("js--modal1-buttonClose");
const modal1 = document.getElementById("js--modal1");

modal1buttonOpen.addEventListener("click", () => {
    modal1.showModal()
});

modal1buttonClose.addEventListener("click", () => {
    modal1.close()
});

const sect2mod1buttonOpen = document.getElementById("js--sect2mod1-buttonOpen");
const sect2mod1buttonClose = document.getElementById("js--sect2mod1-buttonClose");
const sect2mod1 = document.getElementById("js--sect2mod1");

sect2mod1buttonOpen.addEventListener("click", () => {
    sect2mod1.showModal()
});

sect2mod1buttonClose.addEventListener("click", () => {
    sect2mod1.close()
});

const sect2mod2buttonOpen = document.getElementById("js--sect2mod2-buttonOpen");
const sect2mod2buttonClose = document.getElementById("js--sect2mod2-buttonClose");
const sect2mod2 = document.getElementById("js--sect2mod2");

sect2mod2buttonOpen.addEventListener("click", () => {
    sect2mod2.showModal()
});

sect2mod2buttonClose.addEventListener("click", () => {
    sect2mod2.close()
});

const sect2mod3buttonOpen = document.getElementById("js--sect2mod3-buttonOpen");
const sect2mod3buttonClose = document.getElementById("js--sect2mod3-buttonClose");
const sect2mod3 = document.getElementById("js--sect2mod3");

sect2mod3buttonOpen.addEventListener("click", () => {
    sect2mod3.showModal()
});

sect2mod3buttonClose.addEventListener("click", () => {
    sect2mod3.close()
});

const sect2mod4buttonOpen = document.getElementById("js--sect2mod4-buttonOpen");
const sect2mod4buttonClose = document.getElementById("js--sect2mod4-buttonClose");
const sect2mod4 = document.getElementById("js--sect2mod4");

sect2mod4buttonOpen.addEventListener("click", () => {
    sect2mod4.showModal()
});

sect2mod4buttonClose.addEventListener("click", () => {
    sect2mod4.close()
});

const sect3mod1buttonOpen = document.getElementById("js--sect3mod1-buttonOpen");
const sect3mod1buttonClose = document.getElementById("js--sect3mod1-buttonClose");
const sect3mod1 = document.getElementById("js--sect3mod1");

sect3mod1buttonOpen.addEventListener("click", () => {
    sect3mod1.showModal()
});

sect3mod1buttonClose.addEventListener("click", () => {
    sect3mod1.close()
});

const sect3mod2buttonOpen = document.getElementById("js--sect3mod2-buttonOpen");
const sect3mod2buttonClose = document.getElementById("js--sect3mod2-buttonClose");
const sect3mod2 = document.getElementById("js--sect3mod2");

sect3mod2buttonOpen.addEventListener("click", () => {
    sect3mod2.showModal()
});

sect3mod2buttonClose.addEventListener("click", () => {
    sect3mod2.close()
});

const ATCbut = document.getElementsByClassName("ATCbut");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("item-counter")[0];

for(i=0;i<ATCbut.length;i++){
    ATCbut[i].onclick = function() {
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
    }
}
// let listProductHTML = document.getElementById("test");
// let productList = document.querySelector("listProduct");

// const addDataToHTML = () => {
//     listProductHTML.innerHTML = '';
//     if(listProducts.length > 0){
//         listProducts.forEach(product => {
//             let newProduct = document.createElement('div');
//             newProduct.classList.add("item");
//             newProduct.dataset.id = product.id;
//             newProduct.innerHTML = `
//                 <img src="${product.image}" alt="">
//                 <h2>${product.name}</h2>
//                 <div class="price"$${product.price}</div>
//                 <button class="addCart">
//                 Add to Cart
//                 </button>
//             `;
//             listProductHTML.appendChild(newProduct);
//         })
//     }
// }
// listProductHTML.addEventListener('click', (event) => {
//     let positionClick = event.target;
//     if(positionClick.classList.contains('ATCbut')){
//         alert('1');
//     }
// })

// let listProducts = [];
// const initApp = () => {
//     fetch("products.json")
//     .then(response => response.json())
//     .then(data => {
//         listProducts = data;
//         addDataToHTML();
//     })
// }
// initApp();

let searchbar = document.getElementById("js--searchbar");
const names = document.getElementById("js--names");
searchbar.onkeyup = function(event){
    if(event.keyCode === 13){
        for(let i=0;i<names.length;i++){
            console.log(names[i].dataset.title.search("grass"));
        }
    }
}