const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const postRoutes = require('./routes/posts');


const app = express() ;
const connectionUrl = 'mongodb+srv://abdeladim:pBqTtEbxVeaea229@cluster0.rc6xm.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 ; 



app.use('/posts', postRoutes); 
app.use(bodyparser.json({ limit: '30mb', extended: true}));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
.catch(() => console.log(error.message));



mongoose.set('useFindAndModify', false);




