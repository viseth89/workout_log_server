const Express = require('express');
const router = Express.Router();

router.get('/practice', (req, res) => {
    res.send("Hey!! This is a practice router!")
})

router.get('/about', (req, res) => {
    res.send('This is the about Route!')
})

module.exports = router;