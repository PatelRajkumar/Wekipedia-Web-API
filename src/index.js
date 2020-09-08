const express = require('express')
const path = require('path')
const hbs = require('hbs')
    // var cors = require('cors')
const app = express()
    // app.use(cors())
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../public/views')
const partialPath = path.join(__dirname, "../public/partials")
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))
app.set('views', viewsPath)
    // var corsOptions = {
    //         origin: '*',
    //         optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    //     }
    // app.use(cors(corsOptions));


app.get('', (req, res) => {
    res.render('index.hbs', { title: 'rajkumar' })
})
app.listen(8000, () => console.log("server is running......"));