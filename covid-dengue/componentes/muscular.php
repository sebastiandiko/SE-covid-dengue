<?php
$nososp = isset($_GET['nososp']) ? intval($_GET['nososp']) : 0;
$covid = isset($_GET['covid']) ? intval($_GET['covid']) : 0;
$dengue = isset($_GET['dengue']) ? intval($_GET['dengue']) : 0;
$respuesta = isset($_GET['respuesta']) ? $_GET['respuesta'] : 'none';

if ($respuesta == "si"){
    $covid +=1;
    $dengue +=2;
}else{
    $nososp +=1;
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
        <h1>¿El paciente tiene dolor muscular?</h1>
        <a href="vomito.php?nososp=<?php echo $nososp;?>&covid=<?php echo $covid;?>&dengue=<?php echo $dengue;?>&respuesta=si" class="button">Sí</a>
        <a href="vomito.php?nososp=<?php echo $nososp;?>&covid=<?php echo $covid;?>&dengue=<?php echo $dengue;?>&respuesta=no" class="button">No</a>
    </div>
</body>
</html>