import * as channelRepository from '../repository/channelRepository.js';

export async function channelList (req, res) {
  const result = await channelRepository.channelList();
  res.json(result);
}