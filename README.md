Entorno de desarrollo para realizar pruebas con el estandar ECMAScript 6
========================================================================

Actualmente la versión con la que trabajamos de javascript se basa en el estandar ECMAScript 5, pero ya se puede empezar a realizar pruebas con ECMAScript 6 es el nuevo estandar del cual se basa Javascript.

La implementación del estandar ES6 muy pronto estara completa en los navegadores modernos, pero mientras tanto podemos probar su funcionamiento para implementarlo en nuestras aplicación cuando se requira.

# Entorno de desarrollo

En este repositorio encontraras un entorno de desarrollo para realizar pruebas con ES6, se trara de la union de varias librerias que compila el código de ES6 a ES5.

## Como empezar

1.- Descarga o clona este repositorio en tu ordenador.

2.- Instala las dependencias del proyecto con la siguiente instrucción.-

```js
npm install
```

## Encender el servidor

El proyecto cuenta con un servidor web local para ver los resultados de las pruebas realizadas, el servidor web corre en la url.-

http://127.0.0.1:8080

Para encender el servidor ejecuta el comando.-

```js
npm start
```

Nota.- Esta opción solo corre el servidor, no compila el código con estandar ES6.

## Compilar código ES6 a ES5

El proyecto compilara el código ES6 a ES5 ejecutando el siguiente la siguiente instrucción.-

```js
npm run dev
```

Nota.- El código se compilara cada vez que detecte un cambio en el archivo es6.js, en caso de detectar un error de sintaxis en la compilación, el archivo no compilara hasta que sea corregido.

Esta opción cuenta con un servidor corriendo en la url.-

http://127.0.0.1:3000

El navegador se recargara automaticamente en los siguientes casos.-

* Cuando detecte cambios en el archivo index.html.
* Cuando detecte cambios en el archivo es6.js.

## Funcionamiento

El proyecto cuenta con el siguiente arbol de directorios.-

```js
directorio principal del proyecto
├── app
│ ├── es6
│ │ └── es6.js
│ ├── es5
│ │ └── es5.js
│ └── index.html
└── gulpfile.js
```

En el archivo es6.js estara todo el código con el estandar ECMAScript 6 y al momento de compilar se actualizara el archivo es5.js ya con el código compilado a ECMAScript 5 (compatible con todos los navegadores).