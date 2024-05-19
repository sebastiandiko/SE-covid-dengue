<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Formulario de Paciente</title>
</head>
<body>
    <div class="container">
        <h1>¡Hola!</h1>
        <p>¿Cuál es el nombre del paciente?</p>
        <form action="./componentes/fiebre.php" method="post">
            <input type="text" name="paciente" required>
            <input type="submit" value="Guardar">
        </form>
    </div>
</body>
</html> 
