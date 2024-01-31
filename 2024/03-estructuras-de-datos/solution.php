<?php
// Arrays
$arrayEjemplo = [1, 2, 3, 4, 5];
echo 'Array original: ' . implode(', ', $arrayEjemplo) . PHP_EOL;

// Inserción
array_push($arrayEjemplo, 6);
echo 'Array después de la inserción: ' . implode(', ', $arrayEjemplo) . PHP_EOL;

// Borrado
array_pop($arrayEjemplo);
echo 'Array después del borrado: ' . implode(', ', $arrayEjemplo) . PHP_EOL;

// Actualización
$arrayEjemplo[0] = 10;
echo 'Array después de la actualización: ' . implode(', ', $arrayEjemplo) . PHP_EOL;

// Ordenación
$arrayOrdenado = $arrayEjemplo;
sort($arrayOrdenado);
echo 'Array ordenado: ' . implode(', ', $arrayOrdenado) . PHP_EOL;

// Objetos
$objetoEjemplo = ['nombre' => 'Juan', 'edad' => 25, 'ciudad' => 'Barcelona'];
echo 'Objeto original: ' . implode(', ', $objetoEjemplo) . PHP_EOL;

// Inserción/Actualización
$objetoEjemplo['profesion'] = 'Ingeniero';
echo 'Objeto después de la inserción/actualización: ' . implode(', ', $objetoEjemplo) . PHP_EOL;

// Borrado
unset($objetoEjemplo['edad']);
echo 'Objeto después del borrado: ' . implode(', ', $objetoEjemplo) . PHP_EOL;
?>
