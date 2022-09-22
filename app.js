//Display Thank you page after clicking submit
const submitButton = document.querySelector("#submit-button");
const ratingCard = document.querySelector("#rating-card");
const thankyouCard = document.querySelector("#thankyou-card");

function thankYou() {
    thankyouCard.style.display = "block";
}

submitButton.addEventListener("click", thankYou);


//Display rating text on thank you page according to selected rating
const selectedText = document.querySelector("#selected-text");
document.querySelectorAll(".number-button").forEach(item => {
    item.addEventListener('click', event => {
        switch (item.value) {
            case "1":
                selectedText.innerHTML = "You selected 1 out of 5";
                break;
            case "2":
                selectedText.innerHTML = "You selected 2 out of 5";
                break;
            case "3":
                selectedText.innerHTML = "You selected 3 out of 5";
                break;
            case "4":
                selectedText.innerHTML = "You selected 4 out of 5";
                break;
            case "5":
                selectedText.innerHTML = "You selected 5 out of 5";
                break;
        }
    })
})

