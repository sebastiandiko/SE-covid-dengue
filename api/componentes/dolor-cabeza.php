<?php
$nososp = 0;
$covid = 0;
$dengue = 0;

//variable si / no
$respuesta = null;
// Procesar el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $temperatura = floatval($_POST['temperatura']);
    $paciente = htmlspecialchars($_POST['paciente']);
    // Lógica para determinar las variables
    if ($temperatura <= 36) {
        $nososp += 1;
    } elseif($temperatura >= 37 && $temperatura < 40){
        $covid += 1;
    }else{
        $dengue +=1;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Bienvenido</title>
</head>
<body>
    <div class="container">
        <h1>¿<?php echo $paciente; ?> tiene dolor de cabeza o dolor en los ojos?</h1>
        <a href="muscular.php?paciente=<?php echo $paciente;?>&nososp=<?php echo $nososp;?>&covid=<?php echo $covid;?>&dengue=<?php echo $dengue;?>&respuesta=si" class="button">Sí</a>
        <a href="muscular.php?paciente=<?php echo $paciente;?>&nososp=<?php echo $nososp;?>&covid=<?php echo $covid;?>&dengue=<?php echo $dengue;?>&respuesta=no" class="button">No</a>
    </div>
</body>
</html>

