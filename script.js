document.querySelector(".link").addEventListener("click", () => {
    document.getElementById("header").innerHTML = "Register";
    document.getElementById("email-div").style.display = "flex";
    document.querySelector(".button").innerHTML = "Sign Up";
    document.querySelector(".sign__in").style.display = "flex";
    document.querySelector(".sign__up").style.display = "none";
    document.querySelector(".forgot").style.display = "none";
    document.getElementById("user-lbl").innerHTML = "Username";
    document.querySelector(".socials__text").innerHTML =
        "Register with social accounts";
    user.value = "";
    email.value = "";
    pass.value = "";
});

document.querySelector(".link_L").addEventListener("click", () => {
    document.getElementById("header").innerHTML = "Login";
    document.getElementById("email-div").style.display = "none";
    document.querySelector(".button").innerHTML = "Sign In";
    document.querySelector(".sign__in").style.display = "none";
    document.querySelector(".sign__up").style.display = "flex";
    document.querySelector(".forgot").style.display = "block";
    document.getElementById("user-lbl").innerHTML = "Username or Email";
    document.querySelector(".socials__text").innerHTML =
        "Login with social accounts";
    user.value = "";
    email.value = "";
    pass.value = "";
});

var inputFields = document.querySelectorAll(".input-field");
var user_info = [];

function btn_click() {
    if (document.querySelector(".button").innerHTML === "Sign Up") {
        register();
    } else if (document.querySelector(".button").innerHTML === "Sign In") {
        login();
    }
}

function register() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var allFieldsFilled = true;

    inputFields.forEach(function (element) {
        if (element.value === "") {
            element.style.border = "1px solid red";
            allFieldsFilled = false;
        } else {
            element.style.border = "1px #9ca3af68 solid";
        }
    });

    if (allFieldsFilled) {
        var new_user = {
            username: user,
            email: email,
            password: pass,
        };
        user_info.push(new_user);
        alert("User Created");
    }
    console.log("User added to user_info:", user_info);
}

function login() {
    var loginUsername = document.getElementById("user").value;
    var loginPassword = document.getElementById("pass").value;

    for (var i = 0; i < user_info.length; i++) {
        var userInfo = user_info[i];

        if (
            (userInfo.username === loginUsername ||
            userInfo.email === loginUsername) && userInfo.password === loginPassword
        ) {
            alert("Logged In");
            return;
        }
    }
    alert("Invalid credentials");
}
