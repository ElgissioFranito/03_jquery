// WRITE LESS, DO MORE

// syntaxe complet :
// $ (document).ready(function(){
//     instruction
// })

// On peut la racourcir comme :
// $(function(){
//     instruxtion
// })

// selecteur :
// $("#id .class nomElement")
// selecteur de N-ème element de <p>
// $("p:nth-child(2)")            // pour le 2è element de <p>


// on peut aussi reccourcir avec la fonction fléché
//Cacher le titre h1 du document (hide)
$(() => {
    $("h2").hide();
});


// Evenement Jquery ()
$(() => {
    $("#pa").click(() =>
        $("#pp").hide());
    $("#pb").click(() =>
        $("#pp").show());

    // on peut aussi employer "on"
    $("#pc").on("mouseenter", () =>
        $("#pp").hide());
    $("#pc").on("mouseleave", () =>
        $("#pp").show());

})
