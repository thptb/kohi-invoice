// Product data
const products = [
    { id: 1, name: 'Bussin Barista', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 2, name: 'Rizz Mocha', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 3, name: 'Lit Caramel', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 4, name: 'Creamy Caramel Vanilla', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 5, name: 'Its Giving Vanilla', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 6, name: 'Sheesh! White Mocha Caramel', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 7, name: 'Eyy! White Choco Mocha', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 8, name: 'Its a Vibe Matcha', type: 'Non-Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 9, name: 'Dirty Matcha', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 10, name: 'Iced Americano', type: 'Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 11, name: 'Choco Caramel', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 12, name: 'Milk Choco', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 13, name: 'Eyyy! Spanish Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 14, name: 'Sugar Rushin', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 15, name: 'Tiramisu Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 16, name: 'Strawberry Milk', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 17, name: 'Strawberry Choco', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 18, name: 'Strawberry Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 19, name: 'Strawberry Matcha', type: 'Non-Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 20, name: 'Peppermint Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 21, name: 'Peppermint Mocha', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 22, name: 'Brown Sugar Milk', type: 'Non-Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 23, name: 'Brown Sugar Espresso', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 24, name: 'Brown Sugar Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 25, name: 'Brown Sugar Vanilla', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 26, name: 'Brewed', type: 'Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 27, name: 'Hot Lemon Black Tea', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 28, name: 'Hot Americano', type: 'Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 29, name: 'Iced Lemon Black Tea', type: 'Juice', price: 49, image: 'assets/product-images/default.png' },
    { id: 30, name: 'Green Apple Fruit Tea', type: 'Juice', price: 49, image: 'assets/product-images/default.png' },
    { id: 31, name: 'Perfect Peach Iced Tea', type: 'Juice', price: 59, image: 'assets/product-images/default.png' },
    { id: 32, name: 'Strawberry Tea', type: 'Juice', price: 49, image: 'assets/product-images/default.png' },
    { id: 33, name: 'Classic Milk Tea', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 34, name: 'Tuna Bunwich', type: 'Snack', price: 19, image: 'assets/product-images/default.png' },
    { id: 35, name: 'Egg Bunwich', type: 'Snack', price: 19, image: 'assets/product-images/default.png' },
    { id: 36, name: 'Affogato', type: 'Snack', price: 39, image: 'assets/product-images/default.png' },
    { id: 37, name: 'Vanilla Ice Cream', type: 'Snack', price: 86, image: 'assets/product-images/default.png' },
    { id: 38, name: 'Tiramisu', type: 'Snack', price: 39, image: 'assets/product-images/default.png' },
    { id: 39, name: 'Cozy Sunset Vibes', type: 'Mocktail', price: 89, image: 'assets/product-images/default.png' },
    { id: 40, name: 'Lychee Blossom', type: 'Mocktail', price: 89, image: 'assets/product-images/default.png' },
    { id: 41, name: 'Vanilla Coffee Caramel 900', type: 'Snack', price: 111, image: 'assets/product-images/default.png' },
    { id: 42, name: 'Vanilla Coffee Caramel', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 43, name: 'Vanilla Matcha', type: 'Non-Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 44, name: 'Citrus Blush Slay', type: 'Juice', price: 59, image: 'assets/product-images/default.png' },
    { id: 45, name: 'Spanish Cold Brew Americano', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 46, name: 'Chocolate Caramel Cold Brew', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' }
];

// Addon data
const addons = [
    { id: 1, name: 'Extra Shot', price: 25, image: 'assets/addon-images/default.png' },
    { id: 2, name: 'Nata', price: 15, image: 'assets/addon-images/default.png' },
    { id: 3, name: 'Caramel Syrup', price: 15, image: 'assets/addon-images/default.png' },
    { id: 4, name: 'Caramel Drizzle', price: 15, image: 'assets/addon-images/default.png' },
    { id: 5, name: 'Choco Syrup', price: 15, image: 'assets/addon-images/default.png' },
    { id: 6, name: 'Choco Drizzle', price: 15, image: 'assets/addon-images/default.png' }
];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const addonsGrid = document.getElementById('addons-grid');
const cartItems = document.getElementById('cart-items');
const subtotalElement = document.getElementById('subtotal');
const deliveryFeeElement = document.getElementById('delivery-fee');
const totalElement = document.getElementById('total');
const customerNameInput = document.getElementById('customer-name');
const serviceTypeSelect = document.getElementById('service-type');
const addonTypeSelect = document.getElementById('addon-type');
const clearBtn = document.getElementById('clear-btn');
const generateInvoiceBtn = document.getElementById('generate-invoice-btn');
const invoiceModal = document.getElementById('invoice-modal');
const closeBtn = document.querySelector('.close-btn');
const invoiceContent = document.getElementById('invoice-content');
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const addonsContainer = document.getElementById('addons-container');

// Cart state
let cart = [];
let currentProductId = null;
let currentAddonItemIndex = -1;

// Initialize the app
function init() {
    renderProducts();
    renderAddons();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    setupEventListeners();
    checkGenerateInvoiceButton();
    updateProductAvailability();
    disableAddons();
}

// Render products with category filtering
function renderProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.dataset.productId = product.id;
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-price">₱${product.price.toFixed(2)}</div>
        `;
        productElement.addEventListener('click', () => {
            if (!productElement.classList.contains('disabled')) {
                // Highlight selected product
                document.querySelectorAll('.product-item').forEach(item => {
                    item.classList.remove('selected');
                });
                productElement.classList.add('selected');
                
                addToCart(product);
            }
        });
        productsGrid.appendChild(productElement);
    });
    updateProductAvailability();
}

// Filter products by category
function filterProductsByCategory(category) {
    if (category === 'all') {
        document.querySelectorAll('.product-item').forEach(item => {
            item.style.display = 'flex';
        });
    } else {
        document.querySelectorAll('.product-item').forEach(item => {
            const productId = parseInt(item.dataset.productId);
            const product = products.find(p => p.id === productId);
            item.style.display = product.type === category ? 'flex' : 'none';
        });
    }
}

// Disable all addons initially
function disableAddons() {
    document.querySelectorAll('.addon-item').forEach(item => {
        item.classList.add('disabled');
    });
}

// Enable addons when a product is selected for addons
function enableAddons() {
    document.querySelectorAll('.addon-item').forEach(item => {
        item.classList.remove('disabled');
    });
}

// Update product availability based on form completion
function updateProductAvailability() {
    const isFormComplete = customerNameInput.value.trim() !== '' && serviceTypeSelect.value !== '';
    
    document.querySelectorAll('.product-item').forEach(item => {
        if (isFormComplete) {
            item.classList.remove('disabled');
        } else {
            item.classList.add('disabled');
        }
    });

    // Update addon type dropdown
    addonTypeSelect.disabled = !isFormComplete;
    if (!isFormComplete) {
        addonTypeSelect.value = '';
        addonsContainer.style.display = 'none';
        currentProductId = null;
        currentAddonItemIndex = -1;
        disableAddons();
    }
}

// Add product to cart
function addToCart(product) {
    const wantsAddons = addonTypeSelect.value === 'Yes';
    
    if (wantsAddons) {
        // Create new item for addons
        const newItem = {
            product,
            quantity: 1,
            addons: []
        };
        cart.push(newItem);
        currentProductId = product.id;
        currentAddonItemIndex = cart.length - 1;
        addonsContainer.style.display = 'block';
        enableAddons();
    } else {
        // Check for existing item without addons
        const existingIndex = cart.findIndex(item => 
            item.product.id === product.id && 
            item.addons.length === 0
        );
        
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                product,
                quantity: 1,
                addons: []
            });
        }
        disableAddons();
    }
    
    renderCart();
    updateTotals();
    checkGenerateInvoiceButton();
}

// Add addon to cart item
function addAddonToCartItem(addon) {
    if (currentAddonItemIndex === -1) return;
    
    const existingAddonIndex = cart[currentAddonItemIndex].addons.findIndex(a => a.id === addon.id);
    
    if (existingAddonIndex !== -1) {
        cart[currentAddonItemIndex].addons[existingAddonIndex].quantity += 1;
    } else {
        cart[currentAddonItemIndex].addons.push({
            ...addon,
            quantity: 1
        });
    }
    
    renderCart();
    updateTotals();
}

// Remove addon from cart item
function removeAddonFromCartItem(itemIndex, addonIndex) {
    if (itemIndex >= 0 && itemIndex < cart.length) {
        if (addonIndex >= 0 && addonIndex < cart[itemIndex].addons.length) {
            if (cart[itemIndex].addons[addonIndex].quantity > 1) {
                cart[itemIndex].addons[addonIndex].quantity -= 1;
            } else {
                cart[itemIndex].addons.splice(addonIndex, 1);
            }
            renderCart();
            updateTotals();
        }
    }
}

// Render addons
function renderAddons() {
    addonsGrid.innerHTML = '';
    addons.forEach(addon => {
        const addonElement = document.createElement('div');
        addonElement.className = 'addon-item disabled';
        addonElement.dataset.addonId = addon.id;
        addonElement.innerHTML = `
            <img src="${addon.image}" alt="${addon.name}" class="addon-image">
            <div class="addon-name">${addon.name}</div>
            <div class="addon-price">₱${addon.price.toFixed(2)}</div>
        `;
        addonElement.addEventListener('click', () => {
            if (!addonElement.classList.contains('disabled')) {
                // Highlight selected addon
                document.querySelectorAll('.addon-item').forEach(item => {
                    item.classList.remove('selected');
                });
                addonElement.classList.add('selected');
                
                addAddonToCartItem(addon);
            }
        });
        addonsGrid.appendChild(addonElement);
    });
}

// Render cart items with improved addon display
function renderCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in cart</p>';
        addonsContainer.style.display = 'none';
        currentProductId = null;
        currentAddonItemIndex = -1;
        disableAddons();
        return;
    }
    
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        
        const itemInfoElement = document.createElement('div');
        itemInfoElement.className = 'cart-item-info';
        
        let addonsHTML = '';
        if (item.addons.length > 0) {
            addonsHTML = `<div class="cart-item-addons"><strong>Addons:</strong><ul>`;
            item.addons.forEach((addon, addonIndex) => {
                addonsHTML += `
                    <li>
                        ${addon.name} x${addon.quantity} 
                        <button class="delete-addon-btn" data-item-index="${index}" data-addon-index="${addonIndex}">
                            ✕
                        </button>
                    </li>
                `;
            });
            addonsHTML += `</ul></div>`;
        }
        
        itemInfoElement.innerHTML = `
            <div class="cart-item-name">${item.product.name} x${item.quantity}</div>
            ${addonsHTML}
            <div class="cart-item-price">₱${calculateItemTotal(item).toFixed(2)}</div>
        `;
        
        const quantityControls = document.createElement('div');
        quantityControls.className = 'cart-item-quantity';
        quantityControls.innerHTML = `
            <button class="quantity-btn minus" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" data-index="${index}">+</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        
        cartItemElement.appendChild(itemInfoElement);
        cartItemElement.appendChild(quantityControls);
        cartItems.appendChild(cartItemElement);
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            decreaseQuantity(index);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            increaseQuantity(index);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            removeItem(index);
        });
    });
    
    // Add event listeners to addon delete buttons
    document.querySelectorAll('.delete-addon-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemIndex = parseInt(e.target.getAttribute('data-item-index'));
            const addonIndex = parseInt(e.target.getAttribute('data-addon-index'));
            removeAddonFromCartItem(itemIndex, addonIndex);
        });
    });
}

