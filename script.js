document.addEventListener("DOMContentLoaded", function () {

    // Confetti on load
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // --------------------
    // SLIDESHOW
    // --------------------
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slides");

        if (slides.length === 0) return; // safety check

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].classList.add("active");

        setTimeout(showSlides, 4000);
    }

    showSlides();

    // --------------------
    // COUNTDOWN
    // --------------------
    const birthday = new Date("2025-12-13T18:54:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        clearInterval(timer);

        // Hide countdown text
        document.getElementById("countdown").style.display = "none";
        document.getElementById("beforeText").style.display = "none";

        // Show birthday content
        document.getElementById("birthdayMessage").style.display = "block";
        document.querySelector(".slideshow-container").style.display = "block";
        document.getElementById("playButton").style.display = "inline-block";

        confetti({ particleCount: 300, spread: 120 });
        return;
    }

    document.getElementById("days").innerText =
        Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("mins").innerText =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("secs").innerText =
        Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

    // --------------------
    // MUSIC BUTTON
    // --------------------
    document.getElementById("playButton").onclick = function () {
        document.getElementById("bgMusic").play();
        this.style.display = "none";
    };

});