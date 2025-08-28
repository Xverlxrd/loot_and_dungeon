const {Router} = require('express');

const router = Router()

router.post('/login', (req, res) => {
    res.json({
        message: 'Index'
    })
})

module.exports = router