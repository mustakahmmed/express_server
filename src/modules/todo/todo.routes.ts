import { Router } from "express";
import { pool } from "../../config/db";
import { todoControllers } from "./todo.controller";

const router = Router()

// todo post
router.post("/",todoControllers.todoPost);
router.get("/",todoControllers.getTodo)

export const todoRouter = router;