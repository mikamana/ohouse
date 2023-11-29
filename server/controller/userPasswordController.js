import nodemailer from 'nodemailer';
import * as repository from "../repository/userPasswordRepository.js"

/* 
const  mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nodetest789@gmail.com",
    pass: "ygia zkmz umvc tepq"
  }
})
 */

export async function userPasswordNew(req, res){
  const {id} = req.body;
  const result = await repository.userPasswordNew(id)
  res.json(result);
}

export function email(req, res){
  const {id} = req.body;
  const number = Math.floor(Math.random()*1E9);
  /* 
  const mailOptions = {
    from : "nodetest789@gmail.com",
    to: id,
    subject: '이메일 인증번호',
    text: `인증번호 ${number}`
  }
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return;
    } else {
      console.log('Email Sent : ', info);
    }
  })
  */
  res.json(number);
}