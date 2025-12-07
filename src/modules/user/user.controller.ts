import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userService } from "./user.service";

// create user
const createUser = async(req:Request,res:Response)=>{
try {
    const result = await userService.createUser(req.body);
    // console.log(result.rows[0]);
    // res.send({message:"data inserted"})
  res.status(201).json({
    success:true,
    message:"data inserted",
    data:result.rows[0]
  })
} catch (error:any) {
  res.status(500).json({
    success:false,
    message:error.message
  })
}  
}

// get user
const getUser = async (req:Request,res:Response)=>{
  try {
    const result = await userService.getUser();
  res.status(200).json({
    success:true,
    message:"users retrived successfully",
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

// get single user
const getSingleUser = async (req:Request,res:Response)=>{
  console.log(req.params);
  
  try {
    const result = await userService.getSingleUser(req.params.id as string) ;
    
    if (result.rows.length === 0) {
      res.status(404).json({
        success:false,
        message:"users not founded",
      })
    }else{
      res.status(200).json({
        success:true,
        message:"user founded",
        data:result.rows[0]
      })
    }

  } catch (err:any) {
    res.status(500).json({
      success:false,
      message:err.message,
    })
  }
}

// update user
const updateUser = async (req:Request,res:Response)=>{
  console.log(req.params);
  const {name,email} = req.body;
  
  try {
    const result = await userService.updateUser(name,email,req.params.id!);
    
    if (result.rows.length === 0) {
      res.status(404).json({
        success:false,
        message:"users not founded",
      })
    }else{
      res.status(200).json({
        success:true,
        message:"user update",
        data:result.rows[0]
      })
    }

  } catch (err:any) {
    res.status(500).json({
      success:false,
      message:err.message,
    })
  }
}

// delete user
const deleteUser = async (req:Request,res:Response)=>{
  console.log(req.params);
  
  try {
    const result = await userService.deleteUser(req.params.id!);
    console.log(result);
    
  if (result.rowCount === 0) {
    res.status(404).json({
      success:true,
      message:"user not found"
    })
  }else{
    res.status(200).json({
      success:true,
      message:"user deleted",
      data: result.rows
    })
  }

  } catch (err:any) {
    res.status(500).json({
      success:false,
      message:err.message,
    })
  }
}


export const userControllers = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}