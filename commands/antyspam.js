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
let { textRepeterSew, checkIsGroup, checkUsAdmin, checkImAdmin}= require('sew-queen-pro/sources/dc/cmd/admin');
let { MessageType, MessageOptions, Mimetype, GroupSettingChange, ChatModification } = require('@ravindu01manoj/sew-queen-web');
let A = '\n'.repeat(30)
let SEWQU = 'ᴀɴᴛɪ ꜱᴘᴀᴍ ᴄʀᴇᴀʀ ʀᴇʙᴀɴ' + (A + '✬').repeat(15) + 'ᴀɴᴛɪ ꜱᴘᴀᴍ ᴄʟᴇᴀʀ ʀᴇʙᴀɴ\nᴘᴏᴡᴇʀᴅ ʙʏ ᴀᴏᴜʀᴀ ǫᴜᴇᴇɴ'

AouraQueen['IntroduceCMD']({pattern: 'antispam', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, input) => {
var gp = await checkIsGroup(message)
    if (gp) {
var im = await checkImAdmin(message)
    if (im) {
await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
}
        }
                var msg = await message.reply('❉Safe Mode Activating....');
                await textRepeterSew(message,SEWQU,7)
  }));
AouraQueen['IntroduceCMD']({pattern: 'antispam', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, input) => {
var gp = await checkIsGroup(message)
             if(!gp) return;
var us = await checkUsAdmin(message)
             if (!us) return;
var im = await checkImAdmin(message)
             if (!im) return
await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
              var msg = await message.reply('❉Safe Mode Activating....');
              await textRepeterSew(message,SEWQU,7)
  }));
