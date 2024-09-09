# Validador de Colchetes

Este projeto é uma aplicação Node.js para validar sequências de colchetes usando diferentes métodos de execução, incluindo o terminal local, Docker e Docker Compose.

## Requisitos

- Node.js (versão 18 ou superior)
- Docker
- Docker Compose (opcional)

## Estrutura do Projeto

```
bravi-avaliacao-1/
├── src/
│   ├── validators/
│   │   ├── BracketsValidator.js
│   ├── services/
│   │   ├── InputService.js
│   ├── index.js
├── package.json
├── Dockerfile
└── docker-compose.yml
```

## Configuração e Execução

### 1. Localmente no Terminal

a. **Instale as dependências:**

   Navegue para o diretório do projeto e instale as dependências:

   ```
   npm install
   ```

b. **Execute o aplicativo:**
  
   Para iniciar o aplicativo e interagir com ele, use:

   ```
   node src/index.js
   ```

### 2. Com Docker

a. **Construir a Imagem Docker:**

   No diretório raiz do projeto, construa a imagem Docker:

```
docker build -t brackets-validator .
```

b. **Executar o Contêiner Docker:**

   Execute o contêiner Docker interativamente:

```
npm run it-docker
```

### 3. Com Docker Compose

**Construir e Executar o Serviço com Docker Compose:**

   No diretório raiz do projeto, execute o comando Docker Compose:

```
docker-compose up
```

   Isso irá construir a imagem (se necessário) e iniciar o serviço definido no docker-compose.yml.

### 4. Arquivos de Configuração

Os arquivos Dockerfile e docker-compose.yml já estão incluídos no repositório. Aqui está uma breve descrição de cada um:

- **Dockerfile:** Define a imagem Docker usada para criar o ambiente do projeto.
- **docker-compose.yml:** Define o serviço Docker Compose para facilitar a execução do projeto.
Você pode revisar o conteúdo desses arquivos no repositório para entender a configuração do ambiente.

### Resumo das Instruções

- **Para executar localmente:** Instale dependências e execute o script com `node src/index.js`.
- **Para executar com Docker:** Construa a imagem e execute o contêiner com o comando Docker fornecido.
- **Para executar com Docker Compose:** Use o comando `docker-compose up` para iniciar o serviço.
