import nodemailer from 'nodemailer';
import * as repository from "../repository/signupRepository.js";
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
export async function emailCheck(req, res){
  const {eid, domain} = req.body;
  const id = eid + "@" + domain;
  const result = await repository.idCheck(id);
  const number = Math.floor(Math.random()*1E9);
  if(result.cnt === 0){
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
}
  res.json({result, number});
}

export async function nicknameCheck(req, res){
  const {nickname} = req.body;
  const result = await repository.nicknameCheck(nickname);
  res.json(result);
}

export async function signup(req, res){
  const {eid, domain, pass, nickname} = req.body;
  const id = eid + "@" + domain;
  const hpass = bcript.hashSync(pass, 10);
  const params = [id, hpass, nickname];
  const result = await repository.signup(params);
  res.json(result);
}