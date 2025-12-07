import { pool } from "../../config/db"

// todo post
const createTodo = async(user_id:string,title:string) =>{
    const result = await pool.query(`INSERT INTO todos(user_id,title) VALUES($1, $2) RETURNING *`,[user_id,title]);
    return result;
}

// get todo
const getTodo = async() =>{
    const reault = await pool.query(`SELECT * FROM todos`);
    return reault;
}

export const todoServics ={
    createTodo,
    getTodo,
}