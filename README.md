# Backend para un proyecto personal - Ohlala "Estudio de Belleza"

El siguiente es un proyecto realizado en Node.js utilizando Express para facilitar la implementación del mismo.

## Instalación

Para iniciar el proyecto debemos primero instalar las dependencias necesarias, para esto hacemos uso de npm:

```
npm init
```

Como recomendación extra, deberiamos de iniciar el control de versiones del proyecto, para esto iniciamos git:

```
git init
```

Una vez tenemos las dependencias necesarias, ya podemos iniciar el servidor, para esto podemos utilizar alguno de los dos script:

```
npm run dev //utiliza la dependencia de nodemon para iniciar el proyecto
npm run test //utiliza la implementación nativa de node --watch
```

## Modelo de consultas

Dentro del proyecto hay un archivo llamado `requestExample.http` el mismo, muestra como serian las consultas a las diferentes rutas del proyecto. (Para que funcione, es necesario tener la extención para Visual Studio Code llamada "REST CLIENT")

#### Un ejemplo de ruta sería la siguiente:

>  
>  
>     ```GET => http://localhost:3000/api/v1/servicio

>     ```

Espero que esto ayude!