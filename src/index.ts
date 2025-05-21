import express from 'express'

const app = express()
const port = process.env.PORT || 3000

const products = [
  {id: 1, title: 'tomato'},
  {id: 2, title: 'orange'},
]
const addresses = [
  {id: 1, value: '123 Main St'},
  {id: 2, value: '456 Elm St'},
]

app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/products', (req, res) => {
  if (req.query.title) {
    const search = req.query.title.toString()
    res.send(products.filter((product) => product.title.includes(search)))
  }
  res.send(products)
})
app.get('/products/:id', (req, res) => {
  const product = products.find((product) => product.id === +req.params.id)
  if (!product) {
    res.status(404).send()
  } else {
    res.send(product)
  }
})

app.get('/addresses', (req, res) => {
  res.send(addresses)
})
app.get('/addresses/:id', (req, res) => {
  const address = addresses.find((address) => address.id === +req.params.id)
  if (!address) {
    res.status(404).send()
  } else {
    res.send(address)
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
