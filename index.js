const express = require('express')
const app = express()
const puppeteer = require('puppeteer');

let page
app.listen((process.env.PORT || 5000), async () => {
    console.log('API now available on http://localhost:5050 !');


})


app.get('/test', async (req, res) => {
    const browser = await puppeteer.launch({
        // headless: false,
    });
    page = await browser.newPage();
    await page.goto('https://rbixm.qualtrics.com/jfe/form/SV_9MHgHFvPm0OEHr0?CountryCode=FRA&Q_Language=FR&PT=1');
    let htmlSoup = await page.$eval('.QuestionText', el => el.innerHTML)

    res.status(200).send(htmlSoup);

});


app.get('/', async (req, res) => {
    res.status(200).send("coucou");

});