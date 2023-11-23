import mysql from "mysql2";

const poll = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : '1234',
  port : '3306',
  database : 'hrdb2019'
})

export const db = poll.promise()