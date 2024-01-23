import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
      m.react('💁')
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
   *ғᴜɴᴄɪᴏɴᴇs ᴇɴ ɢʀᴜᴘᴏs* 
   
  ▸🌊 _${usedPrefix}add *<numero>*_
  ▸🌊 _${usedPrefix}kick *<@tag>*_
  ▸🌊 _${usedPrefix}kick2 *<@tag>*_
  ▸🌊 _${usedPrefix}listanum *<texto>*_
  ▸🌊 _${usedPrefix}kicknum *<texto>*_
  ▸🌊 _${usedPrefix}grupo *<abrir / cerrar>*_
  ▸🌊 _${usedPrefix}grouptime *<opcion> <tiempo>*_
  ▸🌊 _${usedPrefix}promote *<@tag>*_
  ▸🌊 _${usedPrefix}demote *<@tag>*_
  ▸🌊 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
  ▸🌊 _${usedPrefix}demote *<@tag>*_
  ▸🌊 _${usedPrefix}infogroup_
  ▸🌊 _${usedPrefix}resetlink_
  ▸🌊 _${usedPrefix}link_
  ▸🌊 _${usedPrefix}setname *<texto>*_
  ▸🌊 _${usedPrefix}setdesc *<texto>*_
  ▸🌊 _${usedPrefix}invocar *<texto>*_
  ▸🌊 _${usedPrefix}setwelcome *<texto>*_
  ▸🌊 _${usedPrefix}setbye *<texto>*_
  ▸🌊 _${usedPrefix}hidetag *<texto>*_
  ▸🌊 _${usedPrefix}hidetag *<audio>*_
  ▸🌊 _${usedPrefix}hidetag *<video>*_
  ▸🌊 _${usedPrefix}hidetag *<imagen>*_
  ▸🌊 _${usedPrefix}warn *<@tag>*_
  ▸🌊 _${usedPrefix}unwarn *<@tag>*_
  ▸🌊 _${usedPrefix}listwarn_
  ▸🌊 _${usedPrefix}fantasmas_
  ▸🌊 _${usedPrefix}destraba_
  ▸🌊 _${usedPrefix}setpp *<imagen>*_
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
    conn.reply(m.chat, '*⚠️ 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menugrupos|gruposmenu|menu7|Menu7)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
