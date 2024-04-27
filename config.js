const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' }) 


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="tsepomohlomi20041231@gmail.com"
global.location="Eastern Cape,South Africa."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/South Africa";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029VaYUuvZ2ER6bVG5o3d3T";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaYUuvZ2ER6bVG5o3d3T";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaYUuvZ2ER6bVG5o3d3T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "27736267768" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27736267768";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "27736267768,27xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,27xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27736267768,27xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "A17_MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "Life is inherently meaningless so make your own meaning" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Tsepo",
  packname: process.env.PACK_NAME || "Tsepo the weirdo",
  botname : process.env.BOT_NAME  || " 𝗜𝗕𝗥𝗔𝗛𝗜𝗠-ᵐᵈ",
  ownername:process.env.OWNER_NAME|| "It'x Slade",

  sessionName:process.env.SESSION_ID || "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0huV0RaTXplVHNYQldJUmU1ci9UYnpuVnBwVWpzdHRMNUtKcWhoWG1Gcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZxOWh3V2pueDcwbHJCNU9LSi9tMm1RSHFlUmN4eDlZSklERmtUMnVIST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHRGQ3pmbUd6VGNxckM3QUNUYzExbEozOEpub0tMek5PWjZ0OFgwbEY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvNTVocVFBRlhDZkhKNTlmVGp1YmJmcEE1UmRuNkVCNDNocXFnUFJCUzNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGbUdvUE94dm9zNlNFZGpuQVRxdnY2bzc4eWJwMlQvd2h1LzZYazU0R3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktlODJuVzlwWG9MUGd1UlVTRzBmenA0U2Z4S1NQdnc3VDB4V1hNMXc5Qk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5Ja0I5aEY1Z2h2Si9zZ2NSV0tocnlYeDllL2M2dUQ2MlZNcVN0NGNWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTJheDBMRmRyNVVWMHVSd1UrZzlSdU9TWjRiVjRWb2NaeWY5Yzl0WVkxOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBhTWhEL1BJZmVYMngzdU1GMmxZYmJHc1ZrcFI5dGtTeWZuVndjZzEyS29wSHV2bUVLUnY0QUIxUTVNOUhaSWV0V3dQYTY3ZTR4djJGR0dKbGRhS2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJ3WkN0VG9UU1JFOVdHV0E1STR6aEpzUS8rYi9lMmM4TmgvR2oxNHBQSFhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXLWlXamFvR1NSTzdsWTZkcmt6X0ZnIiwicGhvbmVJZCI6IjZlMmNiZjMzLTBlODktNGFkMC1hYjQxLWVjNzgyMjkxYzZkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGUGk0U2dEdEhNL0QrSEh3Vko4bndCOGF0SFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicENCTkhLNExwTjFqa2JqTEVXVGlVeTQ0cmVjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNRS0RTVEpGIiwibWUiOnsiaWQiOiIyNzczNjI2Nzc2ODoxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn6SrVHNlcG/wn6SrIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQ1FzdHNDRU0raXRiRUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOY09mN3gwMjdPdjB6N0luN3NuOHFuQTN4eGpzNTU1SFRaQWo3QzArZWdjPSIsImFjY291bnRTaWduYXR1cmUiOiI4dHNiSnRUL0ptcEF0RFJTM0p4QjNZWG1WL1pDY1ZjTXdUU05rYmtvb2ZrN0MwWVU0RXRKbHpuWlFMOUhpcVN0Mk4yTDIzZ1JtT1JKWStkaEJGaWpCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYjBJSkN1cnRjWkJqMUk4MnQyVURoUWpVUEFiWm1TSG01dmkzRFJ5cTJrVHpBV0ZsUmVXZkt0enV4anUzb0NKVktvWHVkTFg3QTlEZFJBZHIzSGNMaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzczNjI2Nzc2ODoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUWERuKzhkTnV6cjlNK3lKKzdKL0twd044Y1k3T2VlUjAyUUkrd3RQbm9IIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0MjQ1OTgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBDOCJ9"
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
