import * as inquiryRepository from "../../repository/oh_inquiry/inquiryRepository.js";

export async function createInquiry(req, res) {

  const { mid, pid, type, content, check } = req.body;

  const result = await inquiryRepository.createInquiry(mid, pid, type, content, check);

  if (result === 'ok') {

    res.status(204).send('ok');

  }

};

export async function getBeforeInquiry(req, res) {

  const { pid, startIndex, endIndex } = req.params;

  const result = await inquiryRepository.getBeforeInquiry(pid, startIndex, endIndex);

  res.json(result);

}

export async function getInquiry(req, res) {

  const { mid, pid, startIndex, endIndex } = req.params;

  const result = await inquiryRepository.getInquiry(mid, pid, startIndex, endIndex);

  res.json(result);

}

export async function getAllInquiry(req, res) {

  const { pid } = req.params;

  const result = await inquiryRepository.getAllInquiry(pid);

  res.json(result);

}

export async function removeInquiry(req, res) {

  const { mid, pid } = req.body;

  const result = await inquiryRepository.removeInquiry(mid, pid);

  if (result === 'ok') {

    res.status(204).send('ok');

  }

}

export async function updateInquiry(req, res) {


  const { mid, pid, type, content, check } = req.body;

  const result = await inquiryRepository.updateInquiry(mid, pid, type, content, check);

  if (result === 'ok') {

    res.status(204).send('ok');

  }

}