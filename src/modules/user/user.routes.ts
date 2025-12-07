import { Request, Response, Router } from "express";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";
import logger from "../../middleware/looger";
import auth from "../../middleware/auth";

const router = Router()

router.post("/",userControllers.createUser);
// get users
router.get("/",logger,auth(),userControllers.getUser);
// get single user
router.get("/:id",userControllers.getSingleUser);
// update user
router.put("/:id", userControllers.updateUser);
// delete user
router.delete("/:id",userControllers.deleteUser);

export const userRouter = router;