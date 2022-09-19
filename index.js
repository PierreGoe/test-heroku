const express = require('express')
const app = express()
const puppeteer = require('puppeteer');


app.listen((process.env.PORT || 5000), async () => {
    console.log('API now available on http://localhost:5050 !');
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://rbixm.qualtrics.com/jfe/form/SV_9MHgHFvPm0OEHr0?CountryCode=FRA&Q_Language=FR&PT=1');
    console.log(await page.$eval('.QuestionText', el => el.innerHTML));

})


app.get('/', async (req, res) => {

    res.status(200).send('Coucou !');

});