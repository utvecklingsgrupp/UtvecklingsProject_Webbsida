let product = {
    data:[{
        id:1,
        productName: "Cute Cat",
        color: "Yellow",
        category: "Hoodie",
        brand: "Grupp4",
        review: 1,
        price:"199",
        image:"/img/clothes/hoodie/hoodie-yellow-front.png",
        hoverImage:"/img/clothes/hoodie/hoodie-yellow-back.png"

    },
    {
        id:2,
        productName: "Cute Cat",
        color: "Blue",
        brand: "Grupp4",
        review: 2,
        category: "Hoodie",
        price:"299",
        image:"/img/clothes/hoodie/hoodie-blue-front.png",
        hoverImage:"/img/clothes/hoodie/hoodie-blue-back.png",
    },
    {
        id:3,
        productName: "Cute Cat",
        color: "Red",
        category: "Hoodie",
        brand: "Grupp4",
        review: 3,
        price:"159",
        image:"/img/clothes/hoodie/hoodie-red-front.png",
        hoverImage:"/img/clothes/hoodie/hoodie-red-back.png"
    },
    {
        id:4,
        productName: "Cute Cat",
        color: "Green",
        brand: "Grupp4",
        review: 4,
        category: "Hoodie",
        price:"399",
        image:"/img/clothes/hoodie/hoodie-green-front.png",
        hoverImage:"/img/clothes/hoodie/hoodie-green-back.png"
    },
    {
        id:5,
        productName: "Cute Cat",
        color: "Green",
        brand: "Grupp4",
        review: 5,
        category: "T-shirt",
        price:"599",
        image:"/img/clothes/tshirt/tshirt-green-front.png",
        hoverImage:"/img/clothes/tshirt/tshirt-green-back.png"
    },
    {
        id:6,
        productName: "Cute Cat",
        color: "Blue",
        category: "T-shirt",
        brand: "Grupp4",
        review: 3,
        price:"699",
        image:"/img/clothes/tshirt/tshirt-blue-front.png",
        hoverImage:"/img/clothes/tshirt/tshirt-blue-back.png"
    },
    {
        id:7,
        productName: "Cute Cat",
        color: "Yellow",
        brand: "Grupp4",
        review: 2,
        category: "T-shirt",
        price:"799",
        image:"/img/clothes/tshirt/tshirt-yellow-front.png",
        hoverImage:"/img/clothes/tshirt/tshirt-yellow-back.png"
    },
    {
        id:8,
        productName: "Cute Cat",
        color: "Red",
        category: "T-shirt",
        brand: "Grupp4",
        review: 1,
        price:"899",
        image:"/img/clothes/tshirt/tshirt-red-front.png",
        hoverImage:"/img/clothes/tshirt/tshirt-red-back.png"
    },
    {
        id:9,
        productName: "Cute Cat",
        color: "Yellow",
        category: "Pants",
        brand: "Grupp4",
        review: 1,
        price:"799",
        image:"/img/clothes/pants/pants-yellow-front.png",
        hoverImage:"/img/clothes/pants/pants-yellow-back.png"
    },
    {
        id:10,
        productName: "Cute Cat",
        color: "Red",
        category: "Pants",
        brand: "Grupp4",
        review: 5,
        price:"899",
        image:"/img/clothes/pants/pants-red-front.png",
        hoverImage:"/img/clothes/pants/pants-red-back.png"
    },
    {
        id:11,
        productName: "Cute Cat",
        color: "Blue",
        category: "Pants",
        brand: "Grupp4",
        review: 3,
        price:"599",
        image:"/img/clothes/pants/pants-blue-front.png",
        hoverImage:"/img/clothes/pants/pants-blue-back.png"
    },
    {
        id:12,
        productName: "Cute Cat",
        color: "Green",
        category: "Pants",
        brand: "Grupp4",
        review: 4,
        price:"699",
        image:"/img/clothes/pants/pants-green-front.png",
        hoverImage:"/img/clothes/pants/pants-green-back.png"
    }]
};

/*

for(let i of products.data){
    //Create product template
    let card = document.createElement("div");
    //Category
    card.classList.add("card","i.category");
    //Img
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //Img Tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);


    document.getElementById("product-container").appendChild(card);
}
*/

let productCards = [];

