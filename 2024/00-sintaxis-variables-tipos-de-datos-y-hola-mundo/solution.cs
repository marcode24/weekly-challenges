class SintaxisVariables
{
  public static void Execute()
  {

    // URL del sitio web oficial de C#
    // https://learn.microsoft.com/en-us/dotnet/csharp/

    // Este es un comentario de una sola línea en C#

    /*
     * Este es un comentario de múltiples líneas
     * en el lenguaje de programación C#
     */

    // Creación de una variable y una constante
    string nombreLenguaje = "C#"; // Variable
    const double PI = 3.1416;     // Constante

    // Variables que representan todos los tipos de datos primitivos de C#
    string cadenaTexto = "Hola, C#!";   // Cadena de texto
    int numeroEntero = 42;              // Entero
    bool esVerdadero = true;            // Booleano
    char caracter = 'A';                // Carácter
    double numeroDecimal = 3.14;        // Decimal de doble precisión
    float numeroFlotante = 2.71f;       // Decimal de precisión simple
    long numeroLargo = 9876543210L;     // Entero largo

    Console.WriteLine("Tipos de datos");
    Console.WriteLine("Cadena de texto: " + cadenaTexto);
    Console.WriteLine("Entero: " + numeroEntero);
    Console.WriteLine("Booleano: " + esVerdadero);
    Console.WriteLine("Carácter: " + caracter);
    Console.WriteLine("Decimal de doble precisión: " + numeroDecimal);
    Console.WriteLine("Decimal de precisión simple: " + numeroFlotante);
    Console.WriteLine("Entero largo: " + numeroLargo);

    // Imprime en la terminal el valor de la constante PI
    Console.WriteLine("Valor de PI: " + PI);

    // Imprime en la terminal el texto: "¡Hola, C#!"
    Console.WriteLine("¡Hola, " + nombreLenguaje + "!");
  }
}
