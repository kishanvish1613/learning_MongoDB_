import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

import apiRoutes from './routes/index.js';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', apiRoutes);

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await connect(); 
    console.log('Mongodb connected');  
});  