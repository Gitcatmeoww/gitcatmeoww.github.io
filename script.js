document.getElementById("contactForm").addEventListener("submit", (event) => {
    var buttonText = document.getElementById("bottonText");
    // Update submit button text to a circular loader
    buttonText.innerText = "";
    buttonText.setAttribute("class", "spinner-border"); 

    setTimeout(() => {
        // Create an alert after 3s
        const comment = document.getElementById('comment').value;
        window.alert(`You would like to talk with me about ${comment}?`);
        // Reset submit button value
        buttonText.setAttribute("class", ""); 
        buttonText.innerText = "Submit";
    }, 3000);

    event.preventDefault();
});
