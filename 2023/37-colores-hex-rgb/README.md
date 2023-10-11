# Reto 37: Colores Hex y RGB

## Enunciado

Crea las funciones capaces de transformar colores HEX a RGB y viceversa.

Ejemplos:
- RGB a HEX: r: 0, g: 0, b: 0 -> #000000
- HEX a RGB: hex: #000000 -> (r: 0, g: 0, b: 0)

## My solution

```js
const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

const rgbToHex = (rgb) => {
  const [r, g, b] = rgb.slice(4, -1).split(', ');
  const hex = [r, g, b]
    .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
};
```

## Explanation of my solution 

### `hexToRgb`

- First, I declare a function that receives a string as a parameter.

```js
const hexToRgb = (hex) => { ... };
```

- Then, I declare a variable named `r` that will store the red value of the RGB color.

```js
const r = parseInt(hex.slice(1, 3), 16);
```

- Then, I declare a variable named `g` that will store the green value of the RGB color.

```js
const g = parseInt(hex.slice(3, 5), 16);
```

- Then, I declare a variable named `b` that will store the blue value of the RGB color.

```js
const b = parseInt(hex.slice(5, 7), 16);
```

- Then, I return the RGB color.

```js
return `rgb(${r}, ${g}, ${b})`;
```

### `rgbToHex`

- First, I declare a function that receives a string as a parameter.

```js
const rgbToHex = (rgb) => { ... };
```

- Then, I declare a variable named `r` that will store the red value of the RGB color.

```js
const [r, g, b] = rgb.slice(4, -1).split(', ');
```

- Then, I declare a variable named `g` that will store the green value of the RGB color.

```js
const [r, g, b] = rgb.slice(4, -1).split(', ');
```

- Then, I declare a variable named `b` that will store the blue value of the RGB color.

```js
const [r, g, b] = rgb.slice(4, -1).split(', ');
```

- Then, I declare a variable named `hex` that will store the HEX color.

```js
const hex = [r, g, b]
  .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
  .join('');
```

- Then, I return the HEX color.

```js
return `#${hex}`;
```


