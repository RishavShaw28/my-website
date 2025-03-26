function moveRandomE1(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * (window.innerHeight - elm.clientHeight)) + "px";
    elm.style.left = Math.floor(Math.random() * (window.innerWidth - elm.clientWidth)) + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomE1(e.target);
});


moveRandom.addEventListener("touchstart", function(e) {
    moveRandomE1(e.target);
});
