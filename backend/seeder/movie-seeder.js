var Movie =require ('../models/Movie')
var Mongoose = require ('mongoose')

Mongoose.connect('mongodb://localhost:27017/videocart', {useNewUrlParser: true})

var movies = [
    new Movie({
        title: "Gravity",
        duration: 90,
        year:2013,
        description: "Winner of 7 Academy Awards®, including Best Director! Astronauts Ryan Stone and Matt Kowalski are on a routine spacewalk when disaster strikes. Their shuttle is destroyed, leaving them alone in space - tethered to nothing but each other.",
        director: "Alfonso Cuarón",
        starring: "Sandra Bullock, George Clooney",
        genres: "Fiction, Suspense",
        subtitles:"English [CC]" ,
        audioLanguage: "English, हिन्दी",
        imagePath: "assets/gravity.jpg",
        imageDetailsPath: "assets/gravityDetails.jpg",
        price: 100
    }),
    new Movie({
        title:"I Am Legend",
        duration:100,
        year:2007,
        description:"Robert Neville is a brilliant scientist, but even he could not contain the terrible virus that was unstoppable. Neville is now the last human survivor in what is left of the world.",
        director:"Francis Lawrence",
        starring:"Will Smith, Alice Braga, Dash Mihok",
        genres:"Fiction, Horror",        
        subtitles:"English [CC]",
        audioLanguage:"English, हिन्दी ",
        imagePath: "assets/legend.jpg",
        imageDetailsPath: "assets/legendDetails.jpg",
        price: 125
    }),
    new Movie({
        title:"San Andreas",
        duration:114,
        year:2015,
        description:"After the San Andreas Fault triggered a magnitude 9 earthquake, a rescue helicopter pilot and his estranged wife make their way to San Francisco to save their only daughter.",
        director:"Brad Peyton",
        starring:"Dwayne Johnson, Carla Gugino, Alexandra Daddario",
        genres:"Action",
        subtitles:"English [CC]",
        audioLanguage:"English, हिन्दी, தமிழ்",
        imagePath:"assets/sanAndreas.jpg",
        imageDetailsPath: "assets/sanAndreasDetails.jpg",
        price: 120
    })
]

var done = 0
for(let i = 0; i<movies.length;i++){
    movies[i].save(function(err,result){
        done++
        if (done===movies.length)
            exit()
    })
}

function exit(){
    Mongoose.disconnect()
}