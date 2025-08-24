function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let tableBody = document.getElementById('cart-items');
    tableBody.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        let row = `<tr>
            <td>${item.product}</td>
            <td>₪${item.price}</td>
            <td><button class="button-88" role="button" onclick="removeFromCart(${index})">הסר</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
    document.getElementById('total').innerText = 'סה"כ לתשלום: ₪' + total;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function resetCart() {
    localStorage.removeItem('cart');
    loadCart();
}

window.onload = loadCart;


// פונקציה לביצוע תשלום
function payOrder() {
    const orderNumber = Math.floor(Math.random() * 1000000);
    let total = parseFloat(document.getElementById('total').innerText.replace('סה"כ לתשלום: ₪', '')) || 0;

    if (total > 0) {
        alert(`הזמנתך מספר ${orderNumber} התקבלה. מחכים לך במסעדה לתשלום ואיסוף ההזמנה.`);
        localStorage.removeItem('cartItems');
        localStorage.removeItem('total');
        localStorage.removeItem('cart');
        loadCart(); // טוען מחדש את העגלת קניות כדי לעדכן את המצב
        window.location.href = '../home.html';
    } else {
        alert('עדיין לא הזמנת כלום!');
    }
}

