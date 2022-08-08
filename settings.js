const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6285693650294','6285600380823']
global.premium = ['6285693650294','6285600380823']
global.youtube = 'https://instagram.com/lebihkerendariandy_warholl.093'
global.ownername = 'Yuds'
global.botname ='SongoSixBotz'
global.donasi = {
    saweria: 'https://sociabuzz.com/ezinter/support',
    nomor: '085693650294'
}
global.packname = 'SongoSixBotz'
global.author = 'Yuds'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Lu bukan admin anjeng!',
    botAdmin: 'Jadiin gua admin dulu tod!',
    owner: 'lu bukan owner gua anj',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'sabar pantek'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
