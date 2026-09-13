/* =====================================================
   VANTAGE MEN'S WEAR
   ===================================================== */


/* ================= SETTINGS ================= */

const WHATSAPP_NUMBER = "919876543210";


/* ================= IMAGE COLLECTION ================= */

const IMAGES = {

    shirt1:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=90",

    shirt2:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=90",

    shirt3:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1000&q=90",

    tshirt:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90",

    jeans:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90",

    shoes:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90",

    gym:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1a?auto=format&fit=crop&w=1000&q=90"
};


/* ================= PRODUCT DATA ================= */

const collections = [

    {
        id: "bestsellers",
        number: "02",
        title: "BEST <em>SELLERS.</em>",
        description:
            "The pieces clients love most — selected for fit, quality and effortless style.",

        products: [

            [
                "Premium Black Shirt",
                1499,
                IMAGES.shirt1,
                "BESTSELLER",
                "Shirts",
                true
            ],

            [
                "Classic Blue Denim",
                1899,
                IMAGES.jeans,
                "POPULAR",
                "Jeans"
            ],

            [
                "Essential White T-Shirt",
                799,
                IMAGES.tshirt,
                "TRENDING",
                "T-Shirts"
            ],

            [
                "Classic Polo Shirt",
                999,
                IMAGES.shirt2,
                "NEW",
                "Polos"
            ]

        ]
    },


    {
        id: "shirts",
        number: "03",
        title: "SHIRTS.",
        description:
            "Sharp cuts and premium fabrics designed for every occasion.",

        products: [

            [
                "Oxford White Shirt",
                1299,
                IMAGES.shirt2,
                "",
                "Shirts"
            ],

            [
                "Linen Beige Shirt",
                1499,
                IMAGES.shirt1,
                "",
                "Shirts"
            ],

            [
                "Black Overshirt",
                1599,
                IMAGES.shirt3,
                "",
                "Shirts"
            ],

            [
                "Classic Blue Shirt",
                1399,
                IMAGES.shirt2,
                "",
                "Shirts"
            ]

        ]
    },


    {
        id: "jeans",
        number: "04",
        title: "DENIM.",
        description:
            "Everyday denim engineered for comfort, durability and a perfect fit.",

        products: [

            [
                "Dark Blue Slim Jeans",
                1799,
                IMAGES.jeans,
                "",
                "Jeans"
            ],

            [
                "Washed Grey Jeans",
                1899,
                IMAGES.jeans,
                "",
                "Jeans"
            ],

            [
                "Classic Black Jeans",
                1799,
                IMAGES.jeans,
                "",
                "Jeans"
            ],

            [
                "Relaxed Blue Denim",
                1899,
                IMAGES.jeans,
                "",
                "Jeans"
            ]

        ]
    },


    {
        id: "tshirts",
        number: "05",
        title: "T-SHIRTS.",
        description:
            "Premium everyday basics with clean silhouettes and superior comfort.",

        products: [

            [
                "Heavyweight Black Tee",
                899,
                IMAGES.tshirt,
                "",
                "T-Shirts"
            ],

            [
                "Premium Beige Tee",
                849,
                IMAGES.tshirt,
                "",
                "T-Shirts"
            ],

            [
                "Essential Grey Tee",
                799,
                IMAGES.tshirt,
                "",
                "T-Shirts"
            ],

            [
                "Clean White Tee",
                799,
                IMAGES.tshirt,
                "",
                "T-Shirts"
            ]

        ]
    },


    {
        id: "polos",
        number: "06",
        title: "POLOS.",
        description:
            "Classic polo silhouettes reimagined for modern dressing.",

        products: [

            [
                "Black Signature Polo",
                999,
                IMAGES.shirt3,
                "",
                "Polos"
            ],

            [
                "Navy Classic Polo",
                999,
                IMAGES.shirt2,
                "",
                "Polos"
            ],

            [
                "White Premium Polo",
                1099,
                IMAGES.shirt1,
                "",
                "Polos"
            ],

            [
                "Olive Everyday Polo",
                1049,
                IMAGES.shirt3,
                "",
                "Polos"
            ]

        ]
    },


    {
        id: "trousers",
        number: "07",
        title: "TROUSERS.",
        description:
            "Tailored essentials that move effortlessly from work to weekend.",

        products: [

            [
                "Classic Black Trouser",
                1399,
                IMAGES.jeans,
                "",
                "Trousers"
            ],

            [
                "Beige Chino Trouser",
                1299,
                IMAGES.shirt2,
                "",
                "Trousers"
            ],

            [
                "Charcoal Formal Trouser",
                1499,
                IMAGES.jeans,
                "",
                "Trousers"
            ],

            [
                "Relaxed Stone Trouser",
                1399,
                IMAGES.shirt1,
                "",
                "Trousers"
            ]

        ]
    },


    {
        id: "gym",
        number: "08",
        title: "GYM <em>VESTS.</em>",
        description:
            "Lightweight performance essentials built for movement.",

        products: [

            [
                "Performance Black Vest",
                699,
                IMAGES.gym,
                "",
                "Gym Vests"
            ],

            [
                "White Training Vest",
                699,
                IMAGES.tshirt,
                "",
                "Gym Vests"
            ],

            [
                "Oversized Training Vest",
                749,
                IMAGES.gym,
                "",
                "Gym Vests"
            ],

            [
                "Performance Grey Vest",
                699,
                IMAGES.gym,
                "",
                "Gym Vests"
            ]

        ]
    }

];


