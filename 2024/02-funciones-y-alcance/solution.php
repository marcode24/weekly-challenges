<?php
// Ejemplos de funciones básicas
function funcionSinParametrosNiRetorno() {
  echo '¡Hola desde la función sin parámetros ni retorno!' . PHP_EOL;
}

function funcionConParametros($parametro1, $parametro2) {
  echo 'Parámetro 1: ' . $parametro1 . PHP_EOL;
  echo 'Parámetro 2: ' . $parametro2 . PHP_EOL;
}

function funcionConRetorno($num1, $num2) {
  return $num1 + $num2;
}

// Funciones dentro de funciones
function funcionExterna() {
  echo 'Función externa' . PHP_EOL;

  function funcionInterna() {
    echo 'Función interna' . PHP_EOL;
  }

  funcionInterna();
}

// Variable GLOBAL y LOCAL
$variableGlobal = 'Soy global';

function funcionConVariables() {
  $variableLocal = 'Soy local';
  global $variableGlobal;
  echo $variableGlobal . PHP_EOL;
  echo $variableLocal . PHP_EOL;
}

// Utilizar función ya creada en el lenguaje
$numeros = [1, 2, 3, 4, 5];
$cuadrados = array_map(function($numero) {
  return $numero * $numero;
}, $numeros);

echo 'Cuadrados: ' . implode(', ', $cuadrados) . PHP_EOL;

// Función Extra (DIFICULTAD EXTRA)
function funcionExtra($texto1, $texto2) {
  $contador = 0;

  for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 === 0 && $i % 5 === 0) {
      echo $texto1 . $texto2 . PHP_EOL;
    } elseif ($i % 3 === 0) {
      echo $texto1 . PHP_EOL;
    } elseif ($i % 5 === 0) {
      echo $texto2 . PHP_EOL;
    } else {
      echo $i . PHP_EOL;
    }

    $contador++;
  }

  return $contador;
}

echo 'Número de impresiones: ' . funcionExtra('Fizz', 'Buzz') . PHP_EOL;
?>
