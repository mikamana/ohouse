import express from "express";
import cors from "cors";
import signup from "./router/signupRouter.js";
import login from "./router/loginRouter.js";
import userPass from "./router/userPasswordRouter.js";
import house from "./router/houseRouter.js";
import production from "./router/productionRouter.js";
import cart from "./router/cartRouter.js";
const PORT = 8000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/normalUsers/new/', signup);
server.use('/login', login);
server.use('/users/password/new', userPass);
server.use('/house', house);
server.use('/production', production);
server.use('/cart', cart)




server.listen(PORT,()=>{
  console.log(`server start --->> ${PORT}`);
})