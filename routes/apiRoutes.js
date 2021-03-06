// required dependencies
const router = require('express').Router();

let  notes  = require('../db/db.json');
const { findById, createNote, validateNote, deleteNote } = require('../lib/notes');
// route to request notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});
// route to request notes by id
router.get('/notes:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});
// route to post a new note
router.post('/notes', (req, res) => {
    console.log("notes here", notes)
    req.body.id = notes.length +1;

    if (!validateNote(req.body)) {
        res.status(404).send('This note is not properly formatted');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});
// route to delete a note
router.delete('/notes/:id', (req, res) => {
   // console.log(req.params, notes)
    const newNotes = deleteNote(req.params.id, notes);
    notes = newNotes
    res.json(newNotes)
});

module.exports = router;