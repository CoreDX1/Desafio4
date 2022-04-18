const express = require('express')
const { Router } = express
let router = new Router()

const arr = require('./arr')
console.log(arr)


router.get('/productos', (req, res) => {
  res.send({data:arr})
})

router.get('/productos/:id', (req, res) => {
  let id = req.params.id
  let arrNew = arr.filter((x) =>{ 
    return x.id == id
  })
  console.log(arrNew)
  res.send(arrNew)
})


router.post('/productos', (req, res) => {
  console.log(req.body)
  let productosNuevos = {
    title: req.body.title,
    price: req.body.price,
    thumbnail : req.body.thumbnail,
    id : arr.length + 1
  }
  arr.push(productosNuevos)
  res.send('Productos Guardados')
})

router.put('/productos/:id', (req, res) => {
  let id = +req.params.id
  let body = req.body
  let index = arr.findIndex((st) => st.id === id)
  let updateProduct = {id : id, ...body}
  arr[index] = updateProduct
  res.send(updateProduct)
})

router.delete('/productos/:id', (req, res) => {
  let id = +req.params.id
  let index = arr.findIndex((pro) => pro.id === id)
  let deleteProduct = arr.splice(index, 1)
  res.send(deleteProduct)
})

module.exports = router
