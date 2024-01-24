const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*𝐠𝐫𝐮𝐩𝐨 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐝𝐨*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;
