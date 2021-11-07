// required dependencies
const router = require('express').Router();

const { notes } = require('../db/db.json');
const { findById, createNote, validateNote } = require('../lib/notes');
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
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(404).send('This note is not properly formatted');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;