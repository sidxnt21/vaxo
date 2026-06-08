/**
 * Hile Machha - JavaScript Logic
 * Features: SPA hash routing, Cart state management, Search & Filters, Table Sorting, Lightbox, FAQs, Checkout.
 */

// Channa Fish Database
const CHANNA_PRODUCTS = [
  {
    id: "channa-andrao",
    name: "Channa Andrao",
    scientificName: "Channa andrao",
    price: 3500,
    size: "10-12 cm",
    availability: "In Stock",
    category: "beginner", // Beginner Friendly
    description: "One of the smallest and most colourful snakeheads. Native to the Brahmaputra River basin. Highly active, relatively peaceful for a Channa, and perfect for smaller tanks (min 80L). Needs sub-tropical temperatures.",
    image: "assets/channa_andrao.png",
    careLevel: "Beginner Friendly",
    tankSize: "80 Liters",
    temperature: "18°C - 24°C"
  },
  {
    id: "channa-auranti",
    name: "Channa Aurantimaculata",
    scientificName: "Channa aurantimaculata",
    price: 12000,
    size: "15-20 cm",
    availability: "Low Stock",
    category: "premium", // Rare Species & Premium Collection
    description: "Also known as the Golden Cobra Snakehead. Possesses gorgeous orange stripes and a bold personality. A medium-large species native to Assam, India. Requires a tight lid as they are excellent jumpers.",
    image: "assets/channa_auranti.png",
    careLevel: "Intermediate / Rare",
    tankSize: "250 Liters",
    temperature: "15°C - 25°C"
  },
  {
    id: "channa-barca",
    name: "Channa Barca",
    scientificName: "Channa barca",
    price: 145000,
    size: "25-30 cm",
    availability: "Low Stock",
    category: "rare", // Rare Species, Premium Collection
    description: "The undisputed holy grail of the aquarium hobby. Known for its majestic finnage, brilliant emerald-blue colors, and high intelligence. Endemic to the Brahmaputra wetlands. Extremely rare and highly sought after worldwide.",
    image: "assets/channa_barca.png",
    careLevel: "Advanced / Premium",
    tankSize: "500 Liters",
    temperature: "18°C - 24°C"
  },
  {
    id: "channa-bleheri",
    name: "Channa Bleheri",
    scientificName: "Channa bleheri",
    price: 4500,
    size: "8-10 cm",
    availability: "In Stock",
    category: "beginner", // Beginner Friendly
    description: "The Rainbow Snakehead. Famed for its bright orange, blue, and gold markings. Does not form a pair easily but is highly social when young. Requires a cooler winter period to trigger breeding coloration.",
    image: "assets/channa_bleheri.png",
    careLevel: "Beginner Friendly",
    tankSize: "80 Liters",
    temperature: "15°C - 25°C"
  },
  {
    id: "channa-maru",
    name: "Channa Marulioides",
    scientificName: "Channa marulioides",
    price: 28000,
    size: "30-40 cm",
    availability: "In Stock",
    category: "large", // Large Species, Premium Collection
    description: "The Emperor Snakehead. Known for developing beautiful dark target-like spots (ocelli) along its flanks as it grows. Native to Southeast Asia. Reaches up to 60cm+ and requires a very large, robust aquarium setup.",
    image: "assets/channa_maru.png",
    careLevel: "Intermediate / Large",
    tankSize: "600 Liters",
    temperature: "24°C - 28°C"
  },
  {
    id: "channa-pulchra",
    name: "Channa Pulchra",
    scientificName: "Channa pulchra",
    price: 5500,
    size: "12-15 cm",
    availability: "In Stock",
    category: "beginner", // Beginner Friendly
    description: "The Peacock Snakehead. Characterized by golden-yellow scales and black spots with blue tinting. Energetic, hardy, and interactive with keepers. Great introduction to medium-sized snakehead husbandry.",
    image: "assets/channa_pulchra.png",
    careLevel: "Beginner Friendly",
    tankSize: "150 Liters",
    temperature: "20°C - 26°C"
  },
  {
    id: "channa-stewartii",
    name: "Channa Stewartii",
    scientificName: "Channa stewartii",
    price: 7000,
    size: "14-18 cm",
    availability: "In Stock",
    category: "large", // Beginner Friendly / Large
    description: "The Assamese Golden Snakehead. Features iridescent blue-green scaling and is highly aggressive yet resilient. Displays excellent parenting behaviors if successfully paired. An engaging species with raw wild appeal.",
    image: "assets/channa_stewartii.png",
    careLevel: "Beginner Friendly / Hardy",
    tankSize: "200 Liters",
    temperature: "18°C - 24°C"
  }
];

