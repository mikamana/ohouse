import express from "express";
import cors from "cors";

const PORT = 8000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

server.listen(PORT,()=>{
  console.log(`server start --->> ${PORT}`);
})