/* ================= PRODUCT CARD ================= */

function createProduct(product) {

    const [
        name,
        price,
        image,
        badge,
        category,
        soldOut = false
    ] = product;


    return `
        <article
            class="product ${soldOut ? "sold-out-product" : ""}"
            data-name="${name}"
            data-price="${price}"
            data-category="${category}"
            data-image="${image}"
            data-soldout="${soldOut}"
        >

            <div class="product-image">

                ${
                    badge
                        ? `<span class="product-badge ${
                            soldOut ? "sold-out-badge" : ""
                        }">${badge}</span>`
                        : ""
                }


                <img
                    src="${image}"
                    alt="${name}"
                    loading="lazy"
                >


                ${
                    soldOut
                        ? `
                            <div class="sold-out-overlay">

                                <div class="sold-out-line"></div>

                                <h4>SOLD OUT</h4>

                                <div class="sold-out-line"></div>

                                <p>
                                    STAY TUNED<br>
                                    FOR RESTOCK
                                </p>

                            </div>
                        `
                        : ""
                }


                ${
                    soldOut
                        ? `
                            <button
                                class="quick-order sold-out-button"
                                disabled>

                                SOLD OUT

                            </button>
                        `
                        : `
                            <button class="quick-order">
                                ORDER ON WHATSAPP
                            </button>
                        `
                }

            </div>


            <div class="product-info">

                <div>

                    <h3>
                        ${name}
                    </h3>

                    <p>
                        ${category}
                    </p>

                </div>

                <strong>
                    ₹${price.toLocaleString("en-IN")}
                </strong>

            </div>

        </article>
    `;
}
/* ================= BUILD COLLECTIONS ================= */

const catalog = document.getElementById("catalog");

collections.forEach((collection, index) => {

    const section = document.createElement("section");

    section.id = collection.id;

    section.className =
        "section collection" +
        (index % 2 ? " collection-alt" : "");

    section.innerHTML = `

        <div class="section-head">

            <div>

                <span>
                    ${collection.number} / COLLECTION
                </span>

                <h2>
                    ${collection.title}
                </h2>

            </div>

            <p>
                ${collection.description}
            </p>

        </div>

        <div class="product-grid">

            ${collection.products
                .map(createProduct)
                .join("")}

        </div>
    `;

    catalog.appendChild(section);

});


/* ================= SHOES ================= */

const shoes = [

    [
        "Premium White Sneakers",
        2499,
        IMAGES.shoes,
        "BESTSELLER",
        "Shoes"
    ],

    [
        "Classic Black Sneakers",
        2399,
        IMAGES.shoes,
        "",
        "Shoes"
    ],

    [
        "Urban Runner",
        2699,
        IMAGES.shoes,
        "NEW",
        "Shoes"
    ],

    [
        "Classic Loafers",
        2299,
        IMAGES.shoes,
        "",
        "Shoes"
    ]

];

document.getElementById("shoeGrid").innerHTML =
    shoes.map(createProduct).join("");



/* =====================================================
   PRODUCT MODAL
   ===================================================== */

const modal = document.getElementById("modal");

const modalName =
    document.getElementById("modalName");

const modalPrice =
    document.getElementById("modalPrice");

const modalImage =
    document.getElementById("modalImage");

const quantityElement =
    document.getElementById("quantity");

let selectedProduct = null;

let selectedSize = "M";

let quantity = 1;


/* ================= OPEN PRODUCT ================= */

function openProduct(productCard) {

    selectedProduct = {

        name:
            productCard.dataset.name,

        price:
            Number(productCard.dataset.price),

        image:
            productCard.dataset.image

    };


    modalName.textContent =
        selectedProduct.name;


    modalPrice.textContent =
        "₹" +
        selectedProduct.price.toLocaleString("en-IN");


    modalImage.src =
        selectedProduct.image;


    modalImage.alt =
        selectedProduct.name;


    quantity = 1;

    quantityElement.textContent =
        quantity;


    selectedSize = "M";


    document
        .querySelectorAll(".sizes button")
        .forEach(button => {

            button.classList.toggle(
                "selected",
                button.textContent === "M"
            );

        });


    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* ================= PRODUCT CLICK ================= */

document.addEventListener("click", function(event) {

    const button =
        event.target.closest(".quick-order");

    if (!button) {
        return;
    }


    /* Don't allow sold-out products to be ordered */

    if (button.disabled) {
        return;
    }


    const product =
        button.closest(".product");


    if (
        product &&
        product.dataset.soldout === "true"
    ) {
        return;
    }


    openProduct(product);

});


/* ================= CLOSE MODAL ================= */

document
    .getElementById("modalClose")
    .addEventListener("click", closeModal);


function closeModal() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeModal();
    }

});


/* ================= SIZE ================= */

document
    .querySelectorAll(".sizes button")
    .forEach(button => {

        button.addEventListener("click", function() {

            document
                .querySelectorAll(".sizes button")
                .forEach(item =>
                    item.classList.remove("selected")
                );


            button.classList.add("selected");

            selectedSize =
                button.textContent;

        });

    });


/* ================= QUANTITY ================= */

document
    .getElementById("plus")
    .addEventListener("click", function() {

        quantity++;

        quantityElement.textContent =
            quantity;

    });


document
    .getElementById("minus")
    .addEventListener("click", function() {

        if (quantity > 1) {
            quantity--;
        }

        quantityElement.textContent =
            quantity;

    });


/* =====================================================
   WHATSAPP ORDER
   ===================================================== */

document
    .getElementById("whatsappOrder")
    .addEventListener("click", function() {

        if (!selectedProduct) {
            return;
        }


        const total =
            selectedProduct.price * quantity;


        /*
            IMPORTANT:
            This uses a BACKTICK template literal.
            Do not replace ` with '.
        */

        const message = `Hello! 👋

I would like to order:

Product: ${selectedProduct.name}
Size: ${selectedSize}
Quantity: ${quantity}
Price: ₹${selectedProduct.price.toLocaleString("en-IN")}
Total: ₹${total.toLocaleString("en-IN")}

Please confirm availability and delivery details.

Thank you!`;


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });



