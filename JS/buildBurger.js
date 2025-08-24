function toggleCheeseOptions(show) {
    document.getElementById('cheeseOptions').style.display = show ? 'block' : 'none';
}

function validateForm() {
    const form = document.getElementById('burgerForm');
    if (form.checkValidity()) {
        showOrderSummary();
    } else {
        alert('Please fill out all required fields.');
    }
}

function calculateTotal() {
    let total = 0;

    // מחירי בשר
    const meat = document.querySelector('input[name="meat"]:checked');
    if (meat) {
        const meatPrices = {
            "150 גרם": 35,
            "220 גרם": 43,
            "300 גרם": 50,
            "450 גרם": 68
        };
        total += meatPrices[meat.value];
    }

    // מחירי גבינה
    if (document.querySelector('input[name="cheese"]:checked').value === 'כן') {
        const cheeseTypes = document.querySelectorAll('input[name="cheeseType"]:checked');
        cheeseTypes.forEach(cheese => {
            const cheesePrices = {
                "גבינת גאודה": 12,
                "גבינת גאודה פסטו": 10,
                "גבינת צ'דר": 8,
                "גבינת פרמז'ן רז'יאני": 12
            };
            total += cheesePrices[cheese.value];
        });
    }

    // מחירי תוספות
    const extras = document.querySelectorAll('input[name="extras"]:checked');
    extras.forEach(extra => {
        const extraPrices = {
            "אבוקדו": 5,
            "אננס": 8,
            "שמנת פטריות": 10,
            "חזה אווז": 8,
            "אסאדו": 20,
            "אנטרקוט": 15
        };
        total += extraPrices[extra.value];
    });

    return total;
}

function showOrderSummary() {
    const form = document.getElementById('burgerForm');
    let summaryText = 'Your custom burger includes:<br>';

    summaryText += `Bread: ${form.bread.value}<br>`;
    summaryText += `Meat: ${form.meat.value}<br>`;
    summaryText += `Doneness: ${form.doneness.value}<br>`;
    summaryText += 'Veggies: ';
    const veggies = Array.from(form.querySelectorAll('input[name="veggies"]:checked')).map(checkbox => checkbox.value);
    summaryText += veggies.length > 0 ? veggies.join(', ') : 'None';
    summaryText += '<br>';
    
    if (form.cheese.value === 'כן') {
        summaryText += 'Cheese: ';
        const cheeseTypes = Array.from(form.querySelectorAll('input[name="cheeseType"]:checked')).map(checkbox => checkbox.value);
        summaryText += cheeseTypes.length > 0 ? cheeseTypes.join(', ') : 'None';
        summaryText += '<br>';
    }

    summaryText += 'Extras: ';
    const extras = Array.from(form.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);
    summaryText += extras.length > 0 ? extras.join(', ') : 'None';
    summaryText += '<br>';

    const notes = form.notes.value;
    summaryText += `Notes: ${notes ? notes : 'None'}<br>`;

    const total = calculateTotal();
    summaryText += `<strong>Total Price: ${total} ש"ח</strong><br>`;

    document.getElementById('summaryText').innerHTML = summaryText;
    document.getElementById('burgerForm').style.display = 'none';
    document.getElementById('orderSummary').style.display = 'block';
}

function editOrder() {
    document.getElementById('orderSummary').style.display = 'none';
    document.getElementById('burgerForm').style.display = 'block';
}

function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Your order has been confirmed!');
}


