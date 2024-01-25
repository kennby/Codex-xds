import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐨 𝐩𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨 𝐬𝐨𝐥𝐨 𝐥𝐨𝐬 𝐚𝐝𝐦𝐢𝐧𝐬 𝐩𝐮𝐞𝐝𝐞𝐧 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐥𝐨 𝐜𝐨𝐧 .ENABLE MODOHORNY*';
  if (!args[0]) throw `*𝐩𝐨𝐧𝐠𝐚 𝐮𝐧 𝐞𝐧𝐥𝐚𝐜𝐞 𝐯𝐚𝐥𝐢𝐝𝐨 𝐩𝐥𝐬: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`;
  try {
    await conn.reply(m.chat, '𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧𝐨𝐬 𝐦𝐢𝐧𝐮𝐭𝐨𝐬\n\n𝐞𝐥 𝐭𝐢𝐞𝐦𝐩𝐨 𝐝𝐞 𝐞𝐧𝐯𝐢𝐨 𝐝𝐞𝐩𝐞𝐧𝐝𝐞 𝐚𝐥 𝐩𝐞𝐬𝐨 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨', m);
    let xnxxLink = '';
    if (args[0].includes('xnxx')) {
      xnxxLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0) {
        if (Array.isArray(global.videoListXXX) && global.videoListXXX.length > 0) {
          const matchingItem = global.videoListXXX.find((item) => item.from === m.sender);
          if (matchingItem) {
            if (index < matchingItem.urls.length) {
              xnxxLink = matchingItem.urls[index];
            } else {
              throw `*𝐧𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐨 1 𝐲 𝐞𝐥 ${matchingItem.urls.length}*`;
            }
          } else {
            throw `*𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐞 𝐞𝐬𝐭𝐚 𝐟𝐨𝐫𝐦𝐚 (${usedPrefix + command} <numero>), 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐥𝐚 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐦𝐝 ${usedPrefix}xnxxsearch <texto>*`;
          }
        } else {
          throw `*𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐞 𝐞𝐬𝐭𝐚 𝐟𝐨𝐫𝐦𝐚 (${usedPrefix + command} <numero>), 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐥𝐚 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐦𝐝 ${usedPrefix}xnxxsearch <texto>*`;
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    throw '*𝐞𝐫𝐫𝐨𝐫*\n\n*- 𝐪𝐮𝐞 𝐬𝐞𝐚 𝐬𝐢𝐦𝐢𝐥𝐚𝐫 𝐚:*\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*';
  }
};
handler.command = /^(xnxxdl)$/i;
export default handler;

async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: 200, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
      }
