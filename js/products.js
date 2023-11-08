let openShoppping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity')

openShoppping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        Image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        Image: '2.PNG',
        price: 130000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        Image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        Image: '4.PNG',
        price: 125000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        Image: '5.PNG',
        price: 150000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        Image: '6.PNG',
        price: 160000
    }, 
];

let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv
    })
}