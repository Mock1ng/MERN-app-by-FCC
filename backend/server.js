const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser'); BODY-PARSER UDAH GA DIPAKE KARENA EXPRESS UDAH GOKIL

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// CONNECT THE DATABASE
const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, {
    useNewUrlParser: true
});
mongoose.connection.once('open', () => {
    console.log('Database has connected')
})

// PORT
app.listen(port, () => console.log(`server has running on: ${port}`))