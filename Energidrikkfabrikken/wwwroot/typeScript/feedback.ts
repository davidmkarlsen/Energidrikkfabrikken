const feedbackWrapper = document.getElementById("feedbackWrapper");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackParagraph = document.getElementById("feedbackParagraph");

function toggleFeedback(feedbackType: string) {
    if(feedbackType == "addToCart") {
        feedbackTitle.innerHTML = "Lagt til i handlekurv"
        feedbackParagraph.innerHTML = "Du har lagt til et produkt i handlekurven."
    }
    
    if(feedbackType == "confirmOrder") {
        feedbackTitle.innerHTML = "Bestilling fullført"
        feedbackParagraph.innerHTML = "Du har sendt en bestilling. Se epost for ordrebekreftelse."
        toggleShoppingCart();
    }

    if(feedbackType == "updateCustomer") {
        feedbackTitle.innerHTML = "Abonnement startet"
        feedbackParagraph.innerHTML = "Du vil få tilsendt en epost når vi legger til nye produkter."
    }
    
    feedbackWrapper.style.animation = "feedbackAnimation 2.5s ease-in-out 1";
    feedbackWrapper.addEventListener("animationend", () => {
        feedbackWrapper.style.animation = "none";
    })
}