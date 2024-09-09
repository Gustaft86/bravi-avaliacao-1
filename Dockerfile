# Usar uma imagem base do Node.js
FROM node:22

# Criar o diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o resto do código da aplicação
COPY . .

# Expor a porta que o app vai usar (ajuste conforme necessário)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
