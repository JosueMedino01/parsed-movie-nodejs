
# Filmes 
## Descrição
Esse projeto tem como objetivo criar um rota capaz de retorna uma listagem de filmes, formatado para o client side. Existe uma URL que retorna os metadados do alguns filmes, e a ideia é formatar esses dados e retorná-los com informações mais úteis.

Tecnologias: Node/Express, Typescript, Jest,  

## URL do projeto
Foi criado uma instância EC2 para rodar nosso projeto, você pode acessar nossp endpoint pela seguinte rota: 
```
http://54.88.183.172:3000/filmes
```

## Como rodar o projeto?

```
npm run dev
```

## Como rodar os testes unitários?
```
npm run test
```

## Como fazer o build e inicializar a imagem docker?

```
docker build -t app-sky .
docker run -p 5000:5000 app-sky:latest 
```