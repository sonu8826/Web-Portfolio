var updatePrice = (value) => {
    var static = document.querySelector("#staticPrice");
    static.style.display = 'none';
    var dynamic = document.querySelector("#priceRange");
    dynamic.innerHTML = value;
}