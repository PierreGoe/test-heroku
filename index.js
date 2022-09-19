const express = require('express')
const app = express()


app.listen(9999, () => {
    console.log('API now available on http://localhost:5050 !');
})


app.get('/', async (req, res) => {
    res.status(200).send('Coucou !');

});