/* =====================================================
   HERO SLIDER
   ===================================================== */

const slides =
    document.querySelectorAll(".hero-slide");

const dotsContainer =
    document.getElementById("sliderDots");

let currentSlide = 0;


/* CREATE DOTS */

slides.forEach((slide, index) => {

    const dot =
        document.createElement("button");

    dot.className =
        "dot" +
        (index === 0 ? " active" : "");


    dot.addEventListener("click", function() {

        goToSlide(index);

    });


    dotsContainer.appendChild(dot);

});


function goToSlide(index) {

    slides[currentSlide]
        .classList.remove("active");


    dotsContainer
        .children[currentSlide]
        .classList.remove("active");


    currentSlide = index;


    slides[currentSlide]
        .classList.add("active");


    dotsContainer
        .children[currentSlide]
        .classList.add("active");

}


/* NEXT */

document
    .getElementById("nextSlide")
    .addEventListener("click", function() {

        goToSlide(
            (currentSlide + 1) %
            slides.length
        );

    });


/* PREVIOUS */

document
    .getElementById("prevSlide")
    .addEventListener("click", function() {

        goToSlide(
            (currentSlide - 1 + slides.length) %
            slides.length
        );

    });


/* AUTO SLIDE */

setInterval(function() {

    goToSlide(
        (currentSlide + 1) %
        slides.length
    );

}, 6000);



/* =====================================================
   HEADER SCROLL
   ===================================================== */

const header =
    document.getElementById("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuButton =
    document.getElementById("menuBtn");

const navigation =
    document.getElementById("nav");


menuButton.addEventListener("click", function() {

    navigation.classList.toggle("open");

});


navigation
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener("click", function() {

            navigation.classList.remove("open");

        });

    });



/* =====================================================
   SEARCH
   ===================================================== */

const searchOverlay =
    document.getElementById("search");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


document
    .getElementById("searchBtn")
    .addEventListener("click", function() {

        searchOverlay.classList.add("active");

        searchInput.focus();

    });


document
    .getElementById("searchClose")
    .addEventListener("click", function() {

        searchOverlay.classList.remove("active");

    });


searchInput.addEventListener("input", function() {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    searchResults.innerHTML = "";


    if (!query) {
        return;
    }


    const products =
        document.querySelectorAll(".product");


    let found = false;


    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();

        const category =
            product.dataset.category.toLowerCase();


        if (
            name.includes(query) ||
            category.includes(query)
        ) {

            found = true;


            const result =
                document.createElement("div");


            result.className =
                "search-result";


            result.textContent =
                product.dataset.name;


            result.addEventListener(
                "click",
                function() {

                    searchOverlay.classList.remove(
                        "active"
                    );


                    product.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });


                    openProduct(product);

                }
            );


            searchResults.appendChild(result);

        }

    });


    if (!found) {

        searchResults.innerHTML =
            "<p>No products found.</p>";

    }

});



/* =====================================================
   BACK TO TOP
   ===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


document
    .querySelectorAll(
        ".section, .category, .about-content, .contact-content, .gallery-item, .product"
    )
    .forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });



/* =====================================================
   ESC KEY
   ===================================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

        searchOverlay.classList.remove(
            "active"
        );

    }

});



/* =====================================================
   PRELOADER
   ===================================================== */

window.addEventListener("load", function() {

    setTimeout(function() {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 900);

});