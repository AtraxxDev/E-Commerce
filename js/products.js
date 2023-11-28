let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let pay= document.querySelector('.pay');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})



let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Cloth1.jpg',
        description:"Is a new Skirt",
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'Cloth2.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'Cloth3.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'Cloth24.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'Cloth15.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'Cloth9.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'PRODUCT NAME 1',
        image: 'Cloth10.jpg',
        description:"Is a new Skirt",
        price: 120000
    },
    {
        id: 8,
        name: 'PRODUCT NAME 2',
        image: 'Cloth11.jpg',
        price: 120000
    },
    {
        id: 9,
        name: 'PRODUCT NAME 3',
        image: 'Cloth13.jpg',
        price: 220000
    },
    {
        id: 10,
        name: 'PRODUCT NAME 4',
        image: 'Cloth6.jpg',
        price: 123000
    },
    {
        id: 11,
        name: 'PRODUCT NAME 5',
        image: 'Cloth18.jpg',
        price: 320000
    },
    {
        id: 12,
        name: 'PRODUCT NAME 6',
        image: 'Cloth8.jpg',
        price: 120000
    },
    {
        id: 13,
        name: 'PRODUCT NAME 2',
        image: 'Cloth14.jpg',
        price: 120000
    },
    {
        id: 14,
        name: 'PRODUCT NAME 3',
        image: 'Cloth16.jpg',
        price: 220000
    },
    {
        id: 15,
        name: 'PRODUCT NAME 4',
        image: 'Cloth17.jpg',
        price: 123000
    },
    {
        id: 16,
        name: 'PRODUCT NAME 5',
        image: 'Cloth7.jpg',
        price: 320000
    },
    {
        id: 17,
        name: 'PRODUCT NAME 6',
        image: 'Cloth20.jpg',
        price: 120000
    },
    {
        id: 18,
        name: 'PRODUCT NAME 1',
        image: 'Cloth23.jpg',
        description:"Is a new Skirt",
        price: 120000
    },
    {
        id: 19,
        name: 'PRODUCT NAME 2',
        image: 'Cloth4.jpg',
        price: 120000
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Agregar al carrito</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}