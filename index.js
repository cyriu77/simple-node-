const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')
const exphbs = require('express-handlebars')
const path = require('path')
const { static } = require('express')
const { join } = require('path')


const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start(){
    try {
        await mongoose.connect( 'xxxxxxxxxxxxxxxxxxxxxxxx please paste mongo url', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log("server has been started dude")
        })
    } catch (err) {
        console.log(err)
    }
}

start()
