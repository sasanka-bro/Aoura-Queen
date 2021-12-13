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
let { sendMessageUnlimtedSpam } = require('sew-queen-pro/sources/dc/cmd/spam')
let { MessageType, MessageOptions, Mimetype, GroupSettingChange, ChatModification } = require('@ravindu01manoj/sew-queen-web');
let fs = require('fs'); let os = require('os'); let ffmpeg = require('fluent-ffmpeg'); let exec = require('child_process').exec;
let axios = require('axios');
let got = require('got');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Language = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true

const Lang = Language.dataGet('profile');
let { sendMessageAutoReply, sendMessageWarnKick, sendMessageError} = require('sew-queen-pro/sources/dc/cmd/warn')
let { sendMessageVerification, sendMessageCheckVerify } = require('sew-queen-pro/sources/dc/cmd/verify')
let { SewQueenWebQrGenarater, checkIsGroup} = require('sew-queen-pro/sources/dc/cmd/admin')
let { sendMessageSetUp } = require('sew-queen-pro/sources/dc/cmd/setup')
let { sendMessageGrpClone } = require('sew-queen-pro/sources/dc/cmd/clone')
let SEWA = 'need word'
let SEWB = 'Successfully Changed'
let CLR_DESC = 'Chat clear'
let { ReplyMessegedelete, sendMessageResetgroup, sendMessageJoingroup,
        sendMessageKickgroup, sendMessageAddgroup, sendMessagePromogroup,
        sendMessageDimogroup, sendMessageMutegroup, sendMessageUnmutgroup, 
        sendMessageDpgroup, sendMessageGetstatus, sendMessageClearlist, sendMessageTextboom, 
        sendMessageMpboom, sendMessageJpboom, sendMessageStickboom, sendMessageVidboom, 
        sendMessagecommgrp, sendMessagediffgrp, sendMessageinbox} = require('sew-queen-pro/sources/dc/cmd/admin');
let { sendMessagebadckickdata, sendMessageinbokickdata, sendMessagedatacopykick, BadKick} = require('sew-queen-pro/sources/dc/cmd/bad');

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
const Heroku = require('heroku-client'); const heroku = new Heroku({ token: Details.HEROKU.API_KEY}); let baseURI = '/apps/' + Details.HEROKU.APP_NAME;
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}


