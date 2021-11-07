// required dependencies
const path = require('path');
const router = require('express').Router();

// route to send notes.html page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
// route to send index.html page
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;