const express = require('express')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 8000
const app = express()
const routes = require('./controllers/orders_controller.js')


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(routes)


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})