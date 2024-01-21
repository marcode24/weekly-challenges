// Ejemplos de funciones básicas
function funcionSinParametrosNiRetorno(): void {
  console.log("¡Hola desde la función sin parámetros ni retorno!");
}

function funcionConParametros(parametro1: any, parametro2: any): void {
  console.log("Parámetro 1:", parametro1);
  console.log("Parámetro 2:", parametro2);
}

function funcionConRetorno(num1: number, num2: number): number {
  return num1 + num2;
}

// Funciones dentro de funciones
function funcionExterna(): void {
  console.log("Función externa");

  function funcionInterna(): void {
    console.log("Función interna");
  }

  funcionInterna();
}

// Variable GLOBAL y LOCAL
let variableGlobal: string = "Soy global";

function funcionConVariables(): void {
  let variableLocal: string = "Soy local";
  console.log(variableGlobal);
  console.log(variableLocal);
}

// Utilizar función ya creada en el lenguaje
let numeros: number[] = [1, 2, 3, 4, 5];
let cuadrados: number[] = numeros.map((numero) => numero * numero);

console.log("Cuadrados:", cuadrados);

// Función Extra (DIFICULTAD EXTRA)
function funcionExtra(texto1: string, texto2: string): number {
  let contador: number = 0;

  for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(texto1 + texto2);
    } else if (i % 3 === 0) {
      console.log(texto1);
    } else if (i % 5 === 0) {
      console.log(texto2);
    } else {
      console.log(i);
    }

    contador++;
  }

  return contador;
}

console.log("Número de impresiones:", funcionExtra("Fizz", "Buzz"));
