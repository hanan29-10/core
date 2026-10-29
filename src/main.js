import './style.css'

const products = [
  [
    'Aurelia Top Handle',
    '$248',
    '4.9',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    'Structured chestnut leather handbag',
  ],
  [
    'Celine Shoulder Bag',
    '$198',
    '4.8',
    'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
    'Cream leather shoulder bag',
  ],
  [
    'Mira Mini Bag',
    '$164',
    '4.9',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    'Small brown leather handbag',
  ],
  [
    'Silk Square Scarf',
    '$62',
    '4.7',
    'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=900&q=85',
    'Silk scarf with a warm neutral print',
  ],
  [
    'Gilded Hoops',
    '$68',
    '4.8',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
    'Gold hoop earrings on a neutral background',
  ],
  [
    'Valencia Tote',
    '$228',
    '4.9',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
    'Large beige leather tote bag',
  ],
  [
    'Elise Belt',
    '$78',
    '4.7',
    'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85',
    'Brown leather belt with gold buckle',
  ],
  [
    'Sienna Clutch',
    '$134',
    '4.8',
    'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85',
    'Burgundy leather clutch bag',
  ],
]

const categories = [
  [
    'Handbags',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85',
    'Chestnut leather handbag',
  ],
  [
    'Jewelry',
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85',
    'Gold jewelry arranged on cream fabric',
  ],
  [
    'Shoulder Bags',
    'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=85',
    'Leather bag on a chair',
  ],
  [
    'Scarves',
    'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=85',
    'Silk accessories in neutral tones',
  ],
]

const heroSlides = [
  [
    'The autumn edit',
    'Carry a <em>beautiful story.</em>',
    'Handbags with quiet presence, crafted for every day and made to be kept.',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1800&q=90',
  ],
  [
    'A study in burgundy',
    'The <em>evening</em> bag.',
    'A small, sculptural companion for dinners, late light, and everywhere in between.',
    'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1800&q=90',
  ],
  [
    'New silhouettes',
    'Soft structure, <em>lasting style.</em>',
    'Designed in warm leather and enduring forms for a wardrobe that travels beautifully.',
    'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1800&q=90',
  ],
  [
    'The daily ritual',
    'Made to be <em>carried.</em>',
    'Thoughtful essentials that bring ease and polish to the rhythm of every day.',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1800&q=90',
  ],
  [
    'The finishing touch',
    'Accessories with <em>intention.</em>',
    'Quietly expressive pieces that lend a little more character to the everyday.',
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=90',
  ],
]

const cartStorageKey = 'maroin-accessories-cart'
let cart = []

