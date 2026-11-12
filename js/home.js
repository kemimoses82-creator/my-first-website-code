
// Redirect if NOT logged in
if (!localStorage.getItem("loggedIn")) {
    window.location.href = "auth.html";
}

// Auth button logic
const authLink = document.getElementById("authLink");

if (localStorage.getItem("loggedIn")) {
    authLink.textContent = "Logout";

    authLink.onclick = function () {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("userEmail");
        window.location.href = "index.html";
    };

} else {
    authLink.textContent = "Login";

    authLink.onclick = function () {
        window.location.href = "auth.html";
    };
}