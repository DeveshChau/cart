var mongoose = require('mongoose')

const Schema = mongoose.Schema

let TvshowSchema = new Schema({
    title: {
        type: String
    },
    seasons: {
        type: Number
    },
    year:{
        type: Number
    },
    description: {
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
    }
})

module.exports = mongoose.model('TvShow', TvshowSchema)