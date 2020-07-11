# Tutorial para crear tu primera app en React.

## Pasos iniciales para tu proyecto.
- Abrir la consola y/o terminal.
- Busca una dirección en tu computadora donde puedas ubicar tus archivos.
- Inicia tu repositorio local con ```git init```
- Inicia tu proyecto con ```npm init -y```
- Despues de ejecutar el paso anterior en tu proyecto se genera el siguiente package.json con información de tu proyecto.
```
{
  "name": "my-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Tu nombre <tuemail@gmail.com>",
  "license": "MIT"
}
```
- Posterior a lo anterior podras usar la siguiente linea en tu terminal con  ```code .``` o si estas en atom  ```atom .```
- Luego de entrar a tu editor, debes generar un archivo para ignorar archivos con la siguiente extención ```.gitignore``` para de esta forma ignorar  archivos como ```node_modules```.
- Genera una carpeta llamada src donde ubicaras tus archivos de entrada de la aplicación.
- Genera un archivo README.md como el que estas leyendo.

## Pasos para instalar dependencias y paquetes.
### Dependencias de desarrollo
- Webpack: Empaquetador de modulos de JavaScrip.
- Webpack-cli: Interfaz de linea de comandos de webpack.
- @babel/core: Core/cerebro de babel.
- @babel/preset-env: Permite ejecutar transformaciones aceptadas por la ultima versión de EScript.
- @babel/preset-react: Transforma codigo para React.
- babel-loader: Loader de babel para transpilar.
- @babel/plugin-transform-runtime: 
### Dependencias de desarrollo
- react: Libresia de JavaScript desarrollada por Facebook.
- react-dom: Dependencia para renderizar HTML en los componentes de React.
- styled-components: Dependencia para usar estilos dentro de los archivos de javascript.
## Instalación de dependencias.
Acontinación te presento como puedes instalar tus dependencias ya sea de desarrollo o de producción, para ello te muestro el formato de la linea de codigo para la instación de dependencias de desarrollo.

```
npm install --save-dev webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader webpack-dev-server html-webpack-plugin
```
Formato de la linea de codigo para la instación de dependencias de producción.

```
npm install react react-dom styled-components
```

## Configuración de Webpack.

Para configurar tu archivo webpack debes entrar a este y copiar el siguiente codigo.

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		filename: './[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	devServer: {
		hot: true,
		open: true,
		port: 8000 || 3000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'myReact',
			template: path.resolve(__dirname, './src/index.html'),
		}),
	],
};
```

## Inicio de archivos
- Dentro de carpeta src crea un archivo ```index.html``` el cual se servira como punto de entrada antes de generar la carpeta dist que genera webpack.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```
## Inicio de tu proyecto en React
En la carpeta src crea un archivo  ```index.js``` el cual sera el punto de entrada de la app tal cual como se muestra acontinucación.

```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	'Hola mundo',
	document.getElementById('app')
);
```
## Crea las tareas que vas a ocupar en desarrollo y para ejecutar webpack.
Para ello vas a copiar las tareas que te presento acontinuación en los scripts

```
{
  "name": "my-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --config ./webpack.config.js",
    "build:dev": "webpack-dev-server --config ./webpack.config.js"
  },
  "keywords": [
    "React",
    "JavaScript"
  ],
  "author": "tu nombre <tuCorreo@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.10.4",
    "@babel/plugin-transform-runtime": "^7.10.4",
    "@babel/preset-env": "^7.10.4",
    "@babel/preset-react": "^7.10.4",
    "babel-loader": "^8.1.0",
    "html-webpack-plugin": "^4.3.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "styled-components": "^5.1.1"
  }
}
```