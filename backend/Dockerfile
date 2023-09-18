# Use uma imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta que o app usa (ajuste conforme necessário)
EXPOSE 3000

# Comando para executar o aplicativo
CMD [ "node", "dist/server.js" ]
