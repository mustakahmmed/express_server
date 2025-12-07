import express, {NextFunction, Request,Response} from "express";
import initDB,{pool} from "./config/db";
import logger from "./middleware/looger";
import { userRouter } from "./modules/user/user.routes";
import { todoRouter } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";



const app = express()


// initilizing DB
initDB()



app.get('/',logger, (req: Request, res: Response ) => {
  res.send('Hello Mustak you gonna be a web devoloper so soon!')
}) 

app.use(express.json())

// users crad
app.use("/users",userRouter);
// todos crad
app.use("/todos",todoRouter);
// auth
app.use("/auth",authRoutes);

// NOT FOUND
app.use((req:Request,res:Response)=>{
  res.status(404).json({
    success:false,
    message:"Route is not found",
    path:req.path
  })
})

export default app;