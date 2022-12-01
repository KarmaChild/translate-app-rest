const express = require('express');
const translate = require('translate-google')
const app = express();
const cors = require("cors");
const port = 3000
app.use(express.json());
app.use(cors());

let TranslateConfig = {
    from: 'en',
    to: 'es'
}

app.post('/post', (req, res) => {
    translate(req.body.word,TranslateConfig).then(result => {
        console.log(result)
        res.send(req.body.word + " : " + result)
    }).catch(err => {
        console.log(err)
    })
})


app.listen(port,()=>console.log('Express server running at port '+port))