//============= Datos del Bot =============//

global.owner = [ 
   ['524531106522', '💌  ༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒ - Creador 💌', true], 
   ['5493813403468', '💌  ༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒ - Collaborator 1 💌', true], 
   ['595983186566', '💌  ༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒ - Collaborator 2 💌', true], 
   ['51975216165', '💌  ༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒ -  Col𝚊𝚋𝚘𝚛𝚊𝚍𝚘𝚛  3 💌', true], 
  
 ]  
 global.suittag = ['']  
 global.mods = ['524531403370']  
 global.prems = [] 

//============= urlButtons =============//

global.textUrlbot = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.linkUrlbot = "https://www.instagram.com/ilmanhdyt_"

//========================================================================
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
dzx: 'https://api.dhamzxploit.my.id',
zahir: 'https://zahirr-web.herokuapp.com' }
global.APIKeys = { 
'https://api.xteam.xyz': 'd90a9e986e18778b',
'https://zahirr-web.herokuapp.com': 'zahirgans' }
global.lolkeysapi = ['85faf717d0545d14074659ad']
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.multiplier = 9999 
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright("Se actualizo el archivo 'config.js'"))
delete require.cache[file]
require(file)})
