// Hamburger menu Javascript

   function hamburger(){
       var menu = document.getElementById("hamburgerMenu");
       if (menu.style.display === "block"){
           menu.style.display = "none";
       }
       else{
           menu.style.display = "block";

       };
   };

// Einde hamburger menu Javascript

// Functies rode bollen Werkplek
function tekstBolEen() {
    var tekst1 = document.getElementById("een-tekst");
    if (tekst1.style.display === "none") {
        tekst1.style.display = "block";
    } else {
        tekst1.style.display = "none";
    }
}
function tekstBolTwee() {
    var tekst2 = document.getElementById("twee-tekst");
    if (tekst2.style.display === "none") {
        tekst2.style.display = "block";
    } else {
        tekst2.style.display = "none";
    }
}
function tekstBolDrie() {
    var tekst3 = document.getElementById("drie-tekst");
    if (tekst3.style.display === "none") {
        tekst3.style.display = "block";
    } else {
        tekst3.style.display = "none";
    }
}
function tekstBolVier() {
    var tekst4 = document.getElementById("vier-tekst");
    if (tekst4.style.display === "none") {
        tekst4.style.display = "block";
    } else {
        tekst4.style.display = "none";
    }
}
function tekstBolVijf() {
    var tekst5 = document.getElementById("vijf-tekst");
    if (tekst5.style.display === "none") {
        tekst5.style.display = "block";
    } else {
        tekst5.style.display = "none";
    }
}

// Einde functies rode bollen Werkplek