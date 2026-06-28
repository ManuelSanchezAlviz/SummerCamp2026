document.addEventListener("DOMContentLoaded", function () {

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(button => {

        button.addEventListener("click", function () {

            this.classList.toggle("active");

            const panel = this.nextElementSibling;

            if (panel.classList.contains("open")) {

                panel.classList.remove("open");

                panel.style.maxHeight = null;

            } else {

                panel.classList.add("open");

                panel.style.maxHeight = panel.scrollHeight + "px";

            }

        });

    });

});

/* SEARCH */

function searchCards(){

    const search=document.getElementById("search");

    if(!search) return;

    const value=search.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        card.style.display=
        card.innerText.toLowerCase().includes(value)
        ? "flex"
        : "none";

    });

}
