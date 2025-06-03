// Filtra los artículos del menú según la categoría seleccionada
function filterMenu(category) {
  const cards = document.querySelectorAll('#menu-grid .card');

  cards.forEach(card => {
    // Si es "all" se muestran todos, si no, solo los que coinciden con data-type
    if (category === 'all' || card.dataset.type === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Simulación de agregar al carrito
function addToCart(id) {
  // Aquí podrías agregar lógica para agregar el producto a un carrito real
  console.log(`Producto con id ${id} agregado al carrito`);
  alert(`Producto con id ${id} agregado al carrito`);
}

// Para que cuando cargue la página se muestren todos los productos
document.addEventListener('DOMContentLoaded', () => {
  filterMenu('all');
});



const products = [
  { id: 1, name: "Hamburguesa Clásica", price: 20000 },
  { id: 2, name: "Papas Locas Especiales", price: 19999 },
  { id: 3, name: "Chuzos", price: 15999 },
  { id: 4, name: "Switz Dog", price: 15999 }
];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  // No mostrar alert ni modal aquí
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

function showCart() {
  const cartModal = document.getElementById("cart-modal");
  const cartList = document.getElementById("cart-items-list");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>El carrito está vacío.</li>";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} x ${item.quantity} = $${(item.price * item.quantity).toLocaleString()}
        <button onclick="removeFromCart(${index})">❌</button>
      `;
      cartList.appendChild(li);
    });
  }

  cartModal.classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  showCart();
}