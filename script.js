// Accordion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(button => {
    button.addEventListener("click", function () {

        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    });
});

// Search
function searchSections() {

    const input = document.getElementById("search").value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}
