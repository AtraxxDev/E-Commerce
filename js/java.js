const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon'); 
let navmenu = document.querySelector('.navmenu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
    const quantityElement = document.getElementById('quantity');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    // Increment quantity
    incrementButton.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityElement.textContent);
        currentQuantity++;
        quantityElement.textContent = currentQuantity;
    });

    // Decrement quantity, but not below 1
    decrementButton.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityElement.textContent = currentQuantity;
        }
    });
});