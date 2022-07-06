# API - URL Shortener 
API desenvolvida com o intuito de gerar URLs reduzidas. 

## Tecnologias Utilizadas
<div>
	<img align="center" height="90" width="110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
	<img align="center" height="90" width="110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
	<img align="center" height="90" width="110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"/>
</div>

## Rotas

- Gerar a URL reduzida => **Método POST:** '/shorten'
    Exemplo:

    ````json
    Rota API: http://localhost:5000/shorten
    
    Body:
    	{
    		"originURL": "https://www.google.com"
    	}
    
    Response: 
    	{
    		"hash": "BKqzALRjD",
    		"originURL": "https://www.google.com",
    		"shortURL": "http://localhost:5000/BKqzALRjD",
    		"_id": "62c516aed02f68f5242c473b",
    		"createdAt": "2022-07-06T04:59:26.091Z",
    		"updatedAt": "2022-07-06T04:59:26.091Z",
    		"__v": 0
    	}
    ````

- Redirecionamento para a página utilizando a URL reduzida: **Método GET:** '/:hash'

    ````json
    Rota API: http://localhost:5000/BKqzALRjD
    ````

##  Como utilizar o projeto:

- Clone o repositório

  ````cmd
  git clone https://github.com/joao-victor-dias/url-shortener.git
  ````

- Instale as dependências do projeto

  ````cmd
  npm install
  ````

- Configure os arquivos .env e  Mongo.database.ts caso seja necessário

-  Mongo DB com Docker

  ````
  docker run -d --name mongodb -p 27017:27017  mongo
  ````

- Inicie o Projeto

  ````
  npm run start
  ````

  
