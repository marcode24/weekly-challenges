# Reto #23: La base de datos

## Enunciado

Realiza una conexión desde el lenguaje que hayas seleccionado a la siguiente base de datos MySQL:

- Host: mysql-5707.dinaserver.com
- Port: 3306
- User: mouredev_read
- Password: mouredev_pass
- Database: moure_test

Una vez realices la conexión, lanza la siguiente consulta e imprime el resultado:

- SELECT * FROM `challenges`

Se pueden usar librerías para realizar la lógica de conexión a la base de datos.


## My solution

```js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysql-5707.dinaserver.com',
  user: 'mouredev_read',
  password: 'mouredev_pass',
  database: 'moure_test',
});

connection.connect();

connection.query('SELECT * FROM challenges', (error, results) => {
  if (error) throw error;
  console.table(results);
});

connection.end();

```

## Explanation of my solution

### `mysql` library

- First, I import the `mysql` library.

```js
const mysql = require('mysql');
```

### `connection` variable

- Then, I create a variable called `connection` that will be the connection to the database.

```js
const connection = mysql.createConnection({
  host: 'mysql-5707.dinaserver.com',
  user: 'mouredev_read',
  password: 'mouredev_pass',
  database: 'moure_test',
});
```

### `connection.connect` method

- After that, I connect to the database.

```js
connection.connect();
```

### `connection.query` method

- Then, I execute the query and print the results.

```js
connection.query('SELECT * FROM challenges', (error, results) => {
  if (error) throw error;
  console.table(results);
});
```

### `connection.end` method

- Finally, I close the connection.

```js
connection.end();
```
