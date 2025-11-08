// ===== Constantes =====
const WHATSAPP_NUMBER = '+5581993949927';

// ===== Produtos =====
const products = [
  {
    "id": 1,
    "name": "BOLO DE POTE SABOR CHOCOLATE",
    "description": "Massa de Baunilha e recheio de Chocolate",
    "price": 6.0,
    "emoji": "🍪",
    "available": true,
    "image": "assets\bolo_pote_chocolate.jpeg"
  },
  {
    "id": 2,
    "name": "BOLO DE POTE SABOR BEIJINHO",
    "description": "Massa de Baunilha e recheio de Beijinho",
    "price": 6.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 3,
    "name": "BOLO DE POTE SABOR BEM-CASADO",
    "description": "Massa de Baunilha e recheio de Bem-casado",
    "price": 6.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 4,
    "name": "BOLO DE POTE SABOR BRANQUINHO",
    "description": "Massa de Baunilha e recheio de Branquinho",
    "price": 6.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 5,
    "name": "BOLO DE POTE SABOR AMENDOIM",
    "description": "Massa de Baunilha e recheio de Amendoim",
    "price": 6.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 6,
    "name": "BOLO DE POTE SABOR NINHO",
    "description": "Massa de Baunilha e recheio de Ninho",
    "price": 6.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 7,
    "name": "BOLO DE POTE SABOR MARACUJÁ",
    "description": "Massa de Baunilha e recheio de Maracujá",
    "price": 6.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 8,
    "name": "BROWNIE CHOCOLATE",
    "description": "Pedaços de Brownies e recheio de Chocolate",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 9,
    "name": "BROWNIE BEIJINHO",
    "description": "Pedaços de Brownies e recheio de Beijinho",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 10,
    "name": "BROWNIE BEM-CASADO",
    "description": "Pedaços de Brownies e recheio de Bem-casado",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 11,
    "name": "BROWNIE BRANQUINHO",
    "description": "Pedaços de Brownies e recheio de Branquinho",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 12,
    "name": "BROWNIE AMENDOIM",
    "description": "Pedaços de Brownies e recheio de Amendoim",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 13,
    "name": "BROWNIE NINHO",
    "description": "Pedaços de Brownies e recheio de Ninho",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 14,
    "name": "BROWNIE CHURROS",
    "description": "Pedaços de Brownies e recheio de Churros (Com canela)",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 15,
    "name": "BROWNIE MARACUJÁ",
    "description": "Pedaços de Brownies e recheio de Maracujá",
    "price": 8.0,
    "emoji": "🍪",
    "available": true
  },
  {
    "id": 16,
    "name": "COPO DE BROWNIE BEIJINHO",
    "description": "Pedaços de Brownies, recheio de Beijinho e finalizado com Coco ralado",
    "price": 12.0,
    "emoji": "🍮",
    "available": true
  },
  {
    "id": 17,
    "name": "COPO DE BROWNIE AMENDOIM",
    "description": "Pedaços de Brownies, recheio de Amendoim e finalizado com Xerém de Amendoim",
    "price": 12.0,
    "emoji": "🍮",
    "available": true
  },
  {
    "id": 18,
    "name": "COPO DE BROWNIE CHURROS",
    "description": "Pedaços de Brownies, recheio de Churros (Doce de leite com canela) e finalizado com gotas de chocolate",
    "price": 12.0,
    "emoji": "🍮",
    "available": true
  },
  {
    "id": 19,
    "name": "COPO DE BROWNIE UVINHA",
    "description": "Recheio branco, pedaços de Brownies, uva sem semente e recheio de chocolate",
    "price": 13.0,
    "emoji": "🍮",
    "available": true
  },
  {
    "id": 20,
    "name": "COPO DE BROWNIE REAL",
    "description": "Recheio branco, pedaços de Brownies, morangos cortados e recheio de chocolate",
    "price": 13.0,
    "emoji": "🍮",
    "available": true
  },
  {
    "id": 21,
    "name": "COPO DE BROWNIE MORANINHO",
    "description": "Recheio de Ninho, massa de bolo de Baunilha e pedaços de morangos",
    "price": 13.0,
    "emoji": "🍮",
    "available": true
  },
  {
    "id": 22,
    "name": "COPO DE BROWNIE MARACUJÁ",
    "description": "Pedaços de Brownies, recheio de Maracujá (Fruta) e finalizado com gotas de chocolate/granulado",
    "price": 13.0,
    "emoji": "🍮",
    "available": true
  },
  {
    "id": 23,
    "name": "BOM-BOM DE UVA",
    "description": "Recheio de branquinho, uva de semente e recheio de chocolate por cima",
    "price": 7.0,
    "emoji": "🍰",
    "available": true
  },
  {
    "id": 24,
    "name": "PUDIM",
    "description": "Pudim de leite condensado",
    "price": 8.5,
    "emoji": "🍰",
    "available": true
  },
  {
    "id": 25,
    "name": "AÇAÍ P",
    "description": "Açaí P: 4 Complementos grátis",
    "price": 17.0,
    "emoji": "🍰",
    "available": true
  },
  {
    "id": 26,
    "name": "AÇAÍ M",
    "description": "Açaí M: 6 Complementos grátis",
    "price": 22.0,
    "emoji": "🍰",
    "available": true
  },
  {
    "id": 27,
    "name": "EMPADAS",
    "description": "Recheio de frango com requeijão",
    "price": 5.0,
    "emoji": "🥐",
    "available": true
  },
  {
    "id": 28,
    "name": "COXINHA FRANGO",
    "description": "Recheio de frango com requeijão",
    "price": 6.0,
    "emoji": "🥐",
    "available": true
  },
  {
    "id": 29,
    "name": "COXINHA CHARQUE",
    "description": "Recheio de charque com requeijão",
    "price": 6.0,
    "emoji": "🥐",
    "available": true
  },
  {
    "id": 30,
    "name": "PÃO PIZZA",
    "description": "Recheio de presunto e queijo",
    "price": 6.0,
    "emoji": "🥐",
    "available": true
  },
  {
    "id": 31,
    "name": "PÃO DE FRANGO",
    "description": "Recheio de frango com requeijão",
    "price": 6.0,
    "emoji": "🥐",
    "available": true
  },
  {
    "id": 32,
    "name": "PIZZAS BROTINHO",
    "description": "Sabores: Calabresa, Frango e Charque",
    "price": 10.0,
    "emoji": "🥐",
    "available": true
  }
];

