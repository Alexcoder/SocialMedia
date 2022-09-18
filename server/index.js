import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

//You may not use the normal require method
//Another way is to go to package.json and add one line below main-js which is "type" : "module",
//inside debug delete "test" and add "start" : "nodemon index.js"

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true })); //Setting up bodyParser to properly send request
app.use(cors());

app.use('/posts', postRoutes) //You can get this localhost/5000/posts
app.use('/user', userRoutes);
//Connecting application with database below
//https://www.mongodb.com/atlas/database

const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) //To connect to database
  .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)) ) //If connection is successful
  .catch((error)=> console.log(error.message) );

  mongoose.set('useFindAndModify', false); 
  //Makes sure we don't get warnings in the console