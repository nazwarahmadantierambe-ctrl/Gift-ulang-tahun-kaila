
function showSurprise() {
    let surprise = document.getElementById("surprise");

    if (surprise.style.display === "block") {
        surprise.style.display = "none";
    } else {
        surprise.style.display = "block";

        for (let i = 0; i < 25; i++) {
            createHeart();
        }
    }
}

function createHeart() {
    let heart = document.createElement("div");

    heart.classList.add("heart");

    let hearts = ["💗", "💕", "💖", "💜", "🌸"];

    heart.innerHTML = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 700);