// Calculate item total
function calculateItemTotal(item) {
    const productTotal = item.product.price * item.quantity;
    const addonsTotal = item.addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);
    return productTotal + addonsTotal;
}

// Update order totals
function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);
    
    let deliveryFee = 0;
    const serviceType = serviceTypeSelect.value;
    
    if (serviceType === 'Delivery') {
        const drinkCount = cart.reduce((count, item) => {
            return count + (['Coffee', 'Non-Coffee', 'Juice', 'Mocktail'].includes(item.product.type) ? item.quantity : 0);
        }, 0);
        
        if (drinkCount === 2) {
            deliveryFee = 40;
        } else if (drinkCount === 3) {
            deliveryFee = 20;
        } else if (drinkCount >= 4) {
            deliveryFee = 0;
        }
    }
    
    const total = subtotal + deliveryFee;
    
    subtotalElement.textContent = `₱${subtotal.toFixed(2)}`;
    if (serviceType === 'Delivery' && deliveryFee > 0) {
        document.querySelector('.delivery-fee').style.display = 'flex';
        deliveryFeeElement.textContent = `₱${deliveryFee.toFixed(2)}`;
    } else {
        document.querySelector('.delivery-fee').style.display = 'none';
        deliveryFeeElement.textContent = '₱0.00';
    }
    totalElement.textContent = `₱${total.toFixed(2)}`;
}

