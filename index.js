const express = require('express')
const app = express()


app.listen((process.env.PORT || 5000), () => {
    console.log('API now available on http://localhost:5050 !');
})


app.get('/', async (req, res) => {
    res.status(200).send('Coucou !');

});