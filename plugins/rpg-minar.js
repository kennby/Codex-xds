const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 9999);
  const time = global.db.data.users[m.sender].lastmiming + 900000;
  if (new Date - global.db.data.users[m.sender].lastmiming < 900000) throw `*𝐩𝐞𝐫𝐚 ${msToTime(time - new Date())} 𝐩𝐚𝐫𝐚 𝐯𝐨𝐥𝐯𝐞𝐫 𝐚 𝐦𝐢𝐧𝐚𝐫*`;
  m.reply(`*𝐦𝐢𝐧𝐚𝐬𝐭𝐞${hasil} 𝐞𝐱𝐩*`);
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['minar'];
handler.tags = ['xp'];
handler.command = ['minar', 'miming', 'mine'];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
    }
