var mongoose = require('mongoose') 

const Schema = mongoose.Schema

let MovieSchema = new Schema({
    title: {
        type: String
    },
    duration: {
        type: Number
    },
    year:{
        type: Number
    },
    description: {
        type: String
    },
    director: {
        type: String
    },
    starring: {
        type: String
    },
    genres: {
        type: String
    },
    subtitles: {
        type: String
    },
    audioLanguage:{
        type: String
    },
    imagePath:{
        type: String
    },
    imageDetailsPath:{
        type: String
    },
    price:{
        type:Number
    }
})

module.exports = mongoose.model('Movie', MovieSchema)