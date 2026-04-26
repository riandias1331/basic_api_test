# Usa uma versão leve do Node 20
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências primeiro (otimiza o cache)
COPY package*.json ./

# Instala as dependências
RUN npm install --production

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o seu servidor usa
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["node", "src/server.js"]