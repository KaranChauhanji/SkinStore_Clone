
document.addEventListener('DOMContentLoaded', function () {
    let products;

    fetch('product2.json')
        .then((res) => res.json())
        .then((data) => {
            products = data;
            displayProducts(products);
        })
        .catch((err) => console.log(err));

    const lowToHighBtn = document.getElementById('lowToHigh');
    const highToLowBtn = document.getElementById('highToLow');

    lowToHighBtn.addEventListener('click', () => {
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        displayProducts(products);
    });

    highToLowBtn.addEventListener('click', () => {
        products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        displayProducts(products);
    });
});

function displayProducts(products) {
    const productSection = document.getElementById('product-section');
    productSection.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productSection.appendChild(productCard);
    });
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    productCard.appendChild(img);

    const name = document.createElement('p');
    name.textContent = product.name;
    productCard.appendChild(name);

    const discount = document.createElement('p');
    discount.innerHTML = `${product.discount} <span>SKINM10</span>`;
    productCard.appendChild(discount);

    const price = document.createElement('p');
    price.textContent = `$ ${product.price}`;
    productCard.appendChild(price);

    const quickBuyBtn = document.createElement('button');
    quickBuyBtn.textContent = 'QUICK BUY';
    quickBuyBtn.addEventListener(`click`,function(){
window.location.href=`Sproduct.html`
    })
    productCard.appendChild(quickBuyBtn);

    return productCard;
}
