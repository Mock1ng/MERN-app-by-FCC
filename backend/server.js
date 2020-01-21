const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser'); BODY-PARSER UDAH GA DIPAKE KARENA EXPRESS UDAH GOKIL

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello there!')
})

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// CONNECT THE DATABASE
const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.connection.once('open', () => {
    console.log('Database has been connected')
});

// Import Routes
// exercises route
const exercisesRoute = require('./routes/exercises');
app.use('/exercises', exercisesRoute);
// users route
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

// PORT
app.listen(port, () => console.log(`server has running on: ${port}`))