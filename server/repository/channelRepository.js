import { db } from '../data/database.js';

export async function channelList () {
  const sql = `select channel_id, channel_title, channel_image, channel_member, channel_content from oh_channel`;
  return db
    .execute(sql)
    .then((rows)=>rows[0])
}