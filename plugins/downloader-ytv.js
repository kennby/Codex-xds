import fg from 'api-dylux';
import yts from 'yt-search';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let limit = 100;

let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) return conn.reply(m.chat, `*🚩 Por favor, escribe la URL de un video de YouTube que desees descargar.*`, m);
    if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de YouTube`, m).then(_ => m.react('✖️'));
    let q = args[1] || '360p';

    await m.react('🕓');
    try {
        const yt = await fg.ytv(args[0], q);
        let { dl_url } = yt;

        await conn.sendFile(m.chat, dl_url, 'yt.mp4', '', m);
        await m.react('✅');
    } catch {
        try {
            let yt = await fg.ytmp4(args[0], q);
            let { dl_url } = yt;

            await conn.sendFile(m.chat, dl_url, 'yt.mp4', '', m);
            await m.react('✅');
        } catch {
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'));
        }
    }
};

handler.help = ['ytmp4 <url yt>'];
handler.tags = ['downloader'];
handler.command = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i;
handler.star = 2;
handler.register = true;

export default handler;
                             
