import nodemailer from 'nodemailer';
import * as repository from "../../repository/oh_member/userPasswordRepository.js";
import bcript from "bcryptjs";

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
    subject: '[오늘의집] 인증코드안내',
    text: `인증코드를 확인해주세여 ${number}`
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

export async function newPassword(req, res){
  const { pass, id} = req.body;
  const hpass = bcript.hashSync(pass, 10);
  const params = [hpass, id];
  const result = await repository.newPassword(params)
  res.json(result)
}