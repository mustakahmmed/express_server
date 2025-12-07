import { Request, Response } from "express";
import { todoServics } from "./todo.service";


// todo post
const todoPost = async (req:Request,res:Response)=>{
  const {user_id,title} =req.body

 try {
  const result = await todoServics.createTodo(user_id,title);
  res.status(202).json({
    successful:true,
    message:"todo created",
    data:result.rows[0]
  })
 } catch (err:any) {
  res.status(500).json({
    success:false,
    message: err.message
  })
 }
  
}

// get todo
const getTodo = async (req:Request,res:Response)=>{
  try {
    const result = await todoServics.getTodo();
  res.status(200).json({
    success:true,
    message:"todos retrived successfully",
    data:result.rows
  })
  } catch (err:any) {
    res.status(500).json({
      success:false,
      message:err.message,
      data:err
    })
  }
}

export const todoControllers = {
    todoPost,
    getTodo
}