// Gallery Database
const GALLERY_ITEMS = [
  { image: "assets/gallery_andrao.png", name: "Channa Andrao in Breeding Dress", category: "Andrao" },
  { image: "assets/gallery_barca.png", name: "Majestic Channa Barca close-up", category: "Barca" },
  { image: "assets/gallery_auranti.png", name: "Golden Cobra displaying fins", category: "Aurantimaculata" },
  { image: "assets/gallery_pulchra.png", name: "Channa Pulchra hunting live food", category: "Pulchra" },
  { image: "assets/gallery_bleheri.png", name: "Rainbow Snakehead under natural light", category: "Bleheri" },
  { image: "assets/gallery_tank.png", name: "Biotope Aquarium Setup for Snakeheads", category: "Setup" }
];

// Blog Database
const BLOG_POSTS = [
  {
    id: "care-guide",
    title: "Channa Care Guide: Fundamentals for Beginners",
    excerpt: "New to keeping Snakeheads? Learn the basic temperature cycles, tank size requirements, and lid security tips to prevent escape.",
    date: "June 2, 2026",
    readTime: "5 min read",
    image: "assets/blog_care.png"
  },
  {
    id: "feeding-guide",
    title: "The Ultimate Feeding Guide for Carnivorous Channa",
    excerpt: "Discover the best diet for color enhancement and health. Transitioning from live food to high-protein pellets made easy.",
    date: "May 28, 2026",
    readTime: "4 min read",
    image: "assets/blog_feeding.png"
  },
  {
    id: "aquarium-setup",
    title: "Recreating the Brahmaputra: A Channa Biotope Setup",
    excerpt: "How to style your tank using leaf litter, driftwood, and rocks to simulate the sluggish, oxygen-rich rivers of Assam.",
    date: "May 15, 2026",
    readTime: "6 min read",
    image: "assets/blog_setup.png"
  },
  {
    id: "water-parameters",
    title: "Understanding pH, GH, and Temperature Cycles",
    excerpt: "Unlike tropical fish, many Channa require a cold winter resting phase. Learn how parameter manipulation triggers color bursts.",
    date: "May 02, 2026",
    readTime: "4 min read",
    image: "assets/blog_parameters.png"
  },
  {
    id: "breeding-info",
    title: "Breeding Channa: Pair Formation and Mouthbrooding",
    excerpt: "A deep dive into pair bonding, nest building, and the jaw-dropping mouthbrooding process of various snakehead species.",
    date: "April 20, 2026",
    readTime: "7 min read",
    image: "assets/blog_breeding.png"
  },
  {
    id: "nepal-hobby",
    title: "Channa Keepers Nepal: The Growing Hobbyist Scene",
    excerpt: "Exploring the rise of Snakehead keepers in Kathmandu and Pokhara. How local hobbyists share stock and breeding tips.",
    date: "April 11, 2026",
    readTime: "3 min read",
    image: "assets/blog_community.png"
  }
];

// App State
let cart = [];
let activeCategoryFilter = "all";
let searchQueries = {
  varieties: "",
  prices: ""
};
let pricesSortKey = "name-asc";

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  initRouter();
  initMobileMenu();
  initAccordion();
  initLightbox();
  initModals();
  initFiltersAndSearch();
  initCheckout();
  
  // Render Dynamic Content
  renderFeaturedChanna();
  renderVarietiesGrid();
  renderGallery();
  renderPricesTable();
  renderBlog();
  updateCartUI();
});

