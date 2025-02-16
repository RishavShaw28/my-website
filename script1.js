function checkName() {
    var name = document.getElementById("nameInput").value.trim();
    if (name.toLowerCase() === "rishav","prachi") {
        window.location.href = "index.html"; 
    } else {
        document.getElementById("message").innerText = "This website is not for you.";
    }
}