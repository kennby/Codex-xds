import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `*𝐢𝐧𝐠𝐫𝐞𝐬𝐚 𝐮𝐧 𝐧𝐨𝐦𝐛𝐫𝐞*\n\n*𝐞𝐣𝐞𝐦𝐩𝐥𝐨:*\n*${usedPrefix + command} tilin xdddd* `;
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play' || command == 'playdoc') {
      additionalText = 'audio 🔊';
    } else if (command === 'play2' || command == 'playdoc2') {
      additionalText = 'video 🎥';
    }
    const texto1 = `*𝐩𝐥𝐚𝐲 𝐜𝐨𝐝𝐞𝐱*\n
*𝐭𝐢𝐭𝐮𝐥𝐨:* ${yt_play[0].title}
*𝐝𝐮𝐫𝐚𝐜𝐢𝐨𝐧:* ${secondString(yt_play[0].duration.seconds)}
*𝐚𝐮𝐭𝐨𝐫:* ${yt_play[0].author.name}
*𝐜𝐚𝐧𝐚𝐥:* ${yt_play[0].author.url}
*𝐭𝐢𝐩𝐨:* ${yt_play[0].type}
*𝐥𝐢𝐧𝐤:* ${yt_play[0].url}\n
 *Enviando ${additionalText}, ᴘᴇʀᴇᴇᴇ．*`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play' || command == 'playdoc') {
      try {
        const q = '128kbps';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.audio[q].download();
        const ttl = await yt.title;
        const size = await yt.audio[q].fileSizeH;
        await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
      } catch {
        try {
          const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
          const lolh = await lolhuman.json();
          const n = lolh.result.title || 'error';
          await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        } catch {
          try {
            const searchh = await yts(yt_play[0].url);
            const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
            const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
            const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
            conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*𝐧𝐨 𝐟𝐮𝐞 𝐩𝐨𝐬𝐢𝐛𝐥𝐞*', m);
          }
        }
      }
    }
    if (command == 'play2' || command == 'playdoc2') {
      try {
        const qu = '360';
        const q = qu + 'p';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const ttl = await yt.title;
        const size = await yt.video[q].fileSizeH;
        await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: ``, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
      } catch {
        try {
          const mediaa = await ytMp4(yt_play[0].url);
          await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
        } catch {
          try {
            const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
            const lolh = await lolhuman.json();
            const n = lolh.result.title || 'error';
            const n2 = lolh.result.link;
            const n3 = lolh.result.size;
            const n4 = lolh.result.thumbnail;
            await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: ``, thumbnail: await fetch(n4)}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*𝐧𝐨 𝐟𝐮𝐞 𝐩𝐨𝐬𝐢𝐛𝐥𝐞 𝐞𝐥 𝐯𝐢𝐝𝐞𝐨*', m);
          }
        }
      }
    }
  } catch {
    throw '*𝐧𝐨 𝐟𝐮𝐞 𝐩𝐨𝐬𝐢𝐛𝐥𝐞*';
  }
};
handler.help = ['play3', 'play4'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(playdoc|playdoc2|play|play2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
      }
