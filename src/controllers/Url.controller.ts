import { Request, response, Response } from "express";
import shortId from 'shortid';
import URL from '../models/Url.model'
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});


export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {        
        const {originURL} = req.body;
        const url = await URL.findOne({originURL});

        if (url) {
            res.json(url);
            return;
        }        

        const hash = shortId.generate();
        const shortURL = `${process.env.API_URL}/${hash}`;
        const newUrl = await URL.create({hash, shortURL, originURL});
        res.json(newUrl);
        
    };

    public async redirect(req: Request, res: Response): Promise<void> {        
        const {hash} = req.params;        
        const url = await URL.findOne({hash});

        if (url){            
            res.redirect(url.originURL);
            return       
        } 

        res.status(400).json({error: 'URL not found.'});
    }
}