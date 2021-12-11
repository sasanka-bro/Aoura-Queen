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
let os = require('os');
let ffmpeg = require('fluent-ffmpeg');
let exec = require('child_process').exec;
let axios = require('axios');
let got = require('got');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let DataHelp = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true

let fs = require('fs/promises')
let path = require('path')
let NotesDB = require('../DataBase/notes');
let DATA = DataHelp.dataGet('notes')
let SAVED = " *The Owner MSG👇*"
AouraQueen['IntroduceCMD']({ pattern: 'notes', fromMe: WorkType, desc: DATA.NOTES_USAGE }, async (message, input) => {


    let _notes = await NotesDB.getNotes()
    let notes = []
    _notes.map(note => {
        if (!note.note.includes('IMG;;;')) {
            notes.push('✧' + note.note)
        }
    })

    if (notes.length < 1) {
        return await message.sendMessage(DATA.NO_SAVED)
    }

    await message.sendMessage(SAVED)

    await message.sendMessage(notes.join('\n\n'))
    _notes.filter(note => note.note.includes('IMG;;;')).forEach(async (note) => {
        let imageName = note.note.replace('IMG;;;', '')
        let image = await fs.readFile(path.resolve('media', imageName))
        await message.sendMessage(image, MessageType.image)
    })


})



AouraQueen['IntroduceCMD']({ pattern: 'save ?(.*)', fromMe: true, desc: DATA.SAVE_USAGE }, async (message, input) => {

    let userNote = input[1]

    if (!userNote && !message.reply_message) {
        await message.sendMessage(DATA.REPLY)

        return
    }

    if (userNote) {
        await NotesDB.saveNote(userNote)
        await message.sendMessage(DATA.SUCCESSFULLY_ADDED, MessageType.text)

        return

    } else if (!userNote && message.reply_message) {
        if (!message.reply_message.video) {

            if (message.reply_message.image) {
                let savedFileName = await message.client.downloadAndSaveMediaMessage({
                    key: {
                        remoteJid: message.reply_message.jid,
                        id: message.reply_message.id
                    },
                    message: message.reply_message.data.quotedMessage
                })

                let randomFileName = savedFileName.split('.')[0] + Math.floor(Math.random() * 50) + path.extname(savedFileName)
                await fs.copyFile(savedFileName, path.resolve('media', randomFileName))
                await NotesDB.saveNote("IMG;;;" + randomFileName)
                await message.sendMessage(DATA.SUCCESSFULLY_ADDED, MessageType.text)


            }

            await NotesDB.saveNote(message.reply_message.text)
            await message.sendMessage(DATA.SUCCESSFULLY_ADDED, MessageType.text)

            return
        }
    } else {
        await message.sendMessage(DATA.UNSUCCESSFUL)

        return
    }
})

AouraQueen['IntroduceCMD']({ pattern: 'deleteNotes', fromMe: true, desc: DATA.DELETE_USAGE }, async (message, input) => {

    await NotesDB.deleteAllNotes()

    let mediaFolder = await fs.readdir(path.resolve('media'))

    mediaFolder.forEach(async (file) => {
        await fs.unlink(path.resolve('media', file))
    })

    return await message.sendMessage(DATA.SUCCESSFULLY_DELETED)
})



