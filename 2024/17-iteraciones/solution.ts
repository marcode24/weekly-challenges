/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

// 1. Usando un for loop tradicional
console.log('1. Usando un for loop tradicional:');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Usando un while loop
console.log('\n2. Usando un while loop:');
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// 3. Usando un do-while loop
console.log('\n3. Usando un do-while loop:');
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);

// 4. Usando Array.prototype.forEach
console.log('\n4. Usando Array.prototype.forEach:');
Array.from({ length: 10 }, (_, i) => i + 1).forEach((num: number) => console.log(num));

// 5. Usando un for...of loop
console.log('\n5. Usando un for...of loop:');
for (const num of Array.from({ length: 10 }, (_, i) => i + 1)) {
  console.log(num);
}

// 6. Usando un for...in loop
console.log('\n6. Usando un for...in loop:');
for (const index in Array.from({ length: 10 })) {
  console.log(Number(index) + 1);
}

// 7. Usando Array.prototype.map
console.log('\n7. Usando Array.prototype.map:');
Array.from({ length: 10 }, (_, i) => i + 1).map((num: number) => console.log(num));

// 8. Usando Array.prototype.reduce
console.log('\n8. Usando Array.prototype.reduce:');
Array.from({ length: 10 }, (_, i) => i + 1).reduce<null>((_, num: number) => {
  console.log(num);
  return null;
}, null);

// 9. Usando Array.prototype.every
console.log('\n9. Usando Array.prototype.every:');
Array.from({ length: 10 }, (_, i) => i + 1).every((num: number) => {
  console.log(num);
  return true;
});

// 10. Usando recursividad
console.log('\n10. Usando recursividad:');
function printNumbers(n: number): void {
  if (n > 10) return;
  console.log(n);
  printNumbers(n + 1);
}
printNumbers(1);
