# Processo Seletivo: Backend Estágio

Desafio: criar uma API RPC para o gerenciamento de uma fila de pessoas.

Endpoints:

    - `/createUser` - Cadastra usuário;
    - `/addToLine` - Coloca um usuário na última posição da fila;
    - `/findPosition` - Retorna a posição de um usuário a partir de seu email;
    - `/showLine` - Lista os usuários da fila e suas respectivas posições;
    - `/filterLine` - Lista os usuários filtrados a partir de um parâmetro;
    - `/popLine` - Tira a pessoa na primeira posição da fila;


## Endpoints e suas funções:
### Cadastrar usuário

Esse metódo recebe nome, e-mail e gênero do usuário e retorna id, nome e email e gênero.

### Adicionar a fila

Esse metódo recebe o id do usuário a ser adicionado à fila e retorna a posição em que ele está na fila.

### Buscar usuário na fila

Esse metódo recebe o e-mail de um usuário e retorna a posição dele na fila.

### Ver fila

Esse metódo retorna uma lista de usuários (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

### Filtrar fila

Esse metódo recebe um gênero de usuário e retorna uma lista de usuários com aquele gênero (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

### Tirar da fila

Esse metódo retira da fila a pessoa na primeira posição e à retorna.

## Tecnologias utilizadas

    - Express
    - fs
    - Cors
    - Nodemon
    - Prettie
    - EsLint


## Requisições

 https://documenter.getpostman.com/view/12404093/TVKEXx49
