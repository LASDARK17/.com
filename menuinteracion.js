const products = [
  { id: 1, name: "Combo Montana Burger + Bebida", price: 24900 },
  { id: 2, name: "Super Papas Locas Especiales", price: 32900 },
  { id: 3, name: "Super Chuzo De 4 Carnes", price: 32900 },
  { id: 4, name: "Super Hot Dog", price: 32900 }
  
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartUI();
  updateCartCount();
  showCart();  // Aquí se abre el modal automáticamente
}

function addToWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || wishlist.find(p => p.id === productId)) return;
  wishlist.push(product);
  saveWishlist();
  updateWishlistUI();
  updateWishlistCount();
  showWishlist();
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(p => p.id !== productId);
  saveWishlist();
  updateWishlistUI();
  updateWishlistCount();
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartEmptyMessage = document.getElementById("cart-empty-message");
  const cartTotal = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartEmptyMessage.style.display = "block";
    cartTotal.textContent = "0.00";
    return;
  }
  cartEmptyMessage.style.display = "none";

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsContainer.appendChild(itemDiv);
  });

  cartTotal.textContent = total.toFixed(2);
}

function updateWishlistUI() {
  const container = document.getElementById("wishlist-items");
  const emptyMessage = document.getElementById("wishlist-empty-message");

  container.innerHTML = "";
  if (wishlist.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }
  emptyMessage.style.display = "none";

  wishlist.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeFromWishlist(${item.id})">Quitar</button>
    `;
    container.appendChild(itemDiv);
  });
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

function updateWishlistCount() {
  document.getElementById("wishlist-count").textContent = wishlist.length;
}

function showCart() {
  document.getElementById("cart-modal").classList.add("active");
}

function hideCart() {
  document.getElementById("cart-modal").classList.remove("active");
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  updateCartCount();
}

function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("\u00a1Gracias por tu compra!");
  clearCart();
  hideCart();
}

function showWishlist() {
  document.getElementById("wishlist-modal").classList.add("active");
}

function hideWishlist() {
  document.getElementById("wishlist-modal").classList.remove("active");
}

// Función para manejar clic en botón de oferta (si usas botones con data-id)
function handleOfferClick(event) {
  const button = event.currentTarget;
  const productId = parseInt(button.getAttribute('data-id'));
  addToCart(productId);
}

// Cerrar modales al hacer clic fuera
window.addEventListener("click", function (e) {
  if (e.target === document.getElementById("cart-modal")) hideCart();
  if (e.target === document.getElementById("wishlist-modal")) hideWishlist();
});

// Inicializar UI al cargar página
window.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
  updateWishlistUI();
  updateCartCount();
  updateWishlistCount();
});

