$(document).ready(function() {

    var randi = Math.floor((Math.random() * 12) + 0);
    var randj = Math.floor((Math.random() * 12) + 0);
    var etapa = 1;
    var alto = 12;
    var ancho = 12;
    var aciertos = 0;

    var pila = new stack();

    pila.push('QO');
    pila.push('1I');
    pila.push('G6');
    pila.push('VW');
    pila.push('MW');
    pila.push('9P');
    pila.push('IT');
    pila.push('S5');
    pila.push('B8');
    pila.push('25');
    pila.push('qp');
    pila.push('S8');
    pila.push('uv');
    pila.push('TI');
    pila.push('mn');
    pila.push('38');
    pila.push('98');
    pila.push('O0');
    pila.push('5S');
    pila.push('il');
    pila.push('ZN');
    pila.push('HA');
    pila.push('52');
    pila.push('8B');

    var x = pila.pop();

    ActivarReloj();

    var content = "";

    newGame(x.substr(0, 1), x.substr(1, 1), alto, ancho, randi, randj, etapa);

    function newGame(valorGlobal, valorUnico, alto, ancho, i_rand, j_rand, etapa) {

        $('#cuadricula').html("");

        $('#titulo').html('Encuentra el caracter ' + valorUnico);

        for (i = 0; i < alto; i++) {

            content += '<div class="row">';

            for (j = 0; j < ancho; j++) {

                if (i_rand == i && j_rand == j) {
                    content += ' <div class="col s1 grid-example unico">' + valorUnico + '</div>';
                } else {
                    content += ' <div class="col s1 grid-example">' + valorGlobal + '</div>';
                }

            }

            content += '</div>';

        }

        $('#cuadricula').html(content);
        content = "";


        $('.unico').on('click', function() {
            var randi = Math.floor((Math.random() * alto) + 0);
            var randj = Math.floor((Math.random() * ancho) + 0);

            var x = pila.pop();
            aciertos++;
            $('.tooltipped').tooltip({delay: 50});
            Materialize.toast('Bien!', 1000) // 4000 is the duration of the toast
            $('#aciertos').text(aciertos);
            newGame(x.substr(0, 1), x.substr(1, 1), alto, ancho, randi, randj, etapa);
        });

    }


    /*Helper*/
    window.addEventListener("keydown", function(e) {
        if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
            e.preventDefault();
        }
    })

    /*Social*/

    $(document).on('click', '.btn-twt a', function(e) {
        e.preventDefault();
        mv.twitter.compartir('The Vision Test: Pone a prueba tu rapidez visual. Mi Puntaje: ' + aciertos, 'http://visiontest.projectsapps.com/');
    });

    $(document).on('click', '.btn-fbk a', function(e) {
        e.preventDefault();
        window.location.assign('https://www.facebook.com/dialog/feed?app_id=1447814972194891&link=http%3A%2F%2Fwww.visiontest.projectsapps.com&name=The%20Vision%20Test&caption=www.visiontest.projectsapps.com&description=Demuestra%20que%20tan%20rapido%20funciona%20tu%20vista!!!%20Mi%20Puntaje%3A%20' + aciertos + '&redirect_uri=http%3A%2F%2Fwww.visiontest.projectsapps.com');
    });


});


function ActivarReloj() {
    var n = 59;
    setInterval(function() {
        if (n >= 0) {
            $('#reloj').text(n);
            n--;
        } else {
            $('#titulo').html("");
            $('#cuadricula').html("");
            $('.social').show();
        }
    }, 1000);
}


/*Reinicia*/

$('#reiniciar').on('click', function() {
    location.reload();
});

