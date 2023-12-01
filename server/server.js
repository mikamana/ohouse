import express from "express";
import cors from "cors";
import signup from "./router/signupRouter.js"
import login from "./router/loginRouter.js"
import userPass from "./router/userPasswordRouter.js"
import product from "./router/oh_product/productRouter.js"
import category from "./router/oh_category/categoryRouter.js"
const PORT = 8000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/normalUsers/new/', signup)
server.use('/login', login)
server.use('/users/password/new', userPass)
server.use('/product', product)
server.use('/category', category)
server.listen(PORT,()=>{
  console.log(`server start --->> ${PORT}`);
})