// Quantity adjustment functions
function increaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += 1;
        renderCart();
        updateTotals();
        checkGenerateInvoiceButton();
    }
}

function decreaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        renderCart();
        updateTotals();
        checkGenerateInvoiceButton();
    }
}

function removeItem(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        renderCart();
        updateTotals();
        checkGenerateInvoiceButton();
    }
}

// Clear cart
function clearCart() {
    cart = [];
    customerNameInput.value = '';
    serviceTypeSelect.value = '';
    addonTypeSelect.value = '';
    addonTypeSelect.disabled = true;
    currentProductId = null;
    currentAddonItemIndex = -1;
    addonsContainer.style.display = 'none';
    renderCart();
    updateTotals();
    checkGenerateInvoiceButton();
    updateProductAvailability();
    disableAddons();
}

// Update date and time
function updateDateTime() {
    const now = new Date();
    currentDateElement.textContent = now.toLocaleDateString();
    currentTimeElement.textContent = now.toLocaleTimeString();
}

// Check if generate invoice button should be enabled
function checkGenerateInvoiceButton() {
    generateInvoiceBtn.disabled = !(
        customerNameInput.value.trim() && 
        serviceTypeSelect.value && 
        cart.length > 0
    );
}

// Generate invoice with consistent styling
function generateInvoice() {
    const customerName = customerNameInput.value;
    const serviceType = serviceTypeSelect.value;
    const now = new Date();
    const subtotal = parseFloat(subtotalElement.textContent.replace('₱', ''));
    const deliveryFee = parseFloat(deliveryFeeElement.textContent.replace('₱', '')) || 0;
    const total = parseFloat(totalElement.textContent.replace('₱', ''));
    
    let invoiceHTML = `
        <div class="invoice" id="invoice-to-download">
            <div class="invoice-header">
                <img src="assets/invoice.png" alt="1521KOHI Logo" class="invoice-logo">
                <h2>1521kohi</h2>
                <p>Our latte slaps, No cap</p>
                <p>G.C.S.R.L</p>
            </div>
            
            <div class="invoice-details">
                <h3>INVOICE</h3>
            </div>

            <div class="invoice-meta">
                <div class="invoice-date">
                    <p><strong>Date:</strong> ${now.toLocaleDateString()}</p>
                    <p><strong>Time:</strong> ${now.toLocaleTimeString()}</p>
                </div>
                <div class="invoice-data">
                    <p><strong>Customer:</strong> ${customerName}</p>
                    <p><strong>Service:</strong> ${serviceType}</p>
                </div>
            </div>

            <table class="invoice-items">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    cart.forEach(item => {
        invoiceHTML += `
            <tr>
                <td>${item.product.name}</td>
                <td>${item.quantity}</td>
                <td>₱${item.product.price.toFixed(2)}</td>
                <td>₱${(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
        
        item.addons.forEach(addon => {
            invoiceHTML += `
                <tr>
                    <td>+ ${addon.name}</td>
                    <td>${addon.quantity}</td>
                    <td>₱${addon.price.toFixed(2)}</td>
                    <td>₱${(addon.price * addon.quantity).toFixed(2)}</td>
                </tr>
            `;
        });
    });

    invoiceHTML += `
                </tbody>
            </table>
            
            <div class="invoice-totals">
                <div class="invoice-subtotal">
                    <span>Subtotal:</span>
                    <span>₱${subtotal.toFixed(2)}</span>
                </div>
    `;

    if (serviceType === 'Delivery' && deliveryFee > 0) {
        invoiceHTML += `
                <div class="invoice-delivery">
                    <span>Delivery Fee:</span>
                    <span>₱${deliveryFee.toFixed(2)}</span>
                </div>
        `;
    }

    invoiceHTML += `
                <div class="invoice-total">
                    <span>Total:</span>
                    <span>₱${total.toFixed(2)}</span>
                </div>
            </div>
            
            <div class="invoice-footer">
                <p>Thank you for your order!</p>
            </div>
        </div>
    `;
    
    invoiceContent.innerHTML = invoiceHTML;
    
    // Clear existing buttons and add new ones
    const modalFooter = document.querySelector('.modal-footer');
    modalFooter.innerHTML = '';
    
    const printBtn = document.createElement('button');
    printBtn.className = 'btn';
    printBtn.textContent = 'Print Invoice';
    printBtn.addEventListener('click', printInvoice);
    modalFooter.appendChild(printBtn);
    
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn primary';
    downloadBtn.textContent = 'Download Invoice';
    downloadBtn.addEventListener('click', downloadInvoice);
    modalFooter.appendChild(downloadBtn);
    
    invoiceModal.style.display = 'block';
}
// Print invoice with consistent styling
function printInvoice() {
    const invoiceElement = document.getElementById('invoice-to-download');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>1521kohi Invoice</title>
                <style>
                    body { 
                        font-family: 'Proxima Nova', sans-serif; 
                        margin: 0; 
                        padding: 20px; 
                        color: #111376;
                    }
                    .invoice { 
                        width: 80mm; 
                        font-size: 12px; 
                        margin: 0 auto; 
                    }
                    .invoice-header { 
                        text-align: center; 
                        margin-bottom: 10px; 
                    }
                    .invoice-logo { 
                        height: 40px; 
                    }
                    .invoice-details { 
                        text-align: center; 
                        margin-bottom: 10px; 
                    }
                    .invoice-details h3 {
                        margin-bottom: 5px;
                    }
                    .invoice-meta {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;
                        font-size: 11px;
                    }
                    .invoice-items { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin: 10px 0; 
                        font-size: 11px; 
                    }
                    .invoice-items th { 
                        background-color: #111376; 
                        color: white; 
                        text-align: center; 
                        padding: 5px; 
                        border: 1px solid #ddd; 
                    }
                    .invoice-items td { 
                        padding: 5px; 
                        border: 1px solid #ddd; 
                        text-align: center; 
                    }
                    .invoice-totals { 
                        margin-top: 10px; 
                        font-size: 12px; 
                    }
                    .invoice-subtotal,
                    .invoice-delivery,
                    .invoice-total { 
                        display: flex; 
                        justify-content: space-between; 
                        margin-bottom: 5px; 
                    }
                    .invoice-total { 
                        font-weight: bold; 
                        margin-top: 8px; 
                        padding-top: 8px; 
                        border-top: 1px solid #ddd; 
                    }
                    .invoice-footer { 
                        text-align: center; 
                        margin-top: 15px; 
                        font-size: 10px; 
                    }
                </style>
            </head>
            <body>
                ${invoiceElement.outerHTML}
                <script>
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                            window.close();
                        }, 200);
                    };
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
}

