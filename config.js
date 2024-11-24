const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+40 741 331 350";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_12_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTI2LFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg3LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxbGdaeUdyY2FLVFlSV3NUekl6U3BXMkdVaVhadzdUaTJJVUM4M1F0UVVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzQxMzMxNTMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMkU5QTc3MkNCNzdDODdCRTVGRjcwM0ZGQkFFMjYzM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI0NzE5MjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc0MTMzMTUzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0I3QjhFQjQ2QzEzMkZGNDc1NjMwMjJDMjZCM0ZEM0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDcxOTIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFZRUUzRzB1U2dTOTRaLXh4dm56M1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjI1ZDVjM2YtOWM5Yy00M2QxLTlhYzQtYzliNTEyYzk5ODE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjMwLFxuICAgICAgNixcbiAgICAgIDk3LFxuICAgICAgMTQyLFxuICAgICAgMTYzLFxuICAgICAgMjQzLFxuICAgICAgNDgsXG4gICAgICAxODAsXG4gICAgICAyMjksXG4gICAgICAxMzIsXG4gICAgICAyMTcsXG4gICAgICAxNDMsXG4gICAgICAxNjcsXG4gICAgICA5MyxcbiAgICAgIDgzLFxuICAgICAgMjMsXG4gICAgICAxOTgsXG4gICAgICAxNTIsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMTQ0LFxuICAgICAgMTQyLFxuICAgICAgNDMsXG4gICAgICAxNTcsXG4gICAgICAxMDIsXG4gICAgICAwLFxuICAgICAgMTE2LFxuICAgICAgMTksXG4gICAgICAyMjUsXG4gICAgICAyNTMsXG4gICAgICAxMTIsXG4gICAgICA0MSxcbiAgICAgIDEzNSxcbiAgICAgIDExNSxcbiAgICAgIDQ1LFxuICAgICAgMTcyLFxuICAgICAgMTY2LFxuICAgICAgMTE0LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVDTExIS0JOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0MDc0MTMzMTUzMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5vbnltb3VzXCIsXG4gICAgXCJsaWRcIjogXCIxNDg3Njk1OTcyOTY4Mjk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNS1puNXNDRU96WWpib0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkYvc2pvS0VZaUFGUS9UK3dmVFBYU1VJREUyZ1lrWFFPZUFFVGtWMzRwV3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUVmWTNOSnkyOURobWF1Qkl1RlpBRWwyeDczekg5cURBazFtenlCaEg4eEs4VnU2SmNHdVZNcHdkeisyYk1zYUk0R3BaM21XVXh0U25oaG5aTzBPQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQVNXUUxHODQ2bVBzdGpIUzVub3BJMW16MUNVeFBJamxTckRGbGd3Si9paTUxZ21vMFJwR0hyVDVKVzNZY1I4MWhyTU1IOG5Ia0hRL0pPQ1pRV0NYQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDA3NDEzMzE1MzA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDcxOTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3RMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDdEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjeHN4a0M3STF3WW5IUFlac0Z5WGRJSG4yWk5zRUl2NjlablgzcnpJc1FFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5NDAwNTE4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