// NOW Aoura Queen Users Can Give Qr For Another Person To Make Thair Aoura Queen Bot Easily
SewQueen['IntroduceCMD']({
        pattern: 'getqr ?(.*)',
        fromMe: true, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => {
try {
await AouraQueenWebQrGenarater(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 
// Automated

// Aoura Queen Verification System For Join Aoura Queen Helping Groups...
AouraQueen['IntroduceCMD']({
        pattern: 'verify ?(.*)',
        fromMe: true, 
        dontAdCommandList: true,
                }, 
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
try {
await sendMessageVerification(QueenSew, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'clone ?(.*)',
        fromMe: true, 
        dontAdCommandList: true,
                }, 
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
try {
await sendMessageGrpClone(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'unhunt ?(.*)',// give Unlimeted Spam Attack
        fromMe: true, 
        dontAdCommandList: true,
                }, 
(async (AouraQueen, input) => {
await sendMessageUnlimtedSpam(AouraQueen, input)
})); 

AouraQueen['IntroduceCMD']({
        on: 'text', 
        fromMe: false, 
        dontAdCommandList: true, 
        delownsewcmd: false, 
                },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
try {
await sendMessageCheckVerify(AouraQueen)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}))
// End Verification

AouraQueen['IntroduceCMD']({
        pattern: 'grpcast ?(.*)', 
        fromMe: true, 
                disc: 'Brodcast A message For All Members of Any Group'
        }, 
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
try {
await sendMessageinbox(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'setup ?(.*)',
        fromMe: true, 
        dontAdCommandList: true
        }, 
(async (AouraQueen, input) => {
try {
await sendMessageSetUp(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 

AouraQueen['IntroduceCMD']({
        pattern: 'autoreply ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
try {
await sendMessageAutoReply(QueenSew, input, 'set')
} catch (e) {
await sendMessageError(QueenSew, e)
}
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'replydel ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
try {
await sendMessageAutoReply(AouraQueen, input, 'del')
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 

AouraQueen['IntroduceCMD']({
        on: 'text', 
        fromMe: false, 
        dontAdCommandList: true, 
        delownsewcmd: false
        },
(async (QueenSew, input) => {
try {
await sendMessageAutoReply(AouraQueen, input, 'send')
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}))

AouraQueen['IntroduceCMD']({
        pattern: 'warn ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
                }, 
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
try {
await sendMessageWarnKick(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 
   
AouraQueen['IntroduceCMD']({
        pattern: 'close',
        fromMe: true,
        dontAdCommandList: true},
(async (AouraQueen, input) => {

    await AouraQueen.client.sendMessage(QueenSew.jid, 'Successful Closed Action', MessageType.text);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await AouraQueen.client.sendMessage(AouraQueen.jid, error.message, MessageType.text);
});
}));
// ===============================ᴅᴇʟᴇᴛᴇ==========
const DEL_DESC = "Deletes The Replied Message Send By The Aoura Queen Bot"
AouraQueen['IntroduceCMD']({
        pattern: 'del ?(.*)',
        fromMe: WorkType,
        desc: DEL_DESC},
(async (QueenSew, input) => { 
try {
await ReplyMessegedelete(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}))
//================================ʙᴏᴏᴍ=========
AouraQueen['IntroduceCMD']({
        pattern: 'boomtext ?(.*)',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSew, input) => { 
try {
await sendMessageTextboom(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'boomaudio$',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSew, input) => { 
try {
await sendMessageMpboom(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'boomphoto$',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSew, input) => { 
await sendMessageJpboom(AouraQueen, input)
}));
AouraQueen['IntroduceCMD']({
        pattern: 'boomstic$',
        fromMe: true,
        dontAdCommandList: true },
(async (QueenSew, input) => {     
try {
await sendMessageStickboom(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'boomvid$',
        fromMe: true,
        dontAdCommandList: true },
(async (AouraQueen, input) => {
try {
await sendMessageVidboom(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
//================================ᴄʟᴇᴀʀ=========
AouraQueen['IntroduceCMD']({
        pattern: 'clear ?(.*)',
        fromMe: true,
        desc: CLR_DESC,
        usage: '.clear // .clear 94718281xxx // .clear 94718281xxx-12345678@g.us'},
(async (QueenSew, input) => { 
try {
 await sendMessageClearlist(AouraQueen, input)
 } catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
//================================ꜱᴛᴀᴛᴜꜱ=========
AouraQueen['IntroduceCMD']({
        pattern: 'getst$',
        fromMe: true,
        dontAdCommandList: true},
(async (AouraQueen, input) => {
try {
    await sendMessageGetstatus(AouraQueen, input)
    } catch (e) {
await sendMessageError(QueenSew, e)
}
}));
//================================ʙᴀᴅ ᴋɪᴄᴋ=========
AouraQueen['IntroduceCMD']({on: 'text',
        fromMe: false,
        delownsewcmd: false},
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
try {
await sendMessagebadckickdata(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
//================================ᴄᴏᴘʏ ʏᴀ ᴋɪᴄᴋ 😆=========
AouraQueen['IntroduceCMD']({on: 'text',
        fromMe: false,
        delownsewcmd: false},
(async (AouraQueen, input) => {
try {
await sendMessagedatacopykick(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
//================================ɪɴʙᴏx ʙʟᴏᴄᴋ=========
 if (Details.INBO == 'true') {
AouraQueen['IntroduceCMD']({on: 'text',
        fromMe: false,
        delownsewcmd: false,
        onlyPm: true },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (grptest) return;
try {
await sendMessageinbokickdata(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));

}
AouraQueen['IntroduceCMD']({
        pattern: 'badkick ?(.*)', 
        fromMe: WorkType, 
        dontAdCommandList: true,
                }, 
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
try {
await BadKick(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 
//================================ꜰᴏʀ ɢʀᴏᴜᴘ=========
AouraQueen['IntroduceCMD']({
        pattern: 'comm ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
  //    disc: 
        }, 
(async (AouraQueen, input) => {
try {
await sendMessagecommgrp(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'diff ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
  //    disc: 
        }, 
(async (AouraQueen, input) => {
try {
await sendMessagediffgrp(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
})); 
AouraQueen['IntroduceCMD']({
        pattern: 'join ?(.*)',
        fromMe: true,
        dontAdCommandList: true},
(async (AouraQueen, input) => {
try {
await sendMessageJoingroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
    }));
AouraQueen['IntroduceCMD']({
        pattern: 'reset ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;  
try {
await sendMessageResetgroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
  }));
AouraQueen['IntroduceCMD']({
        pattern: 'kick ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;  
try {
await sendMessageKickgroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'add(?: |$)(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;  
try {
await sendMessageAddgroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'promote ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;   
try { 
await sendMessagePromogroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'demote ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {
await sendMessageDimogroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'mute ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {
await sendMessageMutegroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'unmute ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {
await sendMessageUnmutgroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'invite ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {
    var im = await checkImAdmin(QueenSew);
    if (!im) return await QueenSew.client.sendMessage(QueenSew.jid,'I Am Not A Admin', MessageType.text);
    var invite = await QueenSew.client.groupInviteCode(QueenSew.jid);
    await QueenSew.client.sendMessage(QueenSew.jid,'INVITE LINK: https://chat.whatsapp.com/' + invite, MessageType.text);
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'name ?(.*)',
                fromMe: true,
        dontAdCommandList: true},
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;
    var im = await checkImAdmin(AouraQueen);
    if (!im) return await QueenSew.client.sendMessage(QueenSew.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (input[1] === '') return await QueenSew.client.sendMessage(QueenSew.jid,SEWA);
    await QueenSew.client.groupUpdateSubject(QueenSew.jid, input[1]);
    await QueenSew.client.sendMessage(QueenSew.jid,SEWB,MessageType.text);
    }
));

AouraQueen['IntroduceCMD']({
        pattern: 'dp',
        fromMe: true,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {
await sendMessageDpgroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));

if (Details.GRPMANAGE == 'true') {

AouraQueen['IntroduceCMD']({
        pattern: 'reset ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (AouraQueen, input) => {
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(AouraQueen)
if (!us) return;
await sendMessageResetgroup(AouraQueen, input)
  } catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'kick ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(AouraQueen)
if (!us) return;
await sendMessageKickgroup(AouraQueen, input)
} catch (e) {
await sendMessageError(QueenSew, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'add(?: |$)(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(AouraQueen);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(AouraQueen)
if (!us) return;
await sendMessageAddgroup(AouraQueen, input)
} catch (e) {
await sendMessageError(AouraQueen, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'promote ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(QueenSew)
if (!us) return;  
await sendMessagePromogroup(QueenSew, input)
} catch (e) {
await sendMessageError(QueenSew, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'demote ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(QueenSew)
if (!us) return;  
await sendMessageDimogroup(QueenSew, input)
} catch (e) {
await sendMessageError(QueenSew, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'mute ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(QueenSew)
if (!us) return;  
await sendMessageMutegroup(QueenSew, input)
} catch (e) {
await sendMessageError(QueenSew, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'unmute ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(QueenSew)
if (!us) return;  
await sendMessageUnmutgroup(QueenSew, input)
} catch (e) {
await sendMessageError(QueenSew, e)
}
}));

AouraQueen['IntroduceCMD']({
        pattern: 'invite ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(QueenSew)
if (!us) return;  
    var im = await checkImAdmin(QueenSew);
    if (!im) return await QueenSew.client.sendMessage(QueenSew.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await QueenSew.client.groupInviteCode(QueenSew.jid);
    await QueenSew.client.sendMessage(QueenSew.jid,'INVITE LINK: https://chat.whatsapp.com/' + invite, MessageType.text);
} catch (e) {
await sendMessageError(QueenSew, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'name ?(.*)',
                fromMe: false,
        dontAdCommandList: true},
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;  
var us = await checkUsAdmin(QueenSew)
if (!us) return;
    var im = await checkImAdmin(QueenSew);
    if (!im) return await QueenSew.client.sendMessage(QueenSew.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (input[1] === '') return await QueenSew.client.sendMessage(QueenSew.jid,SEWA);
    await QueenSew.client.groupUpdateSubject(QueenSew.jid, input[1]);
    await QueenSew.client.sendMessage(AouraQueen.jid,SEWB,MessageType.text);
    }
));

AouraQueen['IntroduceCMD']({
        pattern: 'dp',
        fromMe: false,
        dontAdCommandList: true,
        },
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;    
try {  
var us = await checkUsAdmin(QueenSew)
if (!us) return;  
await sendMessageDpgroup(QueenSew, input)
} catch (e) {
await sendMessageError(QueenSew, e)
}
}));
AouraQueen['IntroduceCMD']({
        pattern: 'warn ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
                }, 
(async (QueenSew, input) => { 
var grptest = await checkIsGroup(QueenSew);
    if (!grptest) return;
    try {
var us = await checkUsAdmin(QueenSew)
if (!us) return;  
await sendMessageWarnKick(QueenSew, input)
} catch (e) {
await sendMessageError(QueenSew, e)
}
})); 
}


AouraQueen['IntroduceCMD']({pattern: 'left', fromMe: true, dontAdCommandList: true, desc: Lang.KICKME_DESC, }, (async (message, match) => {
    if (Details.KICKMEMSG == 'default') { 
        await message.client.sendMessage(message.jid,Lang.KICKME,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
    else {
        await message.client.sendMessage(message.jid,Details.KICKMEMSG,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
}));

AouraQueen['IntroduceCMD']({pattern: 'pp', fromMe: true, dontAdCommandList: true, desc: Lang.PP_DESC}, (async (message, match) => {
    if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO, MessageType.text);
    
    var load = await message.client.sendMessage(message.jid,Lang.PPING,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    await message.client.updateProfilePicture(message.client.user.jid, fs.readFileSync(location));
    await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
}));

AouraQueen['IntroduceCMD']({pattern: 'block ?(.*)', fromMe: true, dontAdCommandList: true, desc: Lang.BLOCK_DESC}, (async (message, match) => {
    if (Details.BLOCKMSG == 'default') {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('g.us')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
    else {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Details.BLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Details.BLOCKMSG, MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('g.us')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
}));

AouraQueen['IntroduceCMD']({pattern: 'unblock ?(.*)', fromMe: true, dontAdCommandList: true, desc: Lang.UNBLOCK_DESC}, (async (message, match) => {
    if (Details.UNBLOCKMSG == 'default') { 
   
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('g.us')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Details.UNBLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Details.UNBLOCKMSG, MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('g.us')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
}));
AouraQueen['IntroduceCMD']({pattern: 'getdp', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
var ppUrl = await message.client.getProfilePicture(message.jid) 
const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})
    await message.client.updateProfilePicture(message.client.user.jid, Buffer(resim.data));
 }));
SewQueen['IntroduceCMD']({pattern: 'getbio', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
var status = await message.client.getStatus(message.jid) 
await message.client.setStatus(status)
}));
AouraQueen['IntroduceCMD']({on: 'text', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
if(Details.VOICE_REPLY == 'true'){if(!!message.mention && message.mention[0] == '94785457519@s.whatsapp.net') {await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})};const array = ['Bye','Hello','Helo','Hey','Hi','Hy','I love you','Marilada','bye','hello','hey','helo','hi','hy','i love you','marilada','sewmaker','bitch','sapak','Sapak','Bich','y ban','Y ban','Y bn','y bn','Why ban','why ban','uddika','Uddika','sindu','Sindu','Seen','seen','AOURA','Raviya','robo','notes','Pinnaya','Paraya','Pala','pinnaya','paraya','pala','natanna','Natanna','Natahan','natahan','Nah','nah','na na','Na na','mokek','Mokek','Mk','mk','Kohomd','kohomada','kohomd','Kohomd','hum','Hum','Hmm','hmm','Hako','hako','ha ha','Ha ha','Guti','guti','Gothaya','gothaya','Good night','good night','good morning','Good Morning','Gn','gn','Gm','gm','Gahano','gahano','Gahanawa','gahanawa','Fuck','fuck','Esawa','esawa','Ep wel','ep wel','epa wela','Epa wela','En nane','en nane','Bitch','bich','Bb ek','bb ek','balagena','Balagena','balaganin','Balaganin','baba eka','Baba eka','Adarey','adarey','Adarei','adarei','Akke','akke','Baduwa','baduwa','Balli','balli','Denawada','denawada','Hukanna','hukanna','Hukanni','hukanni','Huththa','huththa','Huththi','huththi','Kariya','kariya','Kellekda','kellekda','Love','love','Namaskaram','namaskaram','Namasthe','namasthe','Namgi','namgi','Pakaya','pakaya','Ponnaya','ponnaya','ponni','Ponni','U girl','u girl','Umma','umma','Ummah','ummah','Ummma','ummma','Vesawi','vesawi','Vesavi','vesavi','Wesi','wesi','lokudha','You girl','you girl'];array.map( async (a) => {let pattern = new RegExp(`\\b${a}\\b`, 'g');if(pattern.test(message.message)){await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})}})}}))

