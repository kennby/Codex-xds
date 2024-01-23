import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
      m.react('🖱️')
   const pp = imagen3;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
*╭───── • ◆ • ─────┅┅┄┄*
    *ᴀᴅᴍɪɴɪsᴛʀᴀᴄɪᴏɴ*
   
  ▸🖱️ > *<funcion>*
  ▸🖱️ => *<funcion>*
  ▸🖱️ $ *<funcion>*
  ▸🖱️ _${usedPrefix}setprefix *<prefijo>*_
  ▸🖱️ _${usedPrefix}resetprefix_
  ▸🖱️ _${usedPrefix}autoadmin_
  ▸🖱️ _${usedPrefix}grouplist_
  ▸🖱️ _${usedPrefix}chetar_
  ▸🖱️ _${usedPrefix}leavegc_
  ▸🖱️ _${usedPrefix}cajafuerte_
  ▸🖱️ _${usedPrefix}blocklist_
  ▸🖱️ _${usedPrefix}addowner *<@tag / numero>*_
  ▸🖱️ _${usedPrefix}delowner *<@tag / numero>*_
  ▸🖱️ _${usedPrefix}block *<@tag / numero>*_
  ▸🖱️ _${usedPrefix}unblock *<@tag / numero>*_
  ▸🖱️ _${usedPrefix}enable *restrict*_
  ▸🖱️ _${usedPrefix}disable *restrict*_
  ▸🖱️ _${usedPrefix}enable *autoread*_
  ▸🖱️ _${usedPrefix}disable *autoread*_
  ▸🖱️ _${usedPrefix}enable *public*_
  ▸🖱️ _${usedPrefix}disable *public*_
  ▸🖱️ _${usedPrefix}enable *pconly*_
  ▸🖱️ _${usedPrefix}disable *pconly*_
  ▸🖱️ _${usedPrefix}enable *gconly*_
  ▸🖱️ _${usedPrefix}disable *gconly*_
  ▸🖱️ _${usedPrefix}enable *anticall*_
  ▸🖱️ _${usedPrefix}disable *anticall*_
  ▸🖱️ _${usedPrefix}enable *antiprivado*_
  ▸🖱️ _${usedPrefix}disable *antiprivado*_
  ▸🖱️ _${usedPrefix}enable *modejadibot*_
  ▸🖱️ _${usedPrefix}disable *modejadibot*_
  ▸🖱️ _${usedPrefix}enable *audios_bot*_
  ▸🖱️ _${usedPrefix}disable *audios_bot*_
  ▸🖱️ _${usedPrefix}enable *antispam*_
  ▸🖱️ _${usedPrefix}disable *antispam*_
  ▸🖱️ _${usedPrefix}msg *<texto>*_
  ▸🖱️ _${usedPrefix}banchat_
  ▸🖱️ _${usedPrefix}unbanchat_
  ▸🖱️ _${usedPrefix}resetuser *<@tag>*_
  ▸🖱️ _${usedPrefix}banuser *<@tag>*_
  ▸🖱️ _${usedPrefix}unbanuser *<@tag>*_
  ▸🖱️ _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
  ▸🖱️ _${usedPrefix}añadirxp *<@tag> <cantidad>*_
  ▸🖱️  _${usedPrefix}banuser *<@tag>*_
  ▸🖱️ _${usedPrefix}bc *<texto>*_
  ▸🖱️ _${usedPrefix}bcchats *<texto>*_
  ▸🖱️ _${usedPrefix}bcgc *<texto>*_
  ▸🖱️ _${usedPrefix}bcgc2 *<audio>*_
  ▸🖱️ _${usedPrefix}bcgc2 *<video>*_
  ▸🖱️ _${usedPrefix}bcgc2 *<imagen>*_
  ▸🖱️ _${usedPrefix}bcbot *<texto>*_
  ▸🖱️ _${usedPrefix}cleartpm_
  ▸🖱️ _${usedPrefix}restart_
  ▸🖱️ _${usedPrefix}update_
  ▸🖱️ _${usedPrefix}banlist_
  ▸🖱️ _${usedPrefix}addprem *<@tag> <tiempo>*_
  ▸🖱️ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
  ▸🖱️ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
  ▸🖱️ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
  ▸🖱️ _${usedPrefix}delprem *<@tag>*_
  ▸🖱️ _${usedPrefix}listcmd_
  ▸🖱️ _${usedPrefix}setppbot *<responder a imagen>*_
  ▸🖱️ _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
  ▸🖱️ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
  ▸🖱️ _${usedPrefix}saveimage
  ▸🖱️ _${usedPrefix}viewimage
*╰───── • ◆ • ─────┅┅┄┄*
*_BY: 𝗜 𝗕𝗟𝗢𝗢𝗗 𝗕𝗢𝗧_*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp , caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp , caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '* 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menux|Menux)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
                 }
