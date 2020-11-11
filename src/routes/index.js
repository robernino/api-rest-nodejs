const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Google',
        website: 'google.com.mx'
    };
    res.json(data);
});  

module.exports = router;