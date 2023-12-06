import * as inquiryRepository from "../../repository/oh_inquiry/inquiryRepository.js";

export async function createInquiry(req, res) {
  
  const {mid,pid,type,content,check} = req.body;

  const result = await inquiryRepository.createInquiry(mid,pid,type,content,check);

  if(result==='ok'){

    res.status(204).send('ok');

  }

};

export async function getInquiry(req,res){

  const {pid,startIndex,endIndex} = req.params;

  console.log(req.params);

  const result = await inquiryRepository.getInquiry(pid,startIndex,endIndex);

  res.json(result);

}