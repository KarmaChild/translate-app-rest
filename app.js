const express = require('express');
const translate = require("translate");
const app = express();
const cors = require("cors");
const port = 3000
app.use(express.json());
app.use(cors());


const translateString =  async (args) => {
    translate.engine = "google"; // Or "yandex", "libre", "deepl"
    translate.key = process.env.GOOGLE_KEY;
    const translated =  await translate(args.word,args.language)

    console.log(translated)
    return translated
}


app.post('/post', (req, res) => {
    let translated = translateString(req.body)
    res.send(translated)
})


app.listen(port,()=>console.log('Express server running at port '+port))