import fg from 'api-dylux';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import yts from 'yt-search';
import fetch from 'node-fetch';

let limit = 100;

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) conn.reply(m.chat, `*🚩 Por favor, escribe la URL de un video de YouTube que desees descargar.*`, m);
    if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de YouTube`, m).then(_ => m.react('✖️'));
    let q = '128kbps';

    await m.react('🕓');
    try {
        const yt = await fg.yta(args[0]);
        let { dl_url } = yt;

        await conn.sendFile(m.chat, dl_url, 'audio.mp3', '', m);
        await m.react('✅');
    } catch {
        try {
            let yt = await fg.ytmp3(args[0]);
            let { dl_url } = yt;

            await conn.sendFile(m.chat, dl_url, 'audio.mp3', '', m);
            await m.react('✅');
        } catch {
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'));
            console.error(error);
        }
    }
};

handler.help = ['ytmp3 <url yt>'];
handler.tags = ['downloader'];
handler.command = /^(fgmp3|dlmp3|getaud|yt(a|mp3))$/i;
handler.star = 2;
handler.register = true;

export default handler;
                             
