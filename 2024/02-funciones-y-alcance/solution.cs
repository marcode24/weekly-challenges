class FuncionesAlcance
{
  // Variable global
  static int globalVariable = 10;

  public static void Execute()
  {
    // 1. Función sin parámetros ni retorno
    PrintHello();

    // 2. Función con un parámetro
    PrintMessage("Hello, C#!");

    // 3. Función con varios parámetros
    AddNumbers(5, 10);

    // 4. Función con retorno
    int result = MultiplyNumbers(3, 4);
    Console.WriteLine($"Resultado de la multiplicación: {result}");

    // 5. Funciones dentro de funciones (con función local)
    OuterFunction();

    // 6. Variables locales y globales
    int localVariable = 5;
    Console.WriteLine($"Variable local: {localVariable}");
    Console.WriteLine($"Variable global antes de modificar: {globalVariable}");
    ModifyGlobalVariable();
    Console.WriteLine($"Variable global después de modificar: {globalVariable}");

    // 7. Función con dos cadenas de texto y retorno de un número (Dificultad Extra)
    int count = PrintNumbersWithText("Fizz", "Buzz");
    Console.WriteLine($"El número de veces que se imprimió un número es: {count}");
  }

  // Función sin parámetros ni retorno
  public static void PrintHello()
  {
    Console.WriteLine("Hello, World!");
  }

  // Función con un parámetro
  public static void PrintMessage(string message)
  {
    Console.WriteLine(message);
  }

  // Función con varios parámetros
  public static void AddNumbers(int a, int b)
  {
    Console.WriteLine($"Suma: {a + b}");
  }

  // Función con retorno
  public static int MultiplyNumbers(int a, int b)
  {
    return a * b;
  }

  // Función externa con función interna (local)
  public static void OuterFunction()
  {
    // Función local dentro de una función
    static void InnerFunction()
    {
      Console.WriteLine("Soy una función interna.");
    }

    Console.WriteLine("Soy la función externa.");
    InnerFunction(); // Llamada a la función interna
  }

  // Modificar la variable global
  public static void ModifyGlobalVariable()
  {
    globalVariable += 10;
  }

  // Función que recibe dos cadenas de texto y retorna un número (Dificultad Extra)
  public static int PrintNumbersWithText(string text1, string text2)
  {
    int count = 0;

    for (int i = 1; i <= 100; i++)
    {
      if (i % 3 == 0 && i % 5 == 0)
      {
        // Si es múltiplo de 3 y 5, imprime ambas cadenas concatenadas
        Console.WriteLine(text1 + text2);
      }
      else if (i % 3 == 0)
      {
        // Si es múltiplo de 3, imprime la primera cadena
        Console.WriteLine(text1);
      }
      else if (i % 5 == 0)
      {
        // Si es múltiplo de 5, imprime la segunda cadena
        Console.WriteLine(text2);
      }
      else
      {
        // Imprime el número y aumenta el contador
        Console.WriteLine(i);
        count++;
      }
    }

    // Retorna la cantidad de veces que se imprimió un número
    return count;
  }
}