try {
  cart = JSON.parse(localStorage.getItem(cartStorageKey)) || []
} catch {
  cart = []
}

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Maroin home">Maroin</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation"><span class="sr-only">Toggle navigation menu</span><span aria-hidden="true">Menu</span></button>
    <nav id="primary-navigation" class="primary-nav" aria-label="Primary navigation"><a href="#top">Home</a><a href="#collections">Collections</a><a href="#products">Products</a><a href="#about">About</a></nav>
    <div class="header-actions"><button class="icon-button" type="button" aria-label="Search products"><span aria-hidden="true">Search</span></button><button id="cart-button" class="icon-button" type="button" aria-label="View shopping cart"><span aria-hidden="true">Bag</span><span class="cart-count" aria-hidden="true">0</span></button></div>
  </header>
  <main id="main-content" tabindex="-1">
    <section id="top" class="hero" aria-labelledby="hero-title"><div class="hero-slides" aria-hidden="true">${heroSlides.map(([, , , image], index) => `<img class="hero-slide${index === 0 ? ' is-active' : ''}" src="${image}" alt="" ${index === 0 ? '' : 'loading="lazy"'} />`).join('')}</div><div class="hero-content"><p id="hero-kicker" class="eyebrow">The autumn edit</p><h1 id="hero-title">Carry a <em>beautiful story.</em></h1><p id="hero-description">Handbags with quiet presence, crafted for every day and made to be kept.</p><a class="button button-primary" href="#products">Shop now <span aria-hidden="true">→</span></a></div><div class="hero-controls"><button id="previous-slide" class="hero-arrow" type="button" aria-label="Previous slide">←</button><div class="hero-dots" role="tablist" aria-label="Hero slides">${heroSlides.map((_, index) => `<button class="hero-dot${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-label="Show slide ${index + 1}" aria-selected="${index === 0}"></button>`).join('')}</div><button id="next-slide" class="hero-arrow" type="button" aria-label="Next slide">→</button></div></section>
    <section id="collections" class="categories section" aria-labelledby="categories-title"><div class="section-intro"><p class="eyebrow">Curated for everyday</p><h2 id="categories-title">Discover by collection</h2></div><div class="category-grid">${categories.map(([name, image, alt]) => `<a class="category-card" href="#products"><img src="${image}" alt="${alt}" loading="lazy" /><span>${name}</span><b aria-hidden="true">→</b></a>`).join('')}</div></section>
    <section id="products" class="products section" aria-labelledby="products-title"><div class="section-heading"><div><p class="eyebrow">Just arrived</p><h2 id="products-title">The considered collection</h2></div><a class="text-link" href="#products">View all pieces <span aria-hidden="true">→</span></a></div><div class="product-grid">${products.map(([name, price, rating, image, alt], index) => `<article class="product-card"><div class="product-image-wrap"><img src="${image}" alt="${alt}" loading="lazy" /><span class="product-tag">New</span><button class="quick-add" type="button" data-product-index="${index}" aria-label="Add ${name} to cart">Add to cart</button></div><div class="product-details"><div><h3>${name}</h3><p class="product-price">${price}</p></div><p class="product-rating"><span aria-hidden="true">★</span> ${rating}<span class="sr-only"> out of 5 stars</span></p></div></article>`).join('')}</div></section>
    <section id="basket" class="basket section" aria-labelledby="basket-title"><div class="section-heading"><div><p class="eyebrow">Your selection</p><h2 id="basket-title">Shopping bag</h2></div><button class="text-link continue-shopping" type="button">Continue shopping <span aria-hidden="true">→</span></button></div><div id="cart-items" class="cart-items" aria-live="polite"></div><div class="cart-summary"><span>Total</span><strong id="cart-total">$0.00</strong></div></section>
    <section id="about" class="story section" aria-labelledby="story-title"><div class="story-art" aria-hidden="true"><span></span><span></span></div><div class="story-copy"><p class="eyebrow">The Maroin way</p><h2 id="story-title">Collected slowly. Chosen well.</h2><p>We believe the pieces around you should earn their place. Our edit brings together independent makers and enduring essentials in a palette made for living.</p><a class="text-link" href="#register">Meet Maroin <span aria-hidden="true">→</span></a></div></section>
    <section id="register" class="registration section" aria-labelledby="register-title"><div class="registration-copy"><p class="eyebrow">A private invitation</p><h2 id="register-title">Join the inner circle</h2><p>Be first to discover new arrivals, quiet launches, and considered stories. This is a front-end demonstration; your details are not sent or saved.</p></div><form id="registration-form" class="registration-form"><div class="form-field"><label for="full-name">Full name</label><input id="full-name" name="fullName" type="text" autocomplete="name" required /></div><div class="form-field"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required /></div><div class="form-field"><label for="password">Password</label><input id="password" name="password" type="password" autocomplete="new-password" minlength="8" required aria-describedby="password-help" /><small id="password-help">Use at least 8 characters.</small></div><div class="form-field"><label for="confirm-password">Confirm password</label><input id="confirm-password" name="confirmPassword" type="password" autocomplete="new-password" minlength="8" required /></div><p id="form-message" class="form-message" role="status" aria-live="polite"></p><button class="button button-primary" type="submit">Create demo account <span aria-hidden="true">→</span></button></form></section>
  </main>
  <footer class="site-footer"><a class="brand" href="#top" aria-label="Maroin home">Maroin</a><p>© ${new Date().getFullYear()} Maroin. Made for a considered life.</p><nav aria-label="Footer navigation"><a href="#collections">Collections</a><a href="#products">Products</a><a href="#about">About</a></nav></footer>
