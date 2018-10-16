const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const public = 'public'
const app = require('cors')

app.use(cors())

app.use((req, res, next) => {
    console.log(`recibidakjhkj: ${req.url}`)
    next()
})

app.use(express.static( path.join(__dirname, public)))

app.get('/api/')

/*app.get('/', (req, res)=> {
    res.send(`<h1> hkjhkjh</h1>`)
})
app.get('/pepe', (req, res)=> {
    res.send(`<h1> holapepe</h1>`)
})*/

app.listen(port, ()=>{
    console.log('Serverkjkjkj'+ port)
})
