<?php

// Función que procesa parámetros y lanza excepciones
function procesarParametros($param) {
    try {
        if ($param === 1) {
            throw new Exception("Excepción personalizada: El parámetro no puede ser igual a 1");
        } elseif ($param === 2) {
            throw new RangeException("Excepción: El parámetro no puede ser igual a 2");
        } elseif ($param === 3) {
            throw new Error("Excepción: El parámetro no puede ser igual a 3");
        } else {
            echo "Parámetro procesado correctamente: $param\n";
        }
    } catch (Exception $e) {
        echo "Se ha producido un error: " . $e->getMessage() . "\n";
    } finally {
        echo "La ejecución ha finalizado.\n";
    }
}

// Ejemplos de llamada a la función procesarParametros
echo "Llamada con parámetro 0:\n";
procesarParametros(0);

echo "\nLlamada con parámetro 1:\n";
procesarParametros(1);

echo "\nLlamada con parámetro 2:\n";
procesarParametros(2);

echo "\nLlamada con parámetro 3:\n";
procesarParametros(3);

// Provocando errores adicionales
try {
    echo "\nIntentando dividir por cero (10/0):\n";
    $resultado = 10 / 0;
    echo "Resultado: $resultado\n";
} catch (Exception $e) {
    echo "Se ha producido un error: " . $e->getMessage() . "\n";
} finally {
    echo "La ejecución ha finalizado.\n";
}

try {
    echo "\nIntentando acceder a un índice no existente:\n";
    $array = [1, 2, 3];
    echo "Elemento en el índice 5: " . $array[5] . "\n";
} catch (Exception $e) {
    echo "Se ha producido un error: " . $e->getMessage() . "\n";
} finally {
    echo "La ejecución ha finalizado.\n";
}

?>
