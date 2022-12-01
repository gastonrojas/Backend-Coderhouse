# Preentrega: Tercera Entrega del Proyecto Final

En esta entrega seguimos con la aplicacion de tipo servidor ecommerce-backend de arquitectura API rest.

El punto de entrada a la aplicacion se encuentra en src/main.js pudiendo utilizar los scripts npm start p npm test para
inicializar el servidor. Si pasamos como variable de entorno MODE="cluster" el servidor se inicializara en modo cluster.
El servidor puede ser accedido a travez del puerto 8080 o al puerto que se indique a travez de la variable de entorno PORT.

Variables de entorno utilizadas en .env:
- MONGODB_STRING
- SESSION
- GOOGLE_MAIL
- GOOGLE_PASSWORD
- ADMIN_MAIL

Las variables de entorno son captadas en src/config.js y de ahi exportadas.

Se utilizo passport con la estrategia de passport-local para registrar y logear usuaios.

Como persistencia en base de datos se utlizo MongoDb Atlas a travez del modulo nativo de MongoDB.

Todas las pruebas fueron realizadas con postman.
La coleccion de todas las peticiones utilizadas para probar el servidor se encuentran