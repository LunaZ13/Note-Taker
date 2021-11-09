// required dependencies
const fs = require("fs");
const path = require("path");
// function to filter JSON data by id
function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
}
// function to create a note
function createNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notes , null, 2)
    );
    return note;
}
// function to validate note
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    findById,
    createNote,
    validateNote
};