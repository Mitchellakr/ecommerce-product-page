
const add = document.querySelector(".add"),
    num = document.querySelector(".num"),
    menu = document.querySelector(".menu"),
    minus = document.querySelector(".minus");
const cartCount = document.querySelector("#cart-count");
const cartMenu = document.querySelector(".cart-menu");
const cartImg = document.querySelector("#cartImg");
const nav = document.querySelector(".nav");

// this is the program for the incremental and decremental button
let a = 1;

add.addEventListener("click", () => {
    a++;
    num.innerText = a;
});

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        num.innerText = a;
    }
});

// this is the program for the product pick

let slideIndex = 1;
showSlides(slideIndex);

//Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// this program is to add the number of product ordered to the cart count

const cartAdd = document.querySelector(".add-to-cart");

cartAdd.addEventListener("click", (e) => {
    cartCount.innerText = a;

    // this program is to add the product to the cart body

    const cartBody = document.querySelector(".cart-body");
    if (cartCount.innerText == 0) {
        cartBody.innerText = "Your cart is empty";
    }
    else {
        // cartBody.innerHTML = "fuck you bitch";
        cartBody.innerHTML = `<div class="selected-product">
        <div class="product">
             <img class="thumbnail" src="images/image-product-1-thumbnail.jpg">
             <div class="product-info">
             <p>Autumn Limited Edition...</p>
             <p>$125 x ${a} <b style=color="var(--black-color)">$${a * 125}</b>
             </div>
             <img id="delete-btn" src="images/icon-delete.svg">
        </div>
        <div class="add-to-cart">Checkout</div>
        </div>`;

        const deleteBtn = document.querySelector("#delete-btn").addEventListener(('click'), (t) => {
            console.log('hello');
        });
    }
});



// this program shows and remove the cart menu

cartImg.addEventListener("click", (r) => {

    if (cartMenu.style.opacity == 0) {
        cartMenu.style.opacity = "1";
    }
    else {
        cartMenu.style.opacity = "0";
    }
});


// this program controls the burger transformation and display the mobile menu

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("navopen");
})



