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

function deleteNote(id, notes) {
    const newNotes = [];
    console.log('Original notes !!!', notes)
    console.log('id to delete', id)
    notes.forEach(note => {
       
        if (id == note.id) {         
        } else {
            console.log('HIT THE ELSE KEEP THIS NOTE')
            newNotes.push(note)
        } 
    });
    console.log('NEW NOTES missing one we wanted to delete',newNotes)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( newNotes, null, 2 )
    )
    return newNotes;
}

module.exports = {
    findById,
    createNote,
    validateNote,
    deleteNote
};