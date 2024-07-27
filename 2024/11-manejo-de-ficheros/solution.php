<?php

// Nombre del archivo como tu usuario de GitHub
$username = 'marcode24';
$filename = "$username.txt";

$age = date('Y') - 2001;
$programingLanguage = 'JavaScript';

// Contenido del archivo
$contentFile = "Nombre: Marco Cruz\nEdad: $age\nLenguaje de programación favorito: $programingLanguage";

// Escribir en el archivo
file_put_contents($filename, $contentFile);

// Leer el archivo e imprimir el contenido
$fileContent = file_get_contents($filename);
echo $fileContent . "\n";

// Borrar el archivo
unlink($filename);
echo "Archivo $filename borrado.\n";

/*
----------------------------
--- Ejercicio de práctica---
----------------------------
*/

$salesFilename = 'ventas.txt';

// Función para añadir un producto
function addProduct($product, $quantity, $price) {
    global $salesFilename;
    $line = "$product, $quantity, $price\n";
    file_put_contents($salesFilename, $line, FILE_APPEND);
}

// Función para consultar productos
function listProducts() {
    global $salesFilename;
    if (file_exists($salesFilename)) {
        $content = file_get_contents($salesFilename);
        echo $content;
    } else {
        echo "No hay productos registrados.\n";
    }
}

// Función para actualizar un producto
function updateProduct($product, $quantity, $price) {
    global $salesFilename;
    if (!file_exists($salesFilename)) return;
    $lines = file($salesFilename, FILE_IGNORE_NEW_LINES);
    $updatedLines = array_map(function($line) use ($product, $quantity, $price) {
        if (strpos($line, $product) === 0) {
            return "$product, $quantity, $price";
        }
        return $line;
    }, $lines);
    file_put_contents($salesFilename, implode("\n", $updatedLines));
}

// Función para eliminar un producto
function deleteProduct($product) {
    global $salesFilename;
    if (!file_exists($salesFilename)) return;
    $lines = file($salesFilename, FILE_IGNORE_NEW_LINES);
    $updatedLines = array_filter($lines, function($line) use ($product) {
        return strpos($line, $product) !== 0;
    });
    file_put_contents($salesFilename, implode("\n", $updatedLines));
}

// Función para calcular ventas totales
function calculateTotalSales() {
    global $salesFilename;
    if (!file_exists($salesFilename)) return;
    $lines = file($salesFilename, FILE_IGNORE_NEW_LINES);
    $total = 0;
    foreach ($lines as $line) {
        if ($line) {
            list($product, $quantity, $price) = explode(', ', $line);
            $total += intval($quantity) * floatval($price);
        }
    }
    echo "Ventas totales: $total\n";
}

// Función para gestionar el menú
function menu() {
    global $salesFilename;
    while (true) {
        echo "
        1. Añadir producto
        2. Consultar productos
        3. Actualizar producto
        4. Eliminar producto
        5. Calcular ventas totales
        6. Salir
        \n";
        $choice = readline('Elige una opción: ');

        switch ($choice) {
            case 1:
                $product = readline('Nombre del producto: ');
                $quantity = readline('Cantidad vendida: ');
                $price = readline('Precio: ');
                addProduct($product, $quantity, $price);
                break;
            case 2:
                listProducts();
                break;
            case 3:
                $updateProductName = readline('Nombre del producto a actualizar: ');
                $updateQuantity = readline('Nueva cantidad vendida: ');
                $updatePrice = readline('Nuevo precio: ');
                updateProduct($updateProductName, $updateQuantity, $updatePrice);
                break;
            case 4:
                $deleteProductName = readline('Nombre del producto a eliminar: ');
                deleteProduct($deleteProductName);
                break;
            case 5:
                calculateTotalSales();
                break;
            case 6:
                if (file_exists($salesFilename)) {
                    unlink($salesFilename);
                    echo "Archivo $salesFilename borrado.\n";
                }
                exit();
            default:
                echo "Opción no válida.\n";
                break;
        }
    }
}

menu();
?>
