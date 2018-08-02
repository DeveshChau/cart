var TVShow =require ('../models/TvShow')
var Mongoose = require ('mongoose')

Mongoose.connect('mongodb://localhost:27017/videocart', {useNewUrlParser: true})

var tvshow = [
    new TVShow({
        title:"The Office",
        seasons:9,
        year:2005,
        description:"In this first season of The Office, Dunder Mifflin Regional Manager Michael Scott (Steve Carell) leads the documentary team and his staff on a journey through inappropriate behavior, well-intentioned but misguided comments and a myriad of poor management techniques.",
        starring:"Steve Carell, B.J. Novak, Jenna Fischer",
        genres:"Comedy",
        subtitle:"العربية, English [CC], हिन्दी, Italiano, 한국어, Nederlands, Polski, Русский, தமிழ், Türkçe, 中文（简体）, 中文（繁體）",
        audioLanguage:"Deutsch, English, Español (España), Español (Latinoamérica), Français, Português",
        imagePath:"assets/office.jpg"
    }),
    new TVShow({
        title:"Malgudi Days Swami & Friends",
        seasons:2,
        year:1987,
        description:"Swami and Friends revolves around the life of ten-year-old Swaminathan, or Swami as he is known. Swami portrays the growing pangs of a boy who despises school, as he makes excuses and roams around Malgudi with his friends.",
        starring:"Master Manjunath, Girish Karnad",
        genres:"International, Drama",
        subtitle:"English [CC]",
        audioLanguage:"हिन्दी",
        imagePath:"assets/malgudiDays.jpg"
    }),
    new TVShow({
        title:"Grey's Anatomy",
        seasons:13,
        year:2005,
        description:"Meet Meredith Grey, a brilliant first-year surgical intern at Seattle Grace Hospital. Together with her fellow residents-in-training, Meredith navigates her way through the daily traumas and social land mines of life inside the hospital and out in the real world.",
        starring:"",
        genres:"Drama",
        subtitle:"English [CC]",
        audioLanguage:"English",
        imagePath:"assets/greysAnatomy.jpg"
    })
]

var done = 0
for(let i = 0; i<tvshow.length;i++){
    tvshow[i].save(function(err,result){
        done++
        if (done===tvshow.length)
            exit()
    })
}

function exit(){
    Mongoose.disconnect()
}