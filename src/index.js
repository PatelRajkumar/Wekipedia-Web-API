const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../public/views')
const partialPath = path.join(__dirname, "../public/partials")
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))
app.set('views', viewsPath)
app.get('', (req, res) => {
    res.render('index.hbs')
})
app.listen(8000, () => console.log("server is running......"));