
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElemEentById("signupForm");

    document.getElementById("showSignup").onclick = function () {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    };

    document.getElementById("showLogin").onclick = function () {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    };

    // LOGIN
    document.getElementById("loginFormElement").addEventListener("submit", function (e) {
        e.preventDefault();

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userEmail", document.getElementById("loginEmail").value);

        window.location.href = "home.html";
    });

    // SIGNUP
    document.getElementById("signupFormElement").addEventListener("submit", function (e) {
        e.preventDefault();

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userEmail", document.getElementById("signupEmail").value);

        window.location.href = "home.html";
    });

});