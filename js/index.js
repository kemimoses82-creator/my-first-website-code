
console.log("Index loaded");

// ALWAYS go to auth page
function goToAuth() {
    window.location.href = "auth.html";
}

document.addEventListener("DOMContentLoaded", function () {

    const authLink = document.getElementById("authLink");

    if (!authLink) return;

    if (localStorage.getItem("loggedIn")) {
        authLink.textContent = "Logout";

        authLink.onclick = function (e) {
            e.preventDefault();

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("userEmail");

            window.location.href = "index.html";
        };

    } else {
        authLink.textContent = "Login";

        authLink.onclick = function (e) {
            e.preventDefault();
            window.location.href = "auth.html";
        };
    }

});