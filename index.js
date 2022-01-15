require('dotenv').config()
const express = require('express');
const { get } = require('express/lib/response');
const res = require('express/lib/response');

const app = express();

//Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

//Controllers & Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//Listen for PORT conenections
app.listen(process.env.PORT, () => {
    console.log(`Awoken and landed on PORT ${process.env.PORT}`);
})