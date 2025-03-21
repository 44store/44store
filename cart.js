// Initialize the cart as an empty array
let cart = [];

// Add an item to the cart
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartDisplay();
}

// Update the cart display (cart icon and modal)
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Update cart item count
    cartCount.textContent = cart.length;

    // Update cart items list
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    // Update the total price
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Toggle the cart modal visibility
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'none' || cartModal.style.display === '' ? 'flex' : 'none';
}

// Close the cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Checkout function (for now just a placeholder)
function checkout() {
    alert('Proceeding to checkout...');
    cart = [];  // Clear the cart after checkout
    updateCartDisplay();
}
