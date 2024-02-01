import * as scrapRepository from "../../repository/oh_scrap/scrapRepository.js";

export async function createScrap(req, res) {

  const {pid,mid} =  req.body

  const result = await scrapRepository.createScrap(mid,pid);

  if(result==='ok'){

    res.status(204).send('ok');

  }

};

export async function removeScrap(req,res){

  const {pid,mid} = req.body

  const result = await scrapRepository.removeScrap(pid,mid);

  if(result==="ok"){

    res.status(204).send("ok")

  }


}



export async function getCheckScrap(req,res){

  const pid = req.params.pid
  const mid = req.params.mid

  const rows = await scrapRepository.getCheckScrap(pid,mid);

  res.json(rows);

}


export async function getPrdScrapCount(req,res){

  const pid = req.params.pid


  const rows = await scrapRepository.getPrdScrapCount(pid)

  res.json(rows);

}