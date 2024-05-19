<?php
$nososp = isset($_GET['nososp']) ? intval($_GET['nososp']) : 0;
$covid = isset($_GET['covid']) ? intval($_GET['covid']) : 0;
$dengue = isset($_GET['dengue']) ? intval($_GET['dengue']) : 0;
$respuesta = isset($_GET['respuesta']) ? $_GET['respuesta'] : 'none';
$paciente = isset($_GET['paciente']) ? $_GET['paciente'] : 'none';

if ($respuesta == "si"){
    $dengue +=2;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
<div class="container">
            <?php
                if ($nososp > $covid && $nososp > $dengue) {
                    $diagnosis = $paciente ." no es sospechoso de contener covid o dengue.";
                    $imageURL = "../img/sano1.png"; // URL de la imagen para el diagnóstico
                } elseif ($covid > $nososp && $covid > $dengue) {
                    $diagnosis = $paciente ." es sospechoso de tener COVID-19.";
                    $imageURL = "../img/covid.png"; // URL de la imagen para el diagnóstico
                } elseif ($dengue > $nososp && $dengue > $covid) {
                    $diagnosis = $paciente ." es sospechoso de tener dengue.";
                    $imageURL = "../img/dengue.jpg"; // URL de la imagen para el diagnóstico
                }
            
                // Mostrar el diagnóstico y la imagen correspondiente
                echo "<p>$diagnosis</p>";
                if ($imageURL) {
                    echo "<img src=\"$imageURL\" alt=\"Imagen de la enfermedad\">";
                }
            ?>
    </div>
</body>
</html>