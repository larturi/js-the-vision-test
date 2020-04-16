<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
        <title>The Vision Test</title>

        <link rel="icon" href="img/favicon.ico" type="img/x-icon" />

        <meta name="description" content="The Vision Test. Prueba que tan rapida es tu vista">
        <meta name="keywords" content="Test Vision, Visual Test">
        <meta name="author" content="Leandro Arturi">

        <meta property="og:title" content="The Vision Test"/>
        <meta property="og:type" content="The Vision Test"/>
        <meta property="og:url" content="http://www.visiontest.projectsapps.com"/>
        <meta property="og:image" content="http://www.visiontest.projectsapps.com/img/logo.png"/>
        <meta property="og:site_name" content="The Vision Test: Prueba que tan rapida es tu vista"/>
        <meta property="og:description" content="The Vision Test: Prueba que tan rapida es tu vista"/>
        <meta property="fb:page_id" content="1447814972194891" />


        <!-- CSS  -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="css/materialize.css?v=1" type="text/css" rel="stylesheet" media="screen,projection"/>
        <link href="css/style.css?v=1" type="text/css" rel="stylesheet" media="screen,projection"/>
    </head>
    <body>

        <nav id="nav-bar" class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="index.php" class="brand-logo">The Vision Test</a>
                <ul class="right">
                    <li id="li-aciertos"><a id="aciertos" href="#">0</a></li>
                    <li id="li-reloj"><a id="reloj" href="#">60</a></li>
                    <li id="li-reiniciar"><a id="reiniciar" href="index.php"><i id="icon-refresh" class="material-icons">refresh</i></a></li>
                </ul>
            </div>
        </nav>

        <div class="section no-pad-bot" id="index-banner">

        <p><h3 id="titulo"></h3></p>

            <div class="social col s12">
                <ul class="share" style="">
                    <li class="btn-fbk"><a href="#"><img style="width: 50px; border-radius: 150px;" src="img/fb.png" alt="Compartir en Facebook" title="Compartir en Facebook"></a></li>
                    <li class="btn-twt"><a href="#"><img style="width: 50px; border-radius: 150px;" src="img/tw.png" alt="Compartir en Twitter" title="Compartir en Twitter"></a></li>
                </ul>
                <div class="col s12"><h3>Comparte tu puntaje!</h3></div>
            </div>

            <div id="cuadricula" class="container"> 

            </div>

        </div>


        <br><br>


        <!--  Scripts-->
        <script src="js/jquery-2.1.1.min.js?v=1"></script>
        <script src="js/materialize.js?v=1"></script>
        <script src="js/init.js?v=1"></script>
        <script src="js/pila.js?v=1"></script>
        <script src="js/game.js?v=1"></script>
        <script src="js/mvsociales.js?v=1"></script>
  


    </body>
</html>
