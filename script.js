/* ==========================================
   COLLÈGE DU LÉMAN
   SUMMER CAMP 2026
========================================== */

/* ===========================
   ACCORDIONS
=========================== */

document.querySelectorAll(".accordion").forEach(button => {

    button.addEventListener("click", function(){

        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if(panel.style.maxHeight){

            panel.style.maxHeight = null;

            panel.style.paddingTop = "0";

            panel.style.paddingBottom = "0";

        }else{

            panel.style.paddingTop = "15px";

            panel.style.paddingBottom = "20px";

            panel.style.maxHeight = panel.scrollHeight + 40 + "px";

        }

    });

});

/* ===========================
   SEARCH (Home Page)
=========================== */

function searchCards(){

    const search = document.getElementById("search");

    if(!search) return;

    const value = search.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        if(card.innerText.toLowerCase().includes(value)){

            card.style.display="flex";

        }else{

            card.style.display="none";

        }

    });

}