/* ==========================================================================
   SPA ROUTER
   ========================================================================== */
function initRouter() {
  const handleRouting = () => {
    let hash = window.location.hash || "#home";
    const allowedHashes = [
      "#home", "#about", "#varieties", "#gallery", 
      "#prices", "#blog", "#contact", "#location", "#order", "#faq"
    ];
    
    if (!allowedHashes.includes(hash)) {
      hash = "#home";
    }

    // Toggle active view section
    document.querySelectorAll(".view-section").forEach(section => {
      section.classList.remove("active-view");
    });
    
    const targetSectionId = hash.replace("#", "") + "-section";
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.classList.add("active-view");
      window.scrollTo(0, 0);
    }

    // Toggle nav active classes
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      }
    });

    // Special Apple aesthetic touch: Home page has a dark hero background, so header is transparent with white text.
    // Other pages have light backgrounds, so header has dark text.
    const header = document.querySelector("header.sticky-header");
    if (hash === "#home") {
      header.classList.add("dark-nav");
    } else {
      header.classList.remove("dark-nav");
    }

    // If order page is accessed, render order-now cart items
    if (hash === "#order") {
      renderCheckoutCart();
    }

    // Close mobile menu on navigate
    const navMenu = document.querySelector("nav.nav-menu");
    const mobileToggle = document.querySelector(".mobile-toggle");
    if (navMenu && mobileToggle) {
      navMenu.classList.remove("open");
      mobileToggle.classList.remove("open");
    }
  };

  window.addEventListener("hashchange", handleRouting);
  // Run once on load
  handleRouting();
}

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector("nav.nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("open");
      navMenu.classList.toggle("open");
    });
  }
}

/* ==========================================================================
   CART STATE & DRAWER
   ========================================================================== */
function loadCartFromStorage() {
  const stored = localStorage.getItem("hile_machha_cart");
  if (stored) {
    try {
      cart = JSON.parse(stored);
    } catch (e) {
      cart = [];
    }
  }
}

function saveCartToStorage() {
  localStorage.setItem("hile_machha_cart", JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
  const product = CHANNA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (product.availability === "Out of Stock") {
    showToast("This species is currently unavailable.");
    return;
  }

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      scientificName: product.scientificName,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`${product.name} added to cart.`);
}

function updateCartQuantity(productId, newQty) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity = parseInt(newQty);
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
  renderCheckoutCart(); // Update checkout screen if user is on it
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  renderCheckoutCart();
  showToast("Item removed from cart.");
}

function updateCartUI() {
  // Update count in header
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach(el => {
    el.innerText = totalCount;
    el.style.display = totalCount > 0 ? "flex" : "none";
  });

  // Render drawer items
  const drawerItemsContainer = document.getElementById("cart-drawer-items");
  const drawerSubtotal = document.getElementById("cart-drawer-subtotal-val");
  
  if (!drawerItemsContainer) return;

  if (cart.length === 0) {
    drawerItemsContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 40px;">Your cart is empty.</p>`;
    drawerSubtotal.innerText = "Rs. 0";
    return;
  }

  let subtotal = 0;
  let itemsHtml = "";

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    itemsHtml += `
      <div class="cart-drawer-item">
        <img src="${item.image}" alt="${item.name}" class="cart-drawer-item-img" onerror="this.src='https://placehold.co/100x100/eaeaea/000000?text=${encodeURIComponent(item.name)}'">
        <div class="cart-drawer-item-details">
          <div class="cart-drawer-item-name">${item.name}</div>
          <div class="cart-drawer-item-price">Rs. ${item.price.toLocaleString()}</div>
          <div class="cart-drawer-qty-row">
            <div class="cart-drawer-qty-controls">
              <span class="cart-drawer-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</span>
              <span class="cart-drawer-qty-val">${item.quantity}</span>
              <span class="cart-drawer-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</span>
            </div>
            <span class="cart-drawer-item-remove" onclick="removeFromCart('${item.id}')">Remove</span>
          </div>
        </div>
      </div>
    `;
  });

  drawerItemsContainer.innerHTML = itemsHtml;
  drawerSubtotal.innerText = `Rs. ${subtotal.toLocaleString()}`;
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  
  if (open) {
    drawer.style.display = "flex";
    overlay.style.display = "block";
    setTimeout(() => {
      drawer.classList.add("open");
    }, 10);
  } else {
    drawer.classList.remove("open");
    setTimeout(() => {
      drawer.style.display = "none";
      overlay.style.display = "none";
    }, 400); // match transition duration
  }
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastText = document.getElementById("toast-text");
  
  if (!toast || !toastText) return;

  toastText.innerText = message;
  toast.style.display = "flex";
  
  // Clear any existing timeout on the element
  if (toast.timeoutId) {
    clearTimeout(toast.timeoutId);
  }

  toast.timeoutId = setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

