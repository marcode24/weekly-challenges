using System;

class WeeklyChallenges
{
  private class Challenge(string name, Action execute)
  {
    public string Name { get; } = name;
    public Action Execute { get; } = execute;
  }

  private static readonly Dictionary<string, Challenge> challenges2024 = new() {
    { "00", new Challenge("Sintaxis, variables, tipos de datos y ¡Hola, Mundo!", SintaxisVariables.Execute) },
    { "01", new Challenge("Operadores y estructuras de control", OperadoresEstructurasControl.Execute) },
  };

  private static readonly Dictionary<int, Dictionary<string, Challenge>> challengeActions = new() {
    { 2024, challenges2024 },
  };


  static void Main(string[] args)
  {
    if (args.Length != 2)
    {
      Console.WriteLine("Por favor, ingresa el año y el número del reto que deseas ejecutar. \nEjemplo: dotnet run 2024 01");
      return;
    }

    if (!int.TryParse(args[0], out var year))
    {
      Console.WriteLine("El año ingresado no es válido. Asegúrate de ingresar un número.");
      return;
    }

    string challenge = args[1];

    ExecuteChallenge(year, challenge);
  }

  private static void ExecuteChallenge(int year, string challenge)
  {
    if (challengeActions.TryGetValue(year, out var yearChallenges) &&
         yearChallenges.TryGetValue(challenge, out var challengeData))
    {
      Console.WriteLine($"Ejecutando reto: {challengeData.Name}\n");
      challengeData.Execute();
    }
    else
      Console.WriteLine("El reto ingresado no existe.");
  }
}
