const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '27672633675'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = '@gmail.com'
global.github = ''
global.location = 'Lahore pakistan'
global.gurl = 'P A I N ' // add your username
global.sudo = process.env.SUDO || "27672633675"
global.devs = '27672633675'
global.website = '' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUk2b0p5TlVEajlCTmJiMHM1eWg0bFNOVmRPb0pEQ2YzVFZLbGxkYVVFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElwUWdrdkNkNG9kOHVUeHJ6T1BVbXg0SHIwS0xRREN6V0UwMWRDbG9Xdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRDd2VkV5alFEVVNkclZHRU9kcHhVVnh1bjdWeUZBWFU2Wk9oT296Um1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RGxnb3NhaHVjV3lVRmxOcFpRYnMzUHprUjVGUHIwRm9GVEx5Q3NxZXc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNQlFyYTg4alo1QlFBWXJwQnNPZVdhTVIyczRwb0hwUDl5OE50SUhQRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPTDlHM3lIaHdNUXQrSXoyN0FFU0VlcGNuNEQrWXd0b2xueXduOXk2a3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tnZnJMaFlFeCtLR0VRUTQrSW9vMTJyMmhReVN0VFJIN25vc21DU2pHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWE5SHozaWpRQ29zUmFNRUFwZXMzZEFDQTRzRXR3dHIxeThja3FyNStWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngwSE1WM0dadUZNVkVZQVNORVk4Zkl0RDBuWjVabWQ3eHFVRkl2UDVjUmxNb1MvTzJ2cUZOMXVCVWFMVTY3M0Fpb0s2TFkraDBVK0tWM0djNWFnMkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6Imp0ZVU5SlRhYmVGTFZzVFlGdzkvMUFITnpWeXZpSzlCSkJNNEo1ejFaaHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNEM3cwb18yU1hPa2h1RUswYlVfU2ciLCJwaG9uZUlkIjoiMjcwMzc4MzUtM2I2Mi00ZWZjLTljY2ItNmI0YjZlYTVmYzE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpLUVljSk5mSnpFek9rTmFxVUdtME1UN1pEST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdpSjFtQ3AxcWRTYmEzYnNwTnlCL1FMNXZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzZxMkxBRkVKQ0NnN0lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVnBSVi9saVZOaTB0TCs2OEg2Nk54ZmZIeTFRTW1mWEZueTZVcXgxRmdWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMWhVa08zNXNvb0ZIU3BDLzF6VGxmcnhiTVFtSm02Y2dEU2R4RkVpNFdQZGdZQ01WRzE4S1htcFZsR0NoZ2YwMWRmZVk2Nzh3M1J6TFlwMWhtbXd2QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlVPeUFEYncxNWNiejIrWmRHdSsvNGNMWTRwMG8wWUZsZWZyQm9PR09jLzhwODl2MlU3aFZTdEI3ZU9aU0dxaXY4T2NqaVdza1ZkQUNMMTNKbjVockRBPT0ifSwibWUiOnsiaWQiOiIyNzY3MzI5OTIyODoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii4uIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjczMjk5MjI4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmFVVmY1WWxUWXRMUy91dkIrdWpjWDN4OHRVREpuMXhaOHVsS3NkUllGVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTUxOTc2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNRkIifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'alexdavid' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
