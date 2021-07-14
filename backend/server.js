import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const PORT = 8000;

//Components ..
import Connection from './database/db.js';
import router from './routes/route.js'

var app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router); 

// Router.post('create',(req,res) =>{
//     console.log(req.body);
// });

app.listen(PORT,()=>console.log('Server Started at Port '+PORT));



Connection();