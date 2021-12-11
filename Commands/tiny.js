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
let { MessageType, MessageOptions, Mimetype, GroupSettingChange, ChatModification } = require('@ravindu01manoj/sew-queen-web');
let fs = require('fs');
let os = require('os');
let ffmpeg = require('fluent-ffmpeg');
let exec = require('child_process').exec;
let axios = require('axios');
let got = require('got');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let DataHelp = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true

let DATA = DataHelp.dataGet('weather');
AouraQueen['IntroduceCMD']({pattern: 'tiny ?(.*)', fromMe: WorkType, desc: DATA.TIN_DESC}, async (message, input) => {
	if (input[1] === '') return await message.reply(DATA.NEED_LINK);
	let url = `https://tobz-api.herokuapp.com/api/tinyurl?url=${input[1]}&apikey=BotWeA`;
	try {
		let response = await got(url);
		let json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'\n *🔗 ' + DATA.SLINK +'* ```' + json.result + '```\n\n *👑ᴘᴏᴡᴇʀᴅ ʙʏ λᴏᴜᴇʀɑ ǫᴜᴇᴇɴ👑*\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, DATA.NOT_FOUNDLI, MessageType.text);
	}
});