/* ==========================================================================
   RENDER DYNAMIC PRODUCTS & PAGES
   ========================================================================== */

// 1. Home - Featured Section
function renderFeaturedChanna() {
  const container = document.getElementById("featured-channa-grid");
  if (!container) return;

  // Let's display the top 3 featured species for the home landing
  const featured = CHANNA_PRODUCTS.slice(0, 3);
  let html = "";

  featured.forEach(p => {
    html += generateProductCardHtml(p);
  });

  container.innerHTML = html;
}

// 2. Channa Varieties Page Grid
function renderVarietiesGrid() {
  const container = document.getElementById("varieties-channa-grid");
  if (!container) return;

  let filtered = CHANNA_PRODUCTS.filter(p => {
    // Category Filter
    if (activeCategoryFilter !== "all" && p.category !== activeCategoryFilter) {
      return false;
    }
    // Search Query
    if (searchQueries.varieties) {
      const q = searchQueries.varieties.toLowerCase();
      return p.name.toLowerCase().includes(q) || 
             p.scientificName.toLowerCase().includes(q) || 
             p.description.toLowerCase().includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results">No Channa species match your filters. Try adjusting your search query.</div>`;
    return;
  }

  let html = "";
  filtered.forEach(p => {
    html += generateProductCardHtml(p);
  });

  container.innerHTML = html;
}

// Helper: Product Card HTML generator
function generateProductCardHtml(p) {
  const badgeHtml = p.availability === "Low Stock" ? `<div class="product-card-badge">Low Stock</div>` : 
                    p.availability === "Out of Stock" ? `<div class="product-card-badge" style="background:#ff3b30;">Sold Out</div>` : "";
  
  const btnCartHtml = p.availability === "Out of Stock" 
    ? `<button class="btn btn-light" style="cursor: not-allowed; opacity: 0.5;" disabled>Unavailable</button>`
    : `<button class="btn btn-primary" onclick="addToCart('${p.id}')">Add to Cart</button>`;

  return `
    <div class="product-card fade-in">
      <div class="product-card-img-container">
        ${badgeHtml}
        <img class="product-card-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/400x300/eaeaea/000000?text=${encodeURIComponent(p.name)}'">
      </div>
      <div class="product-card-info">
        <div class="product-card-title-group">
          <h3 class="product-card-title">${p.name}</h3>
          <div class="product-card-scientific">${p.scientificName}</div>
        </div>
        <p class="product-card-desc">${p.description.substring(0, 110)}...</p>
        <div class="product-card-meta">
          <div class="product-card-spec">Size: <span>${p.size}</span></div>
          <div class="product-card-price">Rs. ${p.price.toLocaleString()}</div>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-secondary" style="color:var(--text-primary); border-color:var(--border-color);" onclick="openDetailsModal('${p.id}')">View Details</button>
          ${btnCartHtml}
        </div>
      </div>
    </div>
  `;
}

// 3. Gallery Masonry
function renderGallery() {
  const container = document.getElementById("gallery-masonry-grid");
  if (!container) return;

  let html = "";
  GALLERY_ITEMS.forEach(item => {
    html += `
      <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.name}')">
        <img src="${item.image}" alt="${item.name}" class="gallery-img" onerror="this.src='https://placehold.co/600x450/eaeaea/000000?text=${encodeURIComponent(item.name)}'">
        <div class="gallery-overlay">
          <div class="gallery-caption">${item.name}</div>
          <div class="gallery-sub">Channa ${item.category}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 4. Fish Prices Table (Search & Sort)
function renderPricesTable() {
  const tbody = document.getElementById("prices-table-body");
  if (!tbody) return;

  // Filter
  let filtered = CHANNA_PRODUCTS.filter(p => {
    if (searchQueries.prices) {
      const q = searchQueries.prices.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.scientificName.toLowerCase().includes(q);
    }
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (pricesSortKey === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (pricesSortKey === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (pricesSortKey === "price-asc") {
      return a.price - b.price;
    } else if (pricesSortKey === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 40px 0;">No matching fish records found.</td></tr>`;
    return;
  }

  let html = "";
  filtered.forEach(p => {
    let badgeClass = "in-stock";
    if (p.availability === "Low Stock") badgeClass = "low-stock";
    if (p.availability === "Out of Stock") badgeClass = "out-of-stock";

    html += `
      <tr>
        <td>
          <div class="price-fish-name">
            <span>${p.name}</span>
            <span class="price-fish-scientific">${p.scientificName}</span>
          </div>
        </td>
        <td>${p.size}</td>
        <td><span class="status-badge ${badgeClass}">${p.availability}</span></td>
        <td><strong>Rs. ${p.price.toLocaleString()}</strong></td>
        <td>
          <button class="btn btn-dark" style="padding: 6px 12px; font-size: 0.75rem;" onclick="addToCart('${p.id}')" ${p.availability === "Out of Stock" ? "disabled style='opacity:0.4; cursor:not-allowed;'" : ""}>
            Add to Cart
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// 5. Blog Posts Section
function renderBlog() {
  const container = document.getElementById("blog-posts-grid");
  if (!container) return;

  let html = "";
  BLOG_POSTS.forEach(post => {
    html += `
      <article class="blog-card">
        <div class="blog-card-img-container">
          <img src="${post.image}" alt="${post.title}" class="blog-card-img" onerror="this.src='https://placehold.co/400x250/eaeaea/000000?text=${encodeURIComponent(post.title)}'">
        </div>
        <div class="blog-card-content">
          <div class="blog-meta-row">
            <span>${post.date}</span>
            <span>•</span>
            <span>${post.readTime}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <a href="#blog" class="btn-link" onclick="alert('Full blog content feature coming soon! Thank you for reading our care preview.')">Read Article</a>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

/* ==========================================================================
   INTERACTIVE DETAILS & MODALS
   ========================================================================== */
function initModals() {
  const detailModal = document.getElementById("details-modal");
  const overlay = document.getElementById("cart-overlay");
  
  // Global closes
  document.querySelectorAll(".details-modal-close").forEach(btn => {
    btn.addEventListener("click", () => {
      detailModal.style.display = "none";
    });
  });

  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) {
      detailModal.style.display = "none";
    }
  });

  // Drawer events
  document.getElementById("nav-cart-btn").addEventListener("click", () => {
    toggleCartDrawer(true);
  });
  
  document.getElementById("cart-drawer-close").addEventListener("click", () => {
    toggleCartDrawer(false);
  });

  overlay.addEventListener("click", () => {
    toggleCartDrawer(false);
    detailModal.style.display = "none";
  });
}

function openDetailsModal(productId) {
  const product = CHANNA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("details-modal");
  
  document.getElementById("modal-img").src = product.image;
  document.getElementById("modal-img").onerror = function() {
    this.src = `https://placehold.co/600x600/eaeaea/000000?text=${encodeURIComponent(product.name)}`;
  };
  
  document.getElementById("modal-title").innerText = product.name;
  document.getElementById("modal-scientific").innerText = product.scientificName;
  document.getElementById("modal-price").innerText = `Rs. ${product.price.toLocaleString()}`;
  document.getElementById("modal-desc").innerText = product.description;
  document.getElementById("modal-spec-size").innerText = product.size;
  document.getElementById("modal-spec-availability").innerText = product.availability;
  document.getElementById("modal-spec-care").innerText = product.careLevel;
  document.getElementById("modal-spec-tank").innerText = product.tankSize;
  document.getElementById("modal-spec-temp").innerText = product.temperature;

  const buyButtonContainer = document.getElementById("modal-buy-button-container");
  if (product.availability === "Out of Stock") {
    buyButtonContainer.innerHTML = `<button class="btn btn-light" style="width: 100%; cursor: not-allowed; opacity: 0.5;" disabled>Sold Out</button>`;
  } else {
    buyButtonContainer.innerHTML = `<button class="btn btn-primary" style="width: 100%;" onclick="addToCart('${product.id}'); document.getElementById('details-modal').style.display='none';">Add to Cart</button>`;
  }

  modal.style.display = "flex";
}

/* ==========================================================================
   SEARCH & FILTERS
   ========================================================================== */
function initFiltersAndSearch() {
  // Category Capsules
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.getAttribute("data-category");
      renderVarietiesGrid();
    });
  });

  // Search in Varieties
  const varSearch = document.getElementById("varieties-search-input");
  if (varSearch) {
    varSearch.addEventListener("input", (e) => {
      searchQueries.varieties = e.target.value;
      renderVarietiesGrid();
    });
  }

  // Search in Prices
  const priceSearch = document.getElementById("prices-search-input");
  if (priceSearch) {
    priceSearch.addEventListener("input", (e) => {
      searchQueries.prices = e.target.value;
      renderPricesTable();
    });
  }

  // Sort in Prices
  const priceSort = document.getElementById("prices-sort-select");
  if (priceSort) {
    priceSort.addEventListener("change", (e) => {
      pricesSortKey = e.target.value;
      renderPricesTable();
    });
  }

  // Global header search icon click action (redirect to prices page and focus search)
  const navSearchBtn = document.getElementById("nav-search-btn");
  if (navSearchBtn) {
    navSearchBtn.addEventListener("click", () => {
      window.location.hash = "#prices";
      setTimeout(() => {
        const pSearch = document.getElementById("prices-search-input");
        if (pSearch) pSearch.focus();
      }, 150);
    });
  }
}

