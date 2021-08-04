import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';

const PORT = 8000;

//Components ..
import Connection from './database/db.js';
import router from './routes/route.js'
// import User from './schema/user-schema.js';

var app = express();

// app.use(session({
//     secret:"Pranay is the Developer",
//     resave: false,
//     saveUninitialized:false
// }));

app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router); 

// Router.post('create',(req,res) =>{
//     console.log(req.body);
// });

app.listen(PORT,()=>console.log('Server Started at Port '+PORT));



Connection();