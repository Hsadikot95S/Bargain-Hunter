// script.js
let loginModal = document.getElementById("loginModal");
let registerModal = document.getElementById("registerModal");

let loginLink = document.getElementById("loginLink");
let registerLink = document.getElementById("registerLink");

let closeButtons = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
loginLink.onclick = function() {
    loginModal.style.display = "block";
}
registerLink.onclick = function() {
    registerModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        let modal = this.parentElement.parentElement;
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal || event.target == registerModal) {
        event.target.style.display = "none";
    }
}
