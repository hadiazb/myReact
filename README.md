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
### Dependencias de desarrollo
- react: Libresia de JavaScript desarrollada por Facebook.
- react-dom: Dependencia para renderizar HTML en los componentes de React.
- styled-components: Dependencia para usar estilos dentro de los archivos de javascript.
## Pasos para configurar webpack

