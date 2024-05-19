<?php
$nososp = isset($_GET['nososp']) ? intval($_GET['nososp']) : 0;
$covid = isset($_GET['covid']) ? intval($_GET['covid']) : 0;
$dengue = isset($_GET['dengue']) ? intval($_GET['dengue']) : 0;
$respuesta = isset($_GET['respuesta']) ? $_GET['respuesta'] : 'none';

if ($respuesta == "si"){
    $covid +=2;
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
                echo "El paciente no es sospechoso.";
            } elseif ($covid > $nososp && $covid > $dengue) {
                echo "El paciente es sospechoso de tener COVID-19.";
            } elseif ($dengue > $nososp && $dengue > $covid) {
                echo "El paciente es sospechoso de tener dengue.";
            }
        ?>
    </div>
</body>
</html>