function renderProducts(product, targetContainerId) {
    const productContainer = document.getElementById(targetContainerId);

    if (!productContainer) {
        console.error(`Container with ID ${targetContainerId} not found.`);
        return;
    }

    product.data.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("pro");  // Add the 'pro' class



        productCard.addEventListener("mouseover", () => changeImage(productCard, product.hoverImage));
        productCard.addEventListener("mouseout", () => restoreImage(productCard, product.image));

        // Add a unique class based on the index
        productCard.classList.add(`product-${index + 1}`);

        productCard.dataset.category = product.category;
        productCard.dataset.color = product.color;

        // Rest of the code remains the same
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.productName;

        const productDescription = document.createElement("div");
        productDescription.classList.add("des");

        const productBrand = document.createElement("span");
        productBrand.textContent = product.brand;

        const productTitle = document.createElement("h5");
        productTitle.textContent = `${product.productName} ${product.category} - ${product.color}`;

        const starContainer = document.createElement("div");
        starContainer.classList.add("star");

        for (let i = 0; i < product.review; i++) {
            const star = document.createElement("i");
            star.classList.add("fas", "fa-star");
            starContainer.appendChild(star);
        }

        const productPrice = document.createElement("h4");
        productPrice.textContent = `${product.price} kr`;

        // Cart icon
        const cartIcon = document.createElement("a");
        cartIcon.href = "#";
        const cartIconElement = document.createElement("i");
        cartIconElement.classList.add("fa-solid", "fa-shopping-cart", "cart");

        cartIcon.appendChild(cartIconElement);

        // Append elements to the product card
        productCard.appendChild(productImage);
        productCard.appendChild(productDescription);
        productCard.appendChild(cartIcon);

        productDescription.appendChild(productBrand);
        productDescription.appendChild(productTitle);
        productDescription.appendChild(starContainer);
        productDescription.appendChild(productPrice);

        // Add the product card to the container
        productContainer.appendChild(productCard);

        productCards.push(productCard);
    });
}

function changeImage(productCard, hoverImage) {
    const imgElement = productCard.querySelector("img");
    imgElement.src = hoverImage;
}

// Function to restore the original image on mouseout
function restoreImage(productCard, originalImage) {
    const imgElement = productCard.querySelector("img");
    imgElement.src = originalImage;
}

function filterProducts(filterValue, filterType) {

    //console.log('Filtering by', filterType, 'with value', filterValue);
    const productCards = document.querySelectorAll('.pro');

    productCards.forEach(card => {
        const category = card.dataset.category;
        const color = card.dataset.color;

        // Check if the card matches the filter criteria
        const showCard = (
            (filterType === 'category' && (filterValue === 'all' || category === filterValue)) ||
            (filterType === 'color' && (filterValue === 'all' || color === filterValue))
        );
        // Toggle the visibility of the card
        card.style.display = showCard ? 'block' : 'none';
        card.classList.toggle('hidden', !showCard);
    });
    //console.log('Filtered products:', productCards);
}


/*Error checking*/
/*
function filterProducts(filterValue, filterType) {
    console.log('Filtering by', filterType, 'with value', filterValue);

    // Rest of the code...

    console.log('Filtered products:', productCards);
}*/

function sortProducts(sortType) {
    const productContainer = document.getElementById("product-container");
    const productCards = Array.from(productContainer.querySelectorAll('.pro'));

    switch (sortType) {
        case "reviewsHighToLow":
            // Sort by reviews high to low
            productCards.sort((a, b) => {
                const reviewsA = getReviews(a);
                const reviewsB = getReviews(b);
                return reviewsB - reviewsA;
            });
            break;

        case "priceHighToLow":
            // Sort by price high to low
            productCards.sort((a, b) => {
                const priceA = getPrice(a);
                const priceB = getPrice(b);
                return priceB - priceA;
            });
            break;

        case "priceLowToHigh":
            // Sort by price low to high
            productCards.sort((a, b) => {
                const priceA = getPrice(a);
                const priceB = getPrice(b);
                return priceA - priceB;
            });
            break;

        case "default":
        default:
            // Default sorting (reset to original order)
            productCards.sort((a, b) => {
                return Array.from(productContainer.children).indexOf(a) - Array.from(productContainer.children).indexOf(b);
            });
            break;
    }

    // Adds the sorted cards to the container
    productCards.forEach(card => productContainer.appendChild(card));

    productCards.forEach(card => card.classList.add('hidden'));
    setTimeout(() => {
        productCards.forEach(card => card.classList.remove('hidden'));
    }, 0);
}



function getReviews(card) {
    const starElement = card.querySelector('.star');
    const numberOfReviews = starElement ? starElement.children.length : 0;
    return numberOfReviews;
}

function getPrice(card) {
    const priceElement = card.querySelector('.des h4');
    const priceText = priceElement ? priceElement.textContent.trim() : '0 kr';

    const priceValue = parseFloat(priceText.replace(/\D/g, '')) || 0;
    return priceValue;
}

renderProducts(product, "product-container");
renderProducts(product, "product-container-homepage");