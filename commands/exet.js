/* Aoura Queen Whatsapp Bot

Telegram: https://t.me/Yuren_Sasanka
Facebook: https://www.facebook.com/Bandula Sasanka.http
Licensed under the  GPL-3.0 License

Coded By Yuren Sasanka
*/ 
let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let { createPollWithSewAnyGroupChat } = require('sew-queen-pro/sources/dc/cmd/warn')
let {SendMessageToStatus, checkIsGroup} = require('sew-queen-pro/sources/dc/cmd/admin')
let { MessageType } = require('@ravindu01manoj/sew-queen-web');
let WorkType = Details.WORKTYPE == 'public' ? false : true

AouraQueen['IntroduceCMD']({
        pattern: 'poll ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
       }, 
(async (QueenAoura, input) => {
var grp = await checkIsGroup(QueenAoura)
if (!grp) return;

if(input[1].includes('/-/') || input[1].includes('/=/') || (input[1].includes('/') && input[1].includes(','))) {

await createPollWithAouraAnyGroupChat(QueenAoura, input)
} else {
 return await QueenSew.client.sendMessage(QueenSew.jid,'Poll Option Is Undefined.. Please Use This Type\n\n.poll poll header/poll list name/poll1,poll2,poll3,poll4', MessageType.text)
 }
}));

AouraQueen['IntroduceCMD']({
        pattern: 'setstatus ?(.*)',
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenAoura, input) => {
try {
await SendMessageToStatus(QueenAoura, input)
} catch (e) {
 return await AouraQueen.client.sendMessage(AouraQueen.jid,'I Can\'t Post This Status', MessageType.text)
}
}));
