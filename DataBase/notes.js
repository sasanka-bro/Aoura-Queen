/* 

Aoura Queen Whatsapp Bot

Telegram: https://t.me/Yuren_Sasanka
Licensed under the  GPL-3.0 License;

Coded By Ravindu Manoj

*/ 
let DataPack = require('aoura-queen-pro');
let SewQueen = require('aoura-queen-pro/sources/dc/handler');
let Details = require('aoura-queen-pro/sources/dc/Details');
const { DataTypes } = require('sequelize');
const NotesDB = Details.DATABASE.define('notes', {
    note: { type: DataTypes.TEXT, allowNull: false }
});
async function getNotes() {
    const Notes = await NotesDB.findAll()
    return Notes
}
async function saveNote(note) {
    return await NotesDB.create({ note });
}
async function deleteAllNotes() {
    return await NotesDB.destroy({
        where: {},
        truncate: true
 })}
module.exports = { NotesDB, getNotes, saveNote, deleteAllNotes };
