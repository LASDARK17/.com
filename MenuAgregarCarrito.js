// Base de datos de productos simulada
    const products = [
      { id: 1, name: "Hamburguesa Clásica", price: 20000 },
      { id: 2, name: "Papas Locas Especiales", price: 19999 },
      { id: 3, name: "Chuzos", price: 15999 },
      { id: 4, name: "Switz Dog", price: 15999 }
    ];

    let cart = [];

    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;

      const item = cart.find(i => i.id === productId);
      if (item) {
        item.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      updateCartUI();
      showCart();
    }

    function updateCartUI() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartEmptyMessage = document.getElementById("cart-empty-message");
      const cartTotal = document.getElementById("cart-total");
      const cartCount = document.getElementById("cart-count");

      cartItemsContainer.innerHTML = "";
      if (cart.length === 0) {
        cartEmptyMessage.style.display = "block";
        cartTotal.textContent = "0.00";
        cartCount.textContent = "0";
        return;
      }

      cartEmptyMessage.style.display = "none";
      let total = 0;
      let count = 0;

      cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsContainer.appendChild(itemDiv);
      });

      cartTotal.textContent = total.toFixed(2);
      cartCount.textContent = count;
    }

    function showCart() {
      document.getElementById("cart-modal").classList.add("active");
    }

    function hideCart() {
      document.getElementById("cart-modal").classList.remove("active");
    }

    function clearCart() {
      cart = [];
      updateCartUI();
    }

    function checkout() {
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      alert("¡Gracias por tu compra! Procesando pedido...");
      clearCart();
      hideCart();
    }

    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById("cart-modal").addEventListener("click", function(e) {
      if (e.target === this) {
        hideCart();
      }
    });

    // Inicializar carrito al cargar la página
    updateCartUI();

    // Filtrar menú según categoría
    function filterMenu(category) {
      const items = document.querySelectorAll("#menu-grid .card");
      items.forEach(item => {
        if (category === 'all' || item.getAttribute("data-type") === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }