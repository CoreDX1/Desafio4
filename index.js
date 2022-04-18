const express = require('express')
const productosRouter = require('./router/productos')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', productosRouter)

app.listen(PORT, () => {
  console.log('Server on')
})
