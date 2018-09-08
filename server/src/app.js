const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express() 
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res){
    res.send({
        msg: 'OK!'
    })
})

app.listen(8081, () => console.log('Приложение запущено на порту 8081'))