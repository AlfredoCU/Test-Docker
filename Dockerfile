# instala la imagen de node 19
FROM node:19

# Crea un directorio en un sistema linux
WORKDIR /usr/src/app

# Hace una copia del archivo package.json dentro del contenedor, para saber que paquetes debe de instalar
COPY package*.json ./

# Intalar las dependencias
RUN npm install

# Hace una copia de todos los archivos dentro del contenedor
COPY . .

# Correr en el puerto
EXPOSE 3000

# Ejecutar el comando
CMD [ "node", "server.js" ]