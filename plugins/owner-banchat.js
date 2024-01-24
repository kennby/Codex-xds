const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐛𝐚𝐧𝐞𝐚𝐝𝐨*\n\n*𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐲𝐚 𝐧𝐨 𝐩𝐨𝐝𝐫𝐚 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
