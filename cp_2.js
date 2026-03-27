let getProducts = () => {
    return fetch('https://www.course-api.com/javascript-store-products')
    .then((response)=> {
        return response.json();
    });
};
let fetchProductsThen = () => {
getProducts()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});
};
//functions used to retrieve data from the API 
//Use the .then() method to log multiple API responses(AKA Chain Promising)
//.catch is used to find and handle any errors
let fetchProductsAsync = async() => {
    try{
        const data = await getProducts();
        console.log(data);
        displayProducts(data);
    }catch(error) {
        handleError(error);
    }
};

function handleError(error) {
    console.error(`An error occurred: ${"An error occurred please try again"}`);
}

function displayProducts(products){
    const productContainer = document.querySelector('#product-container');
    products.slice(0,5).forEach((product) => {
        const {name, price, image} = product;//Adding destructuring to make code cleaner and more readable
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');//corrected 'product' to 'product-card' to add border and padding to the product cards
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.name}">
        `;
        productContainer.appendChild(productElement);
    });
}

//Selected #product container element 
//Looped through first 5 products
//creates and append HTML elements

fetchProductsThen();
fetchProductsAsync();



