using System;

class OperadoresEstructurasControl
{
  public static void Execute()
  {
    // Operadores aritméticos
    int suma = 5 + 3;
    int resta = 10 - 4;
    int multiplicacion = 6 * 7;
    double division = 20 / 4;
    int modulo = 15 % 4;

    Console.WriteLine("Operadores Aritméticos:");
    Console.WriteLine($"Suma: {suma}");
    Console.WriteLine($"Resta: {resta}");
    Console.WriteLine($"Multiplicación: {multiplicacion}");
    Console.WriteLine($"División: {division}");
    Console.WriteLine($"Módulo: {modulo}");

    // Operadores lógicos
    bool and = true && false;
    bool or = true || false;
    bool not = !true;

    Console.WriteLine("\nOperadores Lógicos:");
    Console.WriteLine($"AND: {and}");
    Console.WriteLine($"OR: {or}");
    Console.WriteLine($"NOT: {not}");

    // Operadores de comparación
    bool igual = 5 == int.Parse("5"); // Conversión necesaria en C#
    bool diferente = 10 != 5;
    bool mayorQue = 15 > 10;
    bool menorQue = 7 < 12;

    Console.WriteLine("\nOperadores de Comparación:");
    Console.WriteLine($"Igual (==): {igual}");
    Console.WriteLine($"Diferente (!=): {diferente}");
    Console.WriteLine($"Mayor Que (>): {mayorQue}");
    Console.WriteLine($"Menor Que (<): {menorQue}");

    // Operadores de asignación
    int x = 10;
    x += 5; // equivalente a x = x + 5
    int y = 20;
    y *= 2; // equivalente a y = y * 2

    Console.WriteLine("\nOperadores de Asignación:");
    Console.WriteLine($"x: {x}");
    Console.WriteLine($"y: {y}");

    // Operadores bitwise
    int bitwiseAnd = 5 & 3; // AND
    int bitwiseOr = 5 | 3; // OR
    int bitwiseXor = 5 ^ 3; // XOR
    int bitwiseNot = ~5; // NOT
    int leftShift = 5 << 1; // Left Shift
    int rightShift = 5 >> 1; // Right Shift
    int zeroFillRightShift = (int)((uint)5 >> 1); // Zero-fill Right Shift

    Console.WriteLine("\nOperadores Bitwise:");
    Console.WriteLine($"Bitwise AND (&): {bitwiseAnd}");
    Console.WriteLine($"Bitwise OR (|): {bitwiseOr}");
    Console.WriteLine($"Bitwise XOR (^): {bitwiseXor}");
    Console.WriteLine($"Bitwise NOT (~): {bitwiseNot}");
    Console.WriteLine($"Left Shift (<<): {leftShift}");
    Console.WriteLine($"Right Shift (>>): {rightShift}");
    Console.WriteLine($"Zero-fill Right Shift (>>>): {zeroFillRightShift}");

    // Estructuras de control
    // Condicionales
    int edad = 18;
    if (edad >= 18)
    {
      Console.WriteLine("\nEres mayor de edad.");
    }
    else
    {
      Console.WriteLine("\nEres menor de edad.");
    }

    // Iterativas
    Console.WriteLine("\nNúmeros entre 10 y 55 (pares, no 16 ni múltiplos de 3):");
    for (int i = 10; i <= 55; i++)
    {
      if (i % 2 == 0 && i != 16 && i % 3 != 0)
      {
        Console.WriteLine(i);
      }
    }

    // Excepciones
    try
    {
      throw new Exception("Este es un ejemplo de excepción.");
    }
    catch (Exception ex)
    {
      Console.WriteLine($"\nExcepción: {ex.Message}");
    }
  }
}
