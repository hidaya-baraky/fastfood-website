let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex - 1].style.display = "block";  
}

function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + " has been added to your cart!");
}


//contact.html
function ValidateContactForm() {
    var name = document.ContactForm.Name;
    var email = document.ContactForm.Email;   
    var phone = document.ContactForm.Telephone;
    var nocall = document.ContactForm.DoNotCall;
    var what = document.ContactForm.Subject;
    var comment = document.ContactForm.Comment;

    // Validate name
    if (name.value.trim() === "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    
    // Validate email
    if (email.value.trim() === "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    
    if (!validateEmail(email.value)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    
    // Validate phone number
    if (!nocall.checked && phone.value.trim() === "") {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }

    // Validate subject
    if (what.selectedIndex < 1) {
        alert("Please tell us how we can help you.");
        what.focus();
        return false;
    }

    // Validate comment
    if (comment.value.trim() === "") {
        window.alert("Please provide a detailed description or comment.");
        comment.focus();
        return false;
    }
    return true;
}

function validateEmailInput(input) {
    // Regular expression for matching valid email characters (English letters, numbers, and some symbols)
    var validChars = /^[a-zA-Z0-9._%+-@]*$/;

    // Check if the input value contains only valid characters
    if (!validChars.test(input.value)) {
        // Replace invalid characters with an empty string
        input.value = input.value.replace(/[^a-zA-Z0-9._%+-@]/g, '');
    }
}

function EnableDisable(chkbx) {
    var phoneField = document.ContactForm.Telephone;
    phoneField.disabled = chkbx.checked;
}

function validatePhoneNumber(input) {
    var validChars = /^[0-9]*$/;
    if (!validChars.test(input.value)) {
        input.value = input.value.replace(/[^0-9]/g, '');
    }
}


