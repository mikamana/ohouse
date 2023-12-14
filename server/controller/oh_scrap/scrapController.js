import * as scrapRepository from "../../repository/oh_scrap/scrapRepository.js";

export async function createScrap(req, res) {

  const {pid,mid} =  req.body

  const result = await scrapRepository.createScrap(mid,pid);

  if(result==='ok'){

    res.status(204).send('ok');

  }

};



export async function getCheckScrap(req,res){

  const pid = req.params.pid


  const rows = await scrapRepository.getCheckScrap(pid);

  res.json(rows);

}