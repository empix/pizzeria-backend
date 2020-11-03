<h1 align="center">Pizzeria - Backend</h1>

Este repositório contém minha solução para o desafio encontrado [aqui](https://github.com/AmbulnzLLC/fullstack-challenge/tree/master/backend). <br>

---

### Porque estou fazendo este desafio ? <br>

Estava sem ideias do que fazer para colocar o que aprendi em prática, então resolvi fazer este desafio.

---

### Tecnologias

- [Node.js](https://nodejs.org)
  - [Express](http://expressjs.com)
  - [Mysql2](https://www.npmjs.com/package/mysql2)
- [MySQL](https://www.mysql.com/)

Porque não utilizei um ORM ou um Query Builder ? <br>
De forma simples eu queria colocar em prática o que aprendi de sql montando as queries na mão. Acredito que é uma boa maneira se se aprender antes de abstrair e utilizar um ORM ou Query Builder.

---

### Endpoints

**GET** - `/api/pizzas` - Lista todas as pizzas do banco de dados <br>
**POST** - `/api/pizzas` - Adiciona uma pizza no banco de dados <br>
**Exemplo de corpo json:**

```json
{
  "name": "Margherita",
  "price": "5.00",
  "ingredients": ["tomato", "mozzarella"]
}
```

<br>

**GET** - `/api/orders` - Lista todos pedidos do banco de dados <br>
**GET** - `/api/orders/:id` - Mostra detalhes sobre um pedido cujo id é passado na url <br>
**POST** - `/api/orders` - Adiciona um pedido no banco de dados <br>
**Exemplo de corpo json:**

```json
[
  {
    "pizzaId": 1,
    "quantity": 2
  },
  {
    "pizzaId": 4,
    "quantity": 1
  }
]
```

---

### Rodando o projeto na sua máquina

1- Clone o repositório

```
git clone https://github.com/empixx/pizzeria-backend.git
```

2- Entre na pasta do repositório

```
cd pizzeria-backend
```

3- Instale as dependências

```
yarn
```

4- Você precisará de um banco de dados mysql com as tabelas de acordo com este .sql [pizzeria-db.sql](https://github.com/empixx/pizzeria-backend/blob/main/pizzeria-db.sql)

5- Crie e configure o .env de acordo com o [.env.example](https://github.com/empixx/pizzeria-backend/blob/main/.env.example)

6- Inicie

```
yarn dev
```

---

### TODO

- [ ] Tratar melhor os erros
- [ ] Verificar existência dos registros no banco de dados para evitar erros