/* ==========================================================================
   LIGHTBOX FOR GALLERY
   ========================================================================== */
function initLightbox() {
  const lightbox = document.getElementById("lightbox-modal");
  const closeBtn = document.querySelector(".lightbox-close");

  if (!lightbox) return;

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

function openLightbox(imgSrc, titleText) {
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");

  lightboxImg.src = imgSrc;
  lightboxImg.onerror = function() {
    this.src = `https://placehold.co/800x600/eaeaea/000000?text=${encodeURIComponent(titleText)}`;
  };
  lightboxTitle.innerText = titleText;
  lightbox.style.display = "flex";
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initAccordion() {
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains("open");
      
      // Close all other items first
      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* ==========================================================================
   CHECKOUT & CONFIRMATION
   ========================================================================== */
function renderCheckoutCart() {
  const container = document.getElementById("checkout-cart-items-list");
  const summaryBlock = document.getElementById("checkout-summary-rows");
  const totalBlock = document.getElementById("checkout-grand-total");
  const checkoutBtn = document.getElementById("checkout-submit-btn");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="checkout-cart-empty">
        <p>Your shopping cart is empty.</p>
        <a href="#varieties" class="btn btn-dark" style="margin-top:20px; display:inline-block;">Go to Shop</a>
      </div>
    `;
    if (summaryBlock) summaryBlock.innerHTML = "";
    if (totalBlock) totalBlock.innerHTML = "Rs. 0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let itemsHtml = "";
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    itemsHtml += `
      <div class="checkout-cart-item">
        <img src="${item.image}" alt="${item.name}" class="checkout-cart-item-img" onerror="this.src='https://placehold.co/800x600/eaeaea/000000?text=${encodeURIComponent(item.name)}'">
        <div class="checkout-cart-item-details">
          <div class="checkout-cart-item-name">${item.name}</div>
          <div class="checkout-cart-item-price">Rs. ${item.price.toLocaleString()} each</div>
        </div>
        <div class="checkout-qty-controls">
          <span class="checkout-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</span>
          <span class="checkout-qty-val">${item.quantity}</span>
          <span class="checkout-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</span>
        </div>
        <span class="checkout-cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</span>
      </div>
    `;
  });

  container.innerHTML = itemsHtml;

  const deliveryCharge = subtotal > 15000 ? 0 : 500; // Free delivery above Rs. 15,000!
  const grandTotal = subtotal + deliveryCharge;

  if (summaryBlock) {
    summaryBlock.innerHTML = `
      <div class="total-row">
        <span>Subtotal</span>
        <span>Rs. ${subtotal.toLocaleString()}</span>
      </div>
      <div class="total-row">
        <span>Delivery across Nepal</span>
        <span>${deliveryCharge === 0 ? "FREE" : "Rs. " + deliveryCharge.toLocaleString()}</span>
      </div>
    `;
  }

  if (totalBlock) {
    totalBlock.innerText = `Rs. ${grandTotal.toLocaleString()}`;
  }
}

function initCheckout() {
  const checkoutForm = document.getElementById("checkout-order-form");
  const confirmationModal = document.getElementById("confirmation-modal");
  const closeConfirmationBtn = document.getElementById("close-confirmation-btn");

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      if (cart.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
        return;
      }

      // Gather form info
      const name = document.getElementById("checkout-name").value;
      const email = document.getElementById("checkout-email").value;
      const phone = document.getElementById("checkout-phone").value;
      const city = document.getElementById("checkout-city").value;
      const address = document.getElementById("checkout-address").value;
      
      let paymentVal = "";
      const paymentEl = document.querySelector('input[name="payment_method"]:checked');
      if (paymentEl) {
        paymentVal = paymentEl.value;
      }

      // Generate a dummy order number
      const orderNumber = "HM-" + Math.floor(100000 + Math.random() * 900000);
      
      // Calculate totals
      let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const deliveryCharge = subtotal > 15000 ? 0 : 500;
      const total = subtotal + deliveryCharge;

      // Populate confirmation dialog details
      document.getElementById("confirm-order-id").innerText = orderNumber;
      document.getElementById("confirm-name").innerText = name;
      document.getElementById("confirm-phone").innerText = phone;
      document.getElementById("confirm-address").innerText = `${address}, ${city}`;
      document.getElementById("confirm-payment").innerText = paymentVal === "cod" ? "Cash on Delivery" : paymentVal === "esewa" ? "eSewa Direct Transfer" : "Fonepay QR Transfer";
      document.getElementById("confirm-total").innerText = `Rs. ${total.toLocaleString()}`;

      // Open Modal
      confirmationModal.style.display = "flex";

      // Clear local storage and state cart
      cart = [];
      saveCartToStorage();
      updateCartUI();
      checkoutForm.reset();
    });
  }

  if (closeConfirmationBtn) {
    closeConfirmationBtn.addEventListener("click", () => {
      confirmationModal.style.display = "none";
      window.location.hash = "#home";
    });
  }

  // Handle Contact Form Submit (Simple Mock Action)
  const contactForm = document.getElementById("contact-us-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      alert(`Thank you, ${name}! Your inquiry has been sent. Hile Machha specialists will contact you shortly.`);
      contactForm.reset();
    });
  }
}
