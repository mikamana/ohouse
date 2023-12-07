import express from "express";
import cors from "cors";
import signup from "./router/oh_member/signupRouter.js";
import login from "./router/oh_member/loginRouter.js"
import userPass from "./router/oh_member/userPasswordRouter.js"
import edit from "./router/oh_member/editRouter.js"
import path from "path"
import admin from "./router/adminRouter.js";
import product from "./router/oh_product/productRouter.js"
import category from "./router/oh_category/categoryRouter.js"
import house from "./router/oh_community/houseRouter.js";
import production from "./router/productionRouter.js";
import cart from "./router/cartRouter.js";
import review from "./router/oh_review/reviewRouter.js";
import upload from "./router/uploadRouter.js";
import channel from "./router/channelRouter.js";

const PORT = 8000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/uploads", express.static(path.join("uploads")));
server.use('/normalUsers/new/', signup);
server.use('/login', login);
server.use('/users/password/new', userPass);
server.use('/house', house);
server.use('/production', production);
server.use('/cart', cart)
server.use('/edit', edit);
server.use('/admin', admin);
server.use('/product', product);
server.use('/category', category);
server.use('/review', review);
server.use('/upload', upload);
server.use('/channel', channel);

server.listen(PORT, () => {
  console.log(`server start --->> ${PORT}`);
})