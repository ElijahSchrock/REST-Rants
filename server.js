require('dotenv').config();
const express = require('express');
const { get } = require('express/lib/response');
const res = require('express/lib/response');
const methodOverride = require('method-override');

const app = express();

//Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

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

module.exports.Place = ('./places');
module.exports.Comment = require('./comment');