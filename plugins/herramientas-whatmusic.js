import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 20) return m.reply('🙉\n\n𝐬𝐨𝐥𝐨 10 𝐚 20 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬 𝐩𝐥𝐬');
    const media = await q.download();
    const ext = mime.split('/')[1];
    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
    const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    const {code, msg} = res.status;
    if (code !== 0) throw msg;
    const {title, artists, album, genres, release_date} = res.metadata.music[0];
    const txt = `
𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎

𝐭𝐢𝐭𝐮𝐥𝐨 ${title}
𝐚𝐫𝐭𝐢𝐬𝐭𝐚 ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}
𝐚𝐥𝐛𝐮𝐧 ${album.name || 'No encontrado'}
𝐟𝐞𝐜𝐡𝐚 𝐝𝐞 𝐥𝐚𝐧𝐳𝐚𝐦𝐢𝐞𝐧𝐭𝐨 ${release_date || 'No encontrado'}
`.trim();
    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
    m.reply(txt);
  } else throw '*𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐚𝐮𝐝𝐢𝐨/𝐯𝐢𝐝𝐞𝐨*';
};
handler.command = /^quemusica|quemusicaes|whatmusic$/i;
export default handler;
