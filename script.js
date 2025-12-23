const allThumbnailImages = document.querySelectorAll('.product-gallery__thumbnail')
const mainImage = document.querySelector('.product-gallery__main-img')
const minusBtn = document.querySelector('.product-details__quantity-btn--minus')
const plusBtn = document.querySelector('.product-details__quantity-btn--plus')
const cartBlock = document.querySelector('.ecommerce-header__cart')
const cartIcon = document.querySelector('.ecommerce-header__cart-icon')
const cartQuantityText = document.querySelector('.price-quantity')
const addToCartBtn = document.querySelector('.product-details__cart-btn')
const cartContent = document.querySelector('.ecommerce-header__cart-content')
const emptyMessage = document.querySelector('.ecommerce-header__cart-empty-message')
const cartTotalPrice = document.querySelector('.eccomerce-header__cart-item-total')
const deleteCartItem = document.querySelector('.eccomerce-header__cart-item-delete-btn')
const cartCount = document.querySelector('.ecommerce-header__cart-count')
const previousBtn = document.querySelector('.product-gallery__slider-icon--previous')
const nextBtn = document.querySelector('.product-gallery__slider-icon--next')
const menuIcon = document.querySelector('.ecommerce-header__menu-icon')
const navBar = document.querySelector('.ecommerce-header__nav')


// Thumbnail functionality
const imageSources = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]

allThumbnailImages.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", () => {
        mainImage.src = imageSources[i]

        // Thumbnail selection functionality
        document.querySelector('.product-gallery__thumbnail--selected')?.classList.remove('product-gallery__thumbnail--selected')
        thumbnail.classList.add('product-gallery__thumbnail--selected')
    })
})


// Quantity functionality
let quantity = 0

minusBtn.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--
        document.querySelector('.product-details__quantity-value').textContent = quantity
    }
})

plusBtn.addEventListener("click", () => {
    quantity++
    document.querySelector('.product-details__quantity-value').textContent = quantity
})


// Cart functionality
cartIcon.addEventListener("click", () => {
    cartBlock.classList.toggle('ecommerce-header__cart--shown')
})


// Delete cart item functionality
deleteCartItem.addEventListener("click", () => {
    quantity = 0
    document.querySelector('.product-details__quantity-value').textContent = quantity
    emptyMessage.style.display = 'block'
    cartContent.style.display = 'none'
    cartCount.style.display = 'none'
})


// Add to cart functionality
addToCartBtn.addEventListener("click", () => {

    if (quantity === 0) return
    // Update cart content
    emptyMessage.style.display = 'none'
    cartContent.style.display = 'block'

    // Update quantity text
    cartQuantityText.textContent = quantity

    // Update total price
    const price = 125
    const totalPrice = price * quantity
    cartTotalPrice.textContent = `$${totalPrice}.00`

    // Update cart count
    cartCount.textContent = quantity
    cartCount.style.display = 'block'

    // Reset quantity
    quantity = 0
    document.querySelector('.product-details__quantity-value').textContent = quantity
})


// Image slider functionality
const allMainImages = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]

let currentIndex = 0

previousBtn.addEventListener("click", () => {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = allMainImages.length - 1
    }
    mainImage.src = allMainImages[currentIndex]
})

nextBtn.addEventListener("click", () => {
    currentIndex++
    if (currentIndex >= allMainImages.length) {
        currentIndex = 0
    }
    mainImage.src = allMainImages[currentIndex]
})


// Mobile navigation functionality
menuIcon.addEventListener("click", () => {
    navBar.classList.toggle('mobile-nav')

    if (navBar.classList.contains('mobile-nav')) {
        menuIcon.src = 'images/icon-close.svg'
    }
    else {
        menuIcon.src = 'images/icon-menu.svg'
    }
})