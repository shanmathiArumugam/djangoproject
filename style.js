

document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;
    const cartCounter = document.getElementById("cart-count");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartCounter.textContent = cartCount;
        });
    });
});