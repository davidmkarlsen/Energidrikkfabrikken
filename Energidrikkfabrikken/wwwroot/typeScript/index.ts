
const navLinksEl = document.getElementById("navLinks");
const navBurgerEl = document.getElementById("navBurger");

let isNavLinksOpen = false;
function toggleNavLinks() {
    if(navLinksEl.style.display === "none") {
        navLinksEl.style.display = "block";
        isNavLinksOpen = true;
    } else {
        navLinksEl.style.display = "none";
        isNavLinksOpen = false;
    }

    checkScrollPosition()
}

//Endrer visning av burger element basert på skjermstørrelse
function checkWindowWidth() {
    if(window.innerWidth > 768) {
        navBurgerEl.style.display = "none";
        navLinksEl.style.display = "block";
    } else {
        navBurgerEl.style.display = "block";
        navLinksEl.style.display = "none";
    }
}

checkWindowWidth();

window.onresize = checkWindowWidth;

let navbarEl = document.getElementById("navbar");

function checkScrollPosition() {
    if(window.scrollY === 0 && !isNavLinksOpen) {
        navbarEl.style.backgroundColor = "transparent";
        navbarEl.style.boxShadow = "none"
    } else {
        navbarEl.style.backgroundColor = "#FFFFFF";
        navbarEl.style.boxShadow = "rgba(0, 0, 0, 0.15) 0 5px 15px 0";
    }
}

checkScrollPosition()

window.onscroll = checkScrollPosition;

interface EnergydrinkProduct {
    id: number;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
}

let shoppingCart: EnergydrinkProduct[] = [];

let shoppingCartInfo = {
    totalProducts: 0,
    totalPrice: 0
}

//Legger til handlekurv element i navbaren
const navLinksListEl = document.getElementById("navLinksList");

let newLinkEl = document.createElement("a");
newLinkEl.addEventListener('click', toggleShoppingCart);

let newLiEl = document.createElement("li");
newLiEl.className = "nav--links--list--item";

let newImgEl = document.createElement("img");
newImgEl.src = "svg/shoppingcart-icon.svg";
newImgEl.alt = "handlekurv ikon";

let spanEl = document.createElement("span");
spanEl.id = "shoppingCartCounter";
spanEl.innerHTML = `(${shoppingCartInfo.totalProducts})`;

newLiEl.append(newImgEl, spanEl);

newLinkEl.append(newLiEl)

navLinksListEl.append(newLinkEl);

const shoppingCartEl = document.getElementById("shoppingCart");

let shoppingCartDisplay = false;

function toggleShoppingCart() {
    shoppingCartDisplay = !shoppingCartDisplay;
    loadShoppingCartContent()
    
    if(shoppingCartDisplay) {
        shoppingCartEl.style.display = "block";
    } else {
        shoppingCartEl.style.display = "none";
    }

    if(window.innerWidth < 769) {
        isNavLinksOpen = false;
        toggleNavLinks()
    }
}

const shoppingCartTable = document.getElementById("shoppingCartTable");
const orderBtn = document.getElementById("orderBtn");
const emptyShoppingCartText = document.getElementById("emptyShoppingCartText");

function loadShoppingCartContent() {
    if(shoppingCart.length > 0) {
        shoppingCartTable.innerHTML = "";
        
        let totalPriceAll = 0;

        //Lager tr element for titlene i tabellen
        let headerTrEl = document.createElement("tr");
        
        let headerThProduktEl = document.createElement("th");
        let headerThPrisEl = document.createElement("th");
        let headerThAntallEl = document.createElement("th");
        let headerThTotalprisEl = document.createElement("th");
        let headerThDeleteBtnEl = document.createElement("th");
        
        headerThProduktEl.innerHTML = "Produkt";
        headerThPrisEl.innerHTML = "Pris";
        headerThAntallEl.innerHTML = "Antall";
        headerThTotalprisEl.innerHTML = "Total";

        headerTrEl.append(headerThProduktEl, headerThPrisEl, headerThAntallEl, headerThTotalprisEl, headerThDeleteBtnEl)
        
        for(let i=0; i<shoppingCart.length; i++) {
            //Lager tr element for hvert produkt i shoppingCart array
            let newTrEl = document.createElement("tr");
            
            let newTdProduktEl = document.createElement("td");
            let newTdPrisEl = document.createElement("td");
            let newTdAntallEl = document.createElement("td");
            let newTdTotalprisEl = document.createElement("td");
            let newTdDeleteBtnEl = document.createElement("td");

            console.log(shoppingCart[i].name);
            
            newTdProduktEl.innerHTML = shoppingCart[i].name;
            newTdPrisEl.innerHTML = `${String(shoppingCart[i].price)} kr`;
            newTdAntallEl.innerHTML = String(shoppingCart[i].quantity);
            newTdTotalprisEl.innerHTML = `${String(shoppingCart[i].totalPrice)} kr`;

            let newDeleteBtn = document.createElement("button");
            newDeleteBtn.innerHTML = "<img src='svg/delete-icon.svg' alt='slett produkt ikon'>"
            newDeleteBtn.className = "shopping-cart--content--table--td-delete-btn"
            newDeleteBtn.addEventListener('click', () => { deleteProductFromShoppingCart(i) })
            newTdDeleteBtnEl.append(newDeleteBtn);
            
            newTrEl.append(newTdProduktEl, newTdPrisEl, newTdAntallEl, newTdTotalprisEl, newTdDeleteBtnEl);
            
            shoppingCartTable.append(headerTrEl, newTrEl);
            
            totalPriceAll += shoppingCart[i].totalPrice;
        }

        //Lager tr element for totalpris for shoppingCart
        let totalPrisTrEl = document.createElement("tr");
        totalPrisTrEl.className = "shopping-cart--content--table--total-price-tr"
        
        let totalPrisTdProduktEl = document.createElement("td");
        let totalPrisTdPrisEl = document.createElement("td");
        let totalPrisTdAntallEl = document.createElement("td");
        let totalPrisTdTotalprisEl = document.createElement("td");
        let totalPrisTdDeleteBtnEl = document.createElement("td");

        totalPrisTdProduktEl.innerHTML = "Totalpris"
        totalPrisTdTotalprisEl.innerHTML = `${String(totalPriceAll)} kr`;

        totalPrisTrEl.append(totalPrisTdProduktEl, totalPrisTdPrisEl, totalPrisTdAntallEl, totalPrisTdTotalprisEl, totalPrisTdDeleteBtnEl);

        shoppingCartTable.append(totalPrisTrEl);

        shoppingCartTable.style.display = "block";
        orderBtn.style.display = "block";
        emptyShoppingCartText.style.display = "none";
        
    } else {
        shoppingCartTable.style.display = "none";
        orderBtn.style.display = "none";
        emptyShoppingCartText.style.display = "block";
    }
}

function deleteProductFromShoppingCart(shoppingCartProductIndex: number) {
    shoppingCart.splice(shoppingCartProductIndex, 1);
    
    toggleShoppingCart();
    toggleShoppingCart();

    shoppingCartInfo.totalProducts = shoppingCart.length;
    shoppingCartCounter.innerHTML = `(${shoppingCartInfo.totalProducts})`;
    
    return null;
}





    
