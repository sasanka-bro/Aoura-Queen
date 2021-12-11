/* 
Aoura Queen Whatsapp Bot

Telegram: https://t.me/Yuren_Sasanka
Facebook: https://www.facebook.com/Bandula Sasanka.http
Licensed under the  GPL-3.0 License

Coded By Yuren Sasanka
*/

let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let Language = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true
let { MessageType, Mimetype} = require('@ravindu01manoj/sew-queen-web');
let { sendMessageDownloader, sendMessageBrodcast, sendMessageAddBrodcast, downloadapksewqueen, downloadtwittersewqueen} = require('sew-queen-pro/sources/dc/cmd/dl')
const Lang = Language.dataGet('scrapers')
var ytsd = require( 'yt-search' )
const translatte = require('translatte')


AouraQueen['IntroduceCMD']({
        pattern: 'mediafire ?(.*)', // Mediafire Download 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenAoura, input, 'mediafire')
          } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Mediafire File!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'insta ?(.*)',  // instagram Download 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenAoura, input) => {
        try {
await sendMessageDownloader(QueenAoura, input, 'insta')
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Insta Video!',MessageType.text, { quoted: QueenSew.data})
              }
})); 

SewQueen['IntroduceCMD']({
        pattern: 'github ?(.*)',   // About Github Ptofile And Repo
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'github')
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Profile!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 


AouraQueen['IntroduceCMD']({
        pattern: 'tiktok ?(.*)',   // Tiktok Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenAoura, input, 'tiktok')
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'url ?(.*)',     // Image To Url
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenAoura, input) => {
        if (QueenAoura.reply_message === false || QueenAoura.reply_message.image === false) return await QueenSew.client.sendMessage(QueenSew.jid,'Reply To Any Image...',MessageType.text);
        try {
await sendMessageDownloader(QueenAoura, input, 'imgurl')
        } catch (e) {
  if(e.message.includes('display')) {
     return await QueenSew.client.sendMessage(QueenSew.jid,'Your Imgbb APIKEY is invalid.. please add the api key ( api.imgbb.com )',MessageType.text)
     } else {
   return await QueenSew.client.sendMessage(QueenSew.jid,'Do Not Use Bot Here.. This Is Your Log Number',MessageType.text)
   }
  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'covid ?(.*)',   // Covid Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'covid')
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'trt ?(.*)',    // Language Translate
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        if (!QueenAoura.reply_message) {
            return await QueenSew.client.sendMessage(QueenAoura.jid,Lang.NEED_REPLY,MessageType.text);
        }
        var langa;
        var langb;
        if(input[1].includes(' ')) {
   langa = input[1].split(' ')[0];
   langb = input[1].split(' ')[1];
   } else {
  langa = 'auto';
  langb = Details.LANG
 }
   
   
       let ceviri = await translatte(QueenSew.reply_message.message, {from: langa, to: langb});
        if ('text' in ceviri) {
            return await QueenSew.reply('*▶️ ' + Lang.LANG + ':* ```' + langa + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + langb + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await QueenAoura.client.sendMessage(QueenSew.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'tts ?(.*)',   // Text To Audio
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'tts')
})); 


AouraQueen['IntroduceCMD']({
        pattern: 'wiki ?(.*)',  // Wikipedia Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'wiki')
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'img ?(.*)',  // Google Image Download With 10+ images
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'imgsend')
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'wallpaper ?(.*)',   // Hd Wallpaper Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'wallpaper')

})); 
AouraQueen['IntroduceCMD']({
        pattern: 'pint ?(.*)',    // Pinterest Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenAoura, input) => {
await sendMessageDownloader(QueenSew, input, 'pint')
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'yts ?(.*)',     // Youtube Search Engine
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenAoura, input) => {
await sendMessageDownloader(QueenSew, input, 'yts')
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'lyric ?(.*)',     // Songs Lirics Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'liric')
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'twitter ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'twitter')
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'gettv ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await downloadtwittersewqueen(QueenSew, input)
               } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find It!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'ytv ?(.*)',      // Youtube Video Download  (144p / 240p / 360p / 420p / 720p / mp3)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'ytv')
              } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Video!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'gitclone ?(.*)',    // Github Repo Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'gitclone')
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find master Branch Of this Repo!\n\n Use Like This\n.gitclone RepoUrl/Branch',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'igprop ?(.*)',   // Instagram Profile Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'igprop')
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find It!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'fb ?(.*)',     // Facebook Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'facebook')
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'apk ?(.*)',   // Apksearch with apkmirror site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'apksearch');
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'getapk ?(.*)',   // APK DOWNLOAD APKMIRRIR LINK
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await downloadapksewqueen(QueenSew, input);
               } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Apk!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'playstore ?(.*)',   // Apk Search With Apk Mirrir Site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'playstoresearch');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find Your Search!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'brodcast ?(.*)',    // Brodcast Without Making List (unlimited user add option)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
if (input[1] == 'add') {
await sendMessageAddBrodcast(QueenSew, input,'add')
} else if (input[1] == 'close') {
await sendMessageAddBrodcast(QueenSew, input,'removeall')
} else if (input[1] == 'remove') {
await sendMessageAddBrodcast(QueenSew, input,'removeone')
} else {
await sendMessageBrodcast(QueenSew, input)
}
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'sticker ?(.*)',   // Sticker Maker With Packname && Author Name
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'stickerwithpackname');
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'ss ?(.*)',   //Site To Screenshot
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'sitescreenshot');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'spdf ?(.*)',   //Site To PDF
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'sitepdf');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: QueenSew.data})
                  }
}));
AouraQueen['IntroduceCMD']({
        pattern: 'downimg ?(.*)',   //
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'imagedown');
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'song ?(.*)',   // Youtube Song Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'downsong');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'video ?(.*)',   // Youtube Video Downloader
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'downvideo');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find! Try With Youtube URl',MessageType.text, { quoted: QueenSew.data})
                  }
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'ytd ?(.*)',   // helpers
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'dlvid');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Youtube Video!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'dtik ?(.*)', //helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'dltik');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Tiktok Video!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'dfb ?(.*)',   // helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'dlfb');
                } catch (e) {
                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Facebook Video!',MessageType.text, { quoted: QueenSew.data})
                  }
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'dphub ?(.*)',   // helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'phubdl');
              }  catch {
                      return
                      }
})); 
