const {Router} = require('express');

const router = Router()

router.get('/login', (req, res) => {
    res.json({
        message: 'Index'
    })
})

module.exports = router