// ===== Carrinho =====
let cart = [];

// ===== Função para verificar disponibilidade =====
function isProductAvailable(productId) {
    const product = products.find(p => p.id === productId);
    return product ? product.available : false;
}

// ===== Função para alterar disponibilidade (para uso do desenvolvedor) =====
function setProductAvailability(productId, available) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.available = available;
        renderProducts();
    }
}

// ===== Renderizar Produtos =====
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const statusClass = product.available ? 'status-available' : 'status-unavailable';
        const statusText = product.available ? 'Disponível' : 'Indisponível';
        const buttonDisabled = !product.available ? 'disabled' : '';

        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <p class="product-status ${statusClass}">${statusText}</p>
                <button class="btn-add-cart" onclick="addToCart(${product.id})" ${buttonDisabled}>
                    Adicionar ao Carrinho
                </button>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// ===== Adicionar ao Carrinho =====
function addToCart(productId) {
    if (!isProductAvailable(productId)) {
        alert('Este produto não está disponível no momento.');
        return;
    }

    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCartUI();
}

// ===== Remover do Carrinho =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// ===== Aumentar Quantidade =====
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCartUI();
    }
}

// ===== Diminuir Quantidade =====
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
        }
        updateCartUI();
    }
}

// ===== Atualizar UI do Carrinho =====
function updateCartUI() {
    // Atualizar contador
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Renderizar itens do carrinho
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Seu carrinho está vazio</div>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${item.id})">Remover</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Atualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(2)}`;
}

// ===== Finalizar Compra =====
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    let message = 'Olá! Gostaria de fazer um pedido:\n\n';
    
    cart.forEach(item => {
        message += `${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: R$ ${total.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// ===== Navegação entre Páginas =====
function navigateTo(page) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Mostrar página selecionada
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Fechar menu mobile
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');

    // Fechar carrinho
    closeSidebar();
}

// ===== Abrir/Fechar Carrinho =====
function openSidebar() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.style.overflow = 'auto';
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar produtos
    renderProducts();
    updateCartUI();

    // Menu hamburger
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Links de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const page = this.getAttribute('data-page');
                if (page) {
                    navigateTo(page);
                }
            }
        });
    });

    // Carrinho
    const cartIcon = document.getElementById('cartIcon');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutBtn');

    cartIcon.addEventListener('click', openSidebar);
    closeCart.addEventListener('click', closeSidebar);
    cartOverlay.addEventListener('click', closeSidebar);
    checkoutBtn.addEventListener('click', checkout);

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        const header = document.querySelector('.header');
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.getElementById('menuToggle');

        if (!header.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});
