import mysql from "mysql2";

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password : '1234',
  port : '3306',
  database : 'ohouse'
})

export const db = pool.promise();

