const {Router} = require('express');

const router = Router()

router.get('/logout', (req, res) => {
    res.json({
        message: 'Index'
    })
})

module.exports = router