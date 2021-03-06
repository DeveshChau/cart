var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var Cart = require('./models/Cart')

import Movie from './models/Movie'
import TvShow from './models/TvShow'

const app = express()
const router = express.Router()
mongoose.connect('mongodb://localhost:27017/videocart', {useNewUrlParser: true})

app.use(cors())

app.use(bodyParser.json())

app.use(session({
    secret:'mySuperSecret',
    resave:false,
    saveUninitialized:false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge:5000}
}))

app.use(function(req,res,next){
    res.locals.session = req.session
    next()
})


router.route('/storefront/movies').get((req,res)=>{
    Movie.find((err,movies)=>{
        if (err)
         console.log(err);
        else
        res.json(movies)
    })
})

router.route('/storefront/tvshows').get((req,res)=>{
    TvShow.find((err,tvshows)=>{
        if (err)
            console.log(err);
        else
            res.json(tvshows)
    })
})

router.route('/movies/details/:id').get((req,res)=>{
    Movie.findById(req.params.id,(err,movie)=>{
        console.log(movie);
        
        if (err)
            console.log(err);
        else
            res.json(movie)
    })
})

router.route('/add-to-cart/:id').get((req,res)=>{
    var id = req.params.id
    var cart = new Cart(req.session.cart ? req.session.cart : {})
    Movie.findById(id,function(err,movie){
        if (err){
            return res.redirect('/')
        }
        cart.add(movie,movie.id)
        req.session.cart = cart
        res.send(cart)
    })
})

app.use('/',router) 
app.listen(4000, ()=>{console.log("server running 4000");
})