function showCategory(category) {
    let categories = document.getElementsByClassName('menu-category');
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
    document.getElementById(category).style.display = 'block';
}


function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product: product, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} has been added to your cart!`);
}