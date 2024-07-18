const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22348169172727";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_57_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUxLFxuICAgICAgICA2LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDksXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3MGpsS2hDbkdkYVN1S0pwUDdsNE54NkV6cTV1U3lGVTMyNWZLOTRhQUVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODE0MTI5OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFCRjBBNzUwNUI1MDlDMzc4Q0E4MzQ2NDVGNzYxMEJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI4MjIzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODE0MTI5OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE0RUJDNjgxMjJEOTdDODMyNDhGRDIzMEZENDFEMkNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI4MjIzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1TE54blBuTlJuZUpIUzk1WnVHMl9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMwYjI5MjA4LWUzODktNDhkNS1hYTQ0LTE0NTg0ZWMxMzkxMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAyMTQsXG4gICAgICAyNDIsXG4gICAgICA0MSxcbiAgICAgIDExNixcbiAgICAgIDQ1LFxuICAgICAgMTg5LFxuICAgICAgMTM2LFxuICAgICAgMjA1LFxuICAgICAgMTk1LFxuICAgICAgMTI1LFxuICAgICAgNTgsXG4gICAgICAyMDgsXG4gICAgICAyMzMsXG4gICAgICAyMjksXG4gICAgICAzLFxuICAgICAgNjUsXG4gICAgICA5NixcbiAgICAgIDE3LFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDQyLFxuICAgICAgMTIzLFxuICAgICAgMzcsXG4gICAgICAxNDIsXG4gICAgICAxOTAsXG4gICAgICAyNCxcbiAgICAgIDE0MixcbiAgICAgIDE0NSxcbiAgICAgIDUsXG4gICAgICAyMjUsXG4gICAgICAyMjYsXG4gICAgICAxMDAsXG4gICAgICAzNyxcbiAgICAgIDk3LFxuICAgICAgOTIsXG4gICAgICAyMjcsXG4gICAgICA0NSxcbiAgICAgIDE2MCxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMk1XU1hBQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4MTQxMjk5NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0ODkwNzI5NTkyMDIwMDoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIti02YrYqyDYtNix2YrZgVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pyMWpZSURFTFRkNHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN2l2am5iM2t0eTFDaDhlMDgwb1NFZ2FPT3N6SHNqcG1tcUVYWU8wa3JnVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2bVVjaTE4bG0reXlDRXR0RWpTN2hWSGtKcE4zNHNWVHlyKzFHckhTakpaMllrekk2d2ZVYmIyRXF6b1loY1ppOUFNeWJxYTJPR1J6NTJRSTFsNlJBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMS245T1RCazByWVl3R2toTHN6Wmw0K2gzWFdwTlJ2eFl4R3RPaEt6b3FIMGNFOEZ3RVdlYk9Zc2E0T0RLREUveE1YaWZMdnZraVR4Tkh6N2taNVlqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgxNDEyOTk1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyODIyMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQZ1ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBnVi5qc29uIjogIntcImtleURhdGFcIjpcIjVmQlpGUFZieWE3MHlZSWIwNjd4MXl5OFZlSjBFV3F3QnBPdFFZQlo0dkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODA5NzI4NjY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyODIyMzM4NzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
