import { fastify } from 'fastify'
import { Database } from './database.js'


const server = fastify();
const database = new Database;

// end point para buscar do banco de dados
server.get('/', async () =>{

// await serve para esperar o database.get voltar
    return await database.get();
})

//end point para criar usuario único da tabela
server.post('/new-funcionarios', async (request) => {

//post é criar outro usuario unico na tabela   
    return await database.post(request.body);
})

// altera qualquer funcionario buscando pelo id no fim do link no endpoint "PUT"
server.put('/alter-funcionarios/:id', async (request) => {

// request params pede um parametro (como o exemplo do id) para achar o usuario a ser alterado, request body é todo o usuario    
    return await database.put(request.params.id, request.body);
})
// deleta o usuario pelo id, dessincroniza e usa request como parametro.
server.delete('/delete-funcionarios/:id', async (request) => {
    
    return await database.delete(request.params.id, request.body);
})

// abre localhost com a porta escolhida
server.listen({

    port:3333
});