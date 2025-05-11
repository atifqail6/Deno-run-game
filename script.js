const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
let isJumping = false;

// د ټوپ وهلو دنده
function jump() {
    if (!isJumping) {
        isJumping = true;
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
            isJumping = false;
        }, 500);
    }
}

// د ټکر پېژندنه
let checkCollision = setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 110 && obstacleLeft > 50 && dinoBottom <= 50) {
        alert("لوبه پای ته ورسیده!");
        location.reload();
    }
}, 10);

// کیبورډ ټوپ وهل
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        jump();
    }
});
