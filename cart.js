
const products = [
    { id: 1, name: 'Organic Apples', price:12.00 },
    { id: 2, name: 'Fresh Eggs', price:8.00 },
    
  ];
  
  
  const productsSection = document.querySelector('.products');
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsSection.appendChild(productElement);
  });
  
  
  const cartSection = document.querySelector('.cart');
  const cart = [];
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCart();
    }
  }
  
  function updateCart() {
    cartSection.innerHTML = '';
    cart.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.textContent = product.name;
      cartSection.appendChild(cartItem);
    });
  }
  
  
  updateCart();
  