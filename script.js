/* ==========================================
   COLLÈGE DU LÉMAN
   SUMMER CAMP 2026
========================================== */

// ===============================
// SEARCH CARDS
// ===============================

function searchCards() {

    const input = document
        .getElementById("search")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}

// ===============================
// CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

cards.forEach(card => observer.observe(card));

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// PAGE LOADED
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
