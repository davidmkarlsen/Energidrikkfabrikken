//Gir funksjon til 'Legg til handlekurv' seksjon for hvert produkt
const productQuantityNumberMinusBtn = document.getElementById("productQuantityNumberMinusBtn") as HTMLButtonElement;
const productQuantityNumberPlusBtn = document.getElementById("productQuantityNumberPlusBtn") as HTMLButtonElement;
const productQuantityNumberInput = document.getElementById("productQuantityNumberInput") as HTMLInputElement;
const shoppingCartCounter = document.getElementById("shoppingCartCounter") as HTMLSpanElement;

productQuantityNumberPlusBtn.addEventListener('click', addProductQuantity);
productQuantityNumberMinusBtn.addEventListener('click', subtractProductQuantity);

function addProductQuantity() {
    let productQuantityNumberInputNumberValue = parseInt(productQuantityNumberInput.value);
    
    productQuantityNumberInputNumberValue += 1;

    productQuantityNumberInput.value = String(productQuantityNumberInputNumberValue);
}

function subtractProductQuantity() {
    let productQuantityNumberInputNumberValue = parseInt(productQuantityNumberInput.value);
    
    if(productQuantityNumberInputNumberValue > 1) {
        productQuantityNumberInputNumberValue -= 1;
    }
    
    productQuantityNumberInput.value = String(productQuantityNumberInputNumberValue);
}

function addToCart(productId, productName, productPrice) {
    let productQuantityNumberInputNumberValue = parseInt(productQuantityNumberInput.value);
    
    let energyDrinkProductInput = {
        id: productId,
        name: productName,
        quantity: productQuantityNumberInputNumberValue,
        price: productPrice,
        totalPrice: (productPrice * productQuantityNumberInputNumberValue)
    }

    if(shoppingCart.length === 0) {
        shoppingCart.push(energyDrinkProductInput);
        shoppingCartInfo.totalProducts = shoppingCart.length;
    } else {
        for(let i=0; i<shoppingCart.length; i++) {
            if(shoppingCart[i].id === productId) {
                shoppingCart[i].quantity += productQuantityNumberInputNumberValue;
                shoppingCart[i].totalPrice = (shoppingCart[i].price * shoppingCart[i].quantity);
            } else {
                shoppingCart.push(energyDrinkProductInput);
                shoppingCartInfo.totalProducts++;
            }
        }
    }

    toggleFeedback("addToCart");
    
    shoppingCartCounter.innerHTML = `(${shoppingCartInfo.totalProducts})`;
    
    productQuantityNumberInput.value = "1";

    toggleShoppingCart();
    toggleShoppingCart();
}




