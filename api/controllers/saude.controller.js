const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false, data: { err }});
    }
})

module.exports = router