// Download invoice as image
function downloadInvoice() {
    const invoiceElement = document.getElementById('invoice-to-download');
    
    html2canvas(invoiceElement).then(canvas => {
        const link = document.createElement('a');
        link.download = `1521kohi-invoice-${new Date().getTime()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Setup event listeners
function setupEventListeners() {
    clearBtn.addEventListener('click', clearCart);
    generateInvoiceBtn.addEventListener('click', generateInvoice);
    closeBtn.addEventListener('click', () => {
        invoiceModal.style.display = 'none';
    });
    
    customerNameInput.addEventListener('input', () => {
        checkGenerateInvoiceButton();
        updateProductAvailability();
    });
    
    serviceTypeSelect.addEventListener('change', () => {
        updateTotals();
        checkGenerateInvoiceButton();
        updateProductAvailability();
        addonTypeSelect.value = '';
        addonTypeSelect.disabled = !(customerNameInput.value.trim() && serviceTypeSelect.value);
        addonsContainer.style.display = 'none';
        disableAddons();
    });
    
    addonTypeSelect.addEventListener('change', () => {
        if (addonTypeSelect.value === 'No') {
            addonsContainer.style.display = 'none';
            currentProductId = null;
            currentAddonItemIndex = -1;
            disableAddons();
        } else if (addonTypeSelect.value === 'Yes') {
            if (cart.length > 0) {
                currentProductId = cart[cart.length - 1].product.id;
                currentAddonItemIndex = cart.length - 1;
                addonsContainer.style.display = 'block';
                enableAddons();
            } else {
                alert('Please add a product first before selecting addons');
                addonTypeSelect.value = '';
            }
        }
    });
    
    // Category tab event listeners
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            filterProductsByCategory(tab.dataset.category);
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === invoiceModal) {
            invoiceModal.style.display = 'none';
        }
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);