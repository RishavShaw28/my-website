function checkName() {
    var name = document.getElementById("nameInput").value.trim().toLowerCase();
    if (name === "rishav" || name === "prachi") { 
        window.location.href = "index.html"; 
    } else {
        document.getElementById("message").innerText = "This website is not for you.";
    }
}
