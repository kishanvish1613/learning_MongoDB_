import express from 'express';
import {connect} from './config/database.js';

const app = express();
const PORT = 3000;

import TweetService from './services/tweet-service.js';

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await connect(); 
    console.log('Mongodb connected');  
    let ser = new TweetService();
    await ser.create({content: 'this #indVSpak #match'});

});
 