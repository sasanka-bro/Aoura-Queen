/* 
Aoura Queen Whatsapp Bot

Telegram: https://t.me/Y uren_Sasanka
Facebook: https://www.facebook.com/Bandula Sasanka.79
Licensed under the  GPL-3.0 License;

Coded By Yuren Sasanka
*/ 
let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let axios = require('axios');
let {sendMessagettp, sendMessageEmojiToPng} = require('sew-queen-pro/sources/dc/cmd/ttp')
let {SetUPImageInSEWQUEEN} = require('sew-queen-pro/sources/dc/cmd/setimg')
let { SendMessageImage } = require('sew-queen-pro/sources/dc/cmd/dl')
let {sendMessagelogolist} = require('sew-queen-pro/sources/dc/cmd/TextList')
let {sendMessagelogores, sendMessagepngres} = require('sew-queen-pro/sources/dc/cmd/textmaker')
let WorkType = Details.WORKTYPE == 'public' ? false : true
var { FancyText, fancyList } = require("fancy-sew-amdi")
let { MessageType, Mimetype } = require('@ravindu01manoj/sew-queen-web');
var LOGODISC = '';
var des = '';
if (Details.LANG == 'SI') {
   des = 'ඉමෝජි පින්තූර බවට පත් කරයි'
   LOGODISC = '350 කට අදික ඌ ලෝගො සෑදීම සදහා යොදා ගන්න.අනිවාරයෙන් වචන දෙකක් යෙදිය යුතු අතර වචන දෙක / මගින් වෙන් කරන්න.\n🎲උදා:- .textlogo AOURA / QUEEN'
} else {
   des = "You Can Png From Any Emoji"
   LOGODISC = '350+ Text To Image and Logo Maker... Need Two Words And Split Them Using /\neg : .textlogo AOURA / Queen '
}
AouraQueen['IntroduceCMD']({
        pattern: 'attp ?(.*)', 
        fromMe: WorkType, 
        disc: 'ttp and 250+ sticker making command...\n*Usage:-* .attp Aoura'
       }, 
(async (QueenSew, input) => {
 await sendMessagettp(QueenSew, input)
}));
AouraQueen['IntroduceCMD']({
        pattern: 'png ?(.*)', 
        fromMe: WorkType, 
        disc: des
        }, 
(async (QueenSew, input) => { 
await sendMessageEmojiToPng(QueenSew, input)
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'textlogo ?(.*)', 
        fromMe: WorkType, 
        disc: LOGODISC
        }, 
(async (AouraQueen, input) => {
await sendMessagelogolist(AouraQueen, input)
await sendMessagelogores(AouraQueen, input)
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'fancy ?(.*)', 
        fromMe: WorkType, 
        disc: '118+ Fancy Text Maker With Unlimited Access'
        }, 
(async (QueenSew, input) => { 
if(input[1].includes('//--//')) {
var text = input[1].split('//--//')[1]
var type = input[1].split('//--//')[0]
var fancy = await FancyText(text)
await QueenSew.client.sendMessage(QueenSew.jid, fancy[type], MessageType.text)
} else {
var list = await fancyList(input[1])
await QueenSew.client.sendMessage(QueenSew.jid, list, MessageType.listMessage)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'setimg ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
 if (AouraQueen.reply_message === false || AouraQueen.reply_message.image === false) return await AouraQueen.client.sendMessage(AouraQueen.jid,'Reply To Any Image| image size < 100kb\n\n100kb වලට අඩු ඕනෑම රූපයකට රිප්ලයි ලෙස යොදන්න..',MessageType.text);
try {
 await SetUPImageInAOURAQUEEN(AouraQueen, input)
 } catch (e) {
  if(e.message.includes('display')) {
     return await AouraQueen.client.sendMessage(AouraQueen.jid,'Your Imgbb APIKEY is invalid.. please add the api key ( api.imgbb.com )',MessageType.text)
     } else {
   return await AouraQueen.client.sendMessage(AouraQueen.jid,'Do Not Use Bot Here.. This Is Your Log Number',MessageType.text)
   }
  }
})); 
// about me
AouraQueen['IntroduceCMD']({
            pattern: 'codeby', 
            fromMe: true, 
            dontAdCommandList: true
            },
 (async (message, input) => {
            var codeby = ` ✬ ᴀʙᴏᴜᴛ ʙᴏᴛ\n\nNAME    : AOURA QUEEN ✨user id "\n\nᴘᴏᴡᴇʀᴅ ʙʏ λᴏᴜᴇʀɑ ǫᴜᴇᴇɴ(x_x)"\nVERSION : ${Details.VERSION}\nBASED ON: NODEJS / JAVASCRIPT / TYPESCRIPT\nLANGUAGE: SINHALA / ENGLISH\nON      : GITHUB\nLINK    : github.com/sasanka-bro/Aoura-Queen\nWA WEB  : @yurensasanka/aoura-queen-web (npm)\nDOCKER  : yurensasanka/aouraqueen:lovegift\n\n✬ ᴀʙᴏᴜᴛ ᴍᴇ \n\nNAME    : YUREN SASANKA\nCOUNTRY : SRI LANKA\nDISTRICT: NUWARAELIYA\nZIP CODE: 0222\nAGE     : 13\nTG      : t.me/Yuren_Sasanka\nYOUTUBE : https://youtube.com/c/Sasanka Bro TECH LK\nGMAIL   : yurensasanka@gmail.com\nGITHUB  : github.com/sasanka_bro`
            var imageaoura = await axios.get('https://i.ibb.co/BnrJWrn/Aoura-Queen-Whatsappbot-logo.jpg', { responseType: 'arraybuffer' })
            await SendMessageImage(message,Buffer.from(imagesew.data) ,'```' + codeby + '```')
}));


