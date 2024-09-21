import { sql } from './db.js'
import { randomUUID } from 'crypto'



export class Database{

async get(){

return await sql`select * from funcionarios`

}
    async post(funcionarios){
        await sql`insert into funcionarios (id, name, idade, cargo)
    values (${randomUUID()}, ${funcionarios.name}, ${funcionarios.idade}, ${funcionarios.cargo})`
        return await this.get();
    }
    async put(id, funcionarios){
        await sql`UPDATE funcionarios SET 
        name = ${funcionarios.name},
        idade = ${funcionarios.idade},
        cargo = ${funcionarios.cargo}
        WHERE id = ${id}`
        return await this.get();
    }

    async delete(id){
        await sql`DELETE FROM funcionarios 
        WHERE id = ${id}`
        return await this.get();
    }
}