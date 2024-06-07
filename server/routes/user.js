import express from 'express';
// const express = require('express');
const router=express.Router()
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import puppeteer from 'puppeteer';
import {DataModel} from '../models/data.js';

const PdfParse = require('pdf-parse');

router.post('/link',async (req, res) => {
    const {link} = req.body;
    // console.log(link)
    const record=await DataModel.findOne({name:link})
    if(record){
        console.log("found");
        return res.send(record.data)
    }
    console.log("not found");
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
        const newData=new DataModel({
            name:link,
            data:extractedText
        })
        await newData.save();
        res.send(extractedText)
    })();
        
})

router.post('/file',async (req, res) => { 
    const file = req.files.file
    // console.log(req.body.name)
    const record=await DataModel.findOne({name:req.body.name})
    if(record){
        console.log("found");
        return res.send(record.data)
    }

    PdfParse(file).then(async(fle)=>{
        console.log("not found");
        const newData=new DataModel({
            name:req.body.name,
            data:fle.text
        })
        await newData.save();
        // text=fle.text;
        res.send(fle.text);
        });
    // console.log(text);
})


export default router;