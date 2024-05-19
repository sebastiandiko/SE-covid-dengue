<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $paciente = htmlspecialchars($_POST['paciente']);
} else {
    // Redirigir a la vista principal si se intenta acceder directamente
    header("Location: index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Temperatura</title>
</head>
<body>
    <div class="container">
        <h1>Ingrese la temperatura de <?php echo $paciente; ?> por favor</h1>
        <form action="dolor-cabeza.php" method="post">
            <input type="hidden" name="paciente" value=<?php echo htmlspecialchars($paciente); ?>>
            <label for="temperatura">Temperatura del paciente:</label>
            <input type="number" step="0.1" name="temperatura" id="temperatura" required>
            <input type="submit" value="Guardar">
        </form>
    </div>
</body>
</html>