`

const menuToggle = document.querySelector('.menu-toggle')
const primaryNav = document.querySelector('.primary-nav')
const form = document.querySelector('#registration-form')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const formMessage = document.querySelector('#form-message')
const cartButton = document.querySelector('#cart-button')
const cartItems = document.querySelector('#cart-items')
const cartTotal = document.querySelector('#cart-total')
const cartCount = document.querySelector('.cart-count')
const storefront = document.querySelector('#main-content')
const basket = document.querySelector('#basket')
const basketView = document.createElement('main')
const hero = document.querySelector('.hero')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const heroImages = [...document.querySelectorAll('.hero-slide')]
const heroDots = [...document.querySelectorAll('.hero-dot')]
const heroKicker = document.querySelector('#hero-kicker')
const heroTitle = document.querySelector('#hero-title')
const heroDescription = document.querySelector('#hero-description')
let activeSlide = 0
let autoplayTimer

function showSlide(index) {
  activeSlide = (index + heroSlides.length) % heroSlides.length
  const [kicker, title, description] = heroSlides[activeSlide]

  heroImages.forEach((image, imageIndex) =>
    image.classList.toggle('is-active', imageIndex === activeSlide)
  )
  heroDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeSlide
    dot.classList.toggle('is-active', isActive)
    dot.setAttribute('aria-selected', String(isActive))
  })
  heroKicker.textContent = kicker
  heroTitle.innerHTML = title
  heroDescription.textContent = description
}

function stopAutoplay() {
  window.clearInterval(autoplayTimer)
}

function startAutoplay() {
  if (prefersReducedMotion.matches) return
  stopAutoplay()
  autoplayTimer = window.setInterval(() => showSlide(activeSlide + 1), 5000)
}

document.querySelector('#previous-slide').addEventListener('click', () => {
  showSlide(activeSlide - 1)
  startAutoplay()
})

document.querySelector('#next-slide').addEventListener('click', () => {
  showSlide(activeSlide + 1)
  startAutoplay()
})

heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index)
    startAutoplay()
  })
})

hero.addEventListener('mouseenter', stopAutoplay)
hero.addEventListener('mouseleave', startAutoplay)
hero.addEventListener('focusin', stopAutoplay)
hero.addEventListener('focusout', (event) => {
  if (!hero.contains(event.relatedTarget)) startAutoplay()
})

if (!prefersReducedMotion.matches && window.matchMedia('(min-width: 768px)').matches) {
  let parallaxFrame
  const updateHeroParallax = () => {
    hero.style.setProperty('--hero-offset', `${Math.min(window.scrollY * 0.06, 22)}px`)
    parallaxFrame = undefined
  }
  window.addEventListener(
    'scroll',
    () => {
      if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateHeroParallax)
    },
    { passive: true }
  )
}

startAutoplay()

basketView.id = 'basket-view'
basketView.tabIndex = -1
basketView.hidden = true
basketView.append(basket)
document.querySelector('.site-footer').before(basketView)

function showBasket() {
  storefront.hidden = true
  basketView.hidden = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
  basketView.focus()
}

function showStorefront() {
  basketView.hidden = true
  storefront.hidden = false
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`
}

function saveCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart))
}

function renderCart() {
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  cartCount.textContent = itemCount
  cartCount.hidden = itemCount === 0
  cartButton.setAttribute('aria-label', `View shopping cart with ${itemCount} items`)
  cartTotal.textContent = formatPrice(total)

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<p class="empty-cart">Your shopping bag is empty. Discover a piece to make it yours.</p>'
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.alt}" />
      <div><h3>${item.name}</h3><p>${formatPrice(item.price)}</p><button class="remove-item" type="button" data-id="${item.id}">Remove</button></div>
      <div class="quantity-controls" aria-label="Quantity for ${item.name}"><button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">−</button><span>${item.quantity}</span><button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button></div>
    </article>
  `
    )
    .join('')
}

function addToCart(productIndex) {
  const [name, price, , image, alt] = products[productIndex]
  const existingItem = cart.find((item) => item.id === productIndex)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ id: productIndex, name, price: Number(price.slice(1)), image, alt, quantity: 1 })
  }

  saveCart()
  renderCart()
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  primaryNav.classList.toggle('is-open', !isOpen)
})

primaryNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    showStorefront()
    primaryNav.classList.remove('is-open')
    menuToggle.setAttribute('aria-expanded', 'false')
  }
})

document.querySelectorAll('.quick-add').forEach((button) => {
  button.addEventListener('click', () => addToCart(Number(button.dataset.productIndex)))
})

cartButton.addEventListener('click', () => {
  showBasket()
})

document.querySelector('.continue-shopping').addEventListener('click', showStorefront)
document.querySelector('.site-header .brand').addEventListener('click', showStorefront)

cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('button')
  if (!button) return

  const itemId = Number(button.dataset.id)
  const item = cart.find((cartItem) => cartItem.id === itemId)
  if (!item) return

  if (button.classList.contains('remove-item') || button.dataset.action === 'decrease') {
    item.quantity -= 1
  } else if (button.dataset.action === 'increase') {
    item.quantity += 1
  }

  cart = cart.filter((cartItem) => cartItem.quantity > 0)
  saveCart()
  renderCart()
})

function validatePasswordMatch() {
  const message =
    confirmPassword.value && password.value !== confirmPassword.value
      ? 'Passwords do not match.'
      : ''
  confirmPassword.setCustomValidity(message)
  return message
}

;[password, confirmPassword].forEach((field) =>
  field.addEventListener('input', () => {
    validatePasswordMatch()
    formMessage.textContent = ''
    formMessage.className = 'form-message'
  })
)

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const matchError = validatePasswordMatch()
  if (!form.checkValidity()) {
    formMessage.textContent =
      matchError || 'Please complete all required fields with valid information.'
    formMessage.className = 'form-message is-error'
    form.reportValidity()
    return
  }
  formMessage.textContent =
    'Thank you. Your demo account is ready to explore. No account was created.'
  formMessage.className = 'form-message is-success'
  form.reset()
})

renderCart()
