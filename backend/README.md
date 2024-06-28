
# Backend en Nest

Temos que ter instalado o DockerDesktop (app escritorio), tamén o NestJs, para este segundo executamos o seguinte comando:
```
npm i -g @nestjs/cli
```

Tamén executamos as dependencias que fagan falla:
```
npm i
```

Logo executamos o seguinte comando na consola de comandos:
```
docker compose up -d
```

Copiar o ```.env.template``` e renombralo a ```.env```

Unha vez esté correndo o backend en Docker:

# para lanzalo
```
npm run start:dev
```

Nota: Agora mesmo a URL de enviroments está apuntando a unha base de datos na nube creada por min, en Railway, coa que estiven facendo probas para facer o deploy para a presentación, temos varias opcións coas que estiven traballando:

1. **Baixar o MongoDB Compass (a mais sinxela)**
Esta aplicación permite crear unha conexión a unha base de datos en local, descargaríamola, crearíamos a base de datos viajarcomiendo y sustituiríamos a conexión que temos en enviroments pola que nos dá a aplicación.

- Para crear a base de datos en local temos que ter feito o docker compose up, logo unha vez se conecte a aplicación en local creamos a base de datos (viajarcomiendo), facemos click nos 3 puntos que aparecen no cadro verde onde pon localhost:27017 (ese porto no meu caso), damoslle a "Copy connection String", e pegámolo en enviroments en MONGO_URI. Logo xa podemos facer o "npm run start:dev".

Para probar se funciona eu teño a aplicación POSTMAN, unha aplicación para facer chamadas a base de datos ou a JSON, poñemos POST e a url localhost:3000/auth. Debería devolvernos esto:
```
{
    "message": [
        "email must be an email",
        "name must be a string",
        "password must be longer than or equal to 6 characters"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```
Esto está ben, é a resposta que esperábamos.

2. **Crear conta en MongoDB Atlas**
Creamos unha conta gratuita e creamos unha base de datos, administramos o link que nos dá logo de crear a base de datos e cambiamos en enviroments apuntando hacia ela.

3. **Crear conta en Railway**
Esto é o que ten o proxecto agora mesmo, o final decidínme por crear a conta de mongodb en Railway porque xa ten o deploy do backend na mesma plataforma.


## Links

Docker Desktop: https://www.docker.com/products/docker-desktop/
MongoDB Compass: https://www.mongodb.com/try/download/compass (ollo descargar o MongoDB Compass)

## Exemplo de Enviroments en local
MONGO_URI=mongodb://localhost:27017/
MONGO_DB_NAME=viajarcomiendo
JWT_SEED=EstaesMiSemilla!321