# Entrega del Proyecto Final

En esta entrega seguimos con la aplicacion de tipo servidor ecommerce-backend de arquitectura API rest.

El punto de entrada a la aplicacion se encuentra en src/main.js pudiendo utilizar los scripts npm start p npm test para
inicializar el servidor. Si pasamos como variable de entorno MODE="cluster" el servidor se inicializara en modo cluster.
El servidor puede ser accedido a travez del puerto 8080 o al puerto que se indique a travez de la variable de entorno PORT.

Variables de entorno utilizadas en .env:

-PORT
-MONGODB_STRING
-PRIVATE_KEY
-ADMIN_EMAIL
-GOOGLE_PASSWORD

Las variables de entorno son captadas en src/config.js y de ahi exportadas.
