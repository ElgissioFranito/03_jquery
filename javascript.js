// WRITE LESS, DO MORE

// syntaxe complet :
// $ (document).ready(function(){           // quand le document sera près...
//     instruction                          // on fait l'instruction
// })

// On peut la racourcir comme :
// $(function(){
//     instruxtion
// })


// selecteur :  $("element")

// $("#id .class nomElement")
// selecteur de N-ème element
// $("p:nth-child(2)")                      // pour le 2è <p>


// on peut aussi reccourcir avec la fonction fléché
$("#phrase").click(() =>                    // attacher un event "click" sur #phrase
    alert("c'est la phrase 1 du document HTML!!!"));

//Cacher le titre h1 du document (hide)
$(() => {                                   // quand le document sera près
    $("h2").hide();                         // cacher tout les 'h2'
});

// un Event est un methode ( methode = function en POO)
// hide,show,... se sone des methode => donc il y a un parenthese a la fin

// ************   Evenement en JQuery ()   ************
$(() => {                                   // quand le document sera près
    $("#pa").click(() =>                    // attacher un event "click" sur #pa
        $("#phrase").hide());
    $("#pb").click(() =>
        $("#phrase").show());

    // on peut aussi employer "on"
    $("#pc").on("dblclick", () =>
        $("#phrase").toggle());             // interrupteur (hide/show)

    // sur la forme des objets
    $("#pc").on({
        mouseenter: () => { $("#phrase2").hide() },
        mouseleave: () => { $("#phrase2").show() }      // on peut en attacher plus encore
    })

    // event "hover"
    $("#phrase2").hover(                    //peut prendre 2 methode
        () => { $("h1").hide(); },          // quand la souris entre dans #phrase2
        () => { $("h1").show(); }           // quaud la souris sort de la #phrase2
    )
})


// ********** Les animations en JQuery *****************
// la duree de l'event
$(() => {
    $("#activer").click(() =>
        $("#txt").hide(3000)                // prend 3s pour cacher #txt
    )
    $("#desactiver").click(() =>
        $("#txt").show(3000)                // prend 3s pour montrer #txt
    )

    // callback
    $("#callback1").click(() => {
        $("#txt").hide(2000, () => {        // la 2è parametre est une fonction callback
            $("#txt").show(2500)
        });
    }
    )

    // deux callbacks
    $("#callback2").click(() => {
        $("#txt").hide(2000, () => {        // une fonction callback
            $("#txt").show(2500, () => {        // une autre fonction callback
                $("#txt").hide(3000)
            })
        })
    }
    )

    $("#fade").click(() => {                // fadeToggle
        $("#txt").fadeToggle(4000)              // interrupteur (fadeIn/fadeOut)
    })

}
)

