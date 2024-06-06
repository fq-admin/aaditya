import express from 'express';
// const express = require('express');
const router=express.Router()
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import puppeteer from 'puppeteer';

const PdfParse = require('pdf-parse');
var text="fetching data...";

router.post('/link', (req, res) => {
    const {link} = req.body;
    // console.log(link)
    (async () => {
        const browser = await puppeteer.launch({
            headless: true
        });
        const page = (await browser.pages())[0];
        await page.goto(link);
        const extractedText = await page.$eval('*', (el) => el.innerText);
        // console.log(extractedText);
        await browser.close();
        // text=extractedText;
        res.send(extractedText)
    })();

})

router.post('/file', (req, res) => { 
    const file = req.files.file
    // console.log(file)
    if(!file){
        res.status(400);
    }
    PdfParse(file).then(function(data) {
        // console.log(data.text);
        res.send(data.text);
    });
})


export default router;