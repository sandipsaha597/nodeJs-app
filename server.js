const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('home route')
})

app.get('/sam', (req, res) => {
  res.send({
    name: 'sam',
    city: 'new york',
  })
})

app.get('/sandip', (req, res) => {
  res.send({
    name: 'Sandip',
    city: 'Howrah',
  })
})
const PORT = process.env.port || 80
// console.log(process)
app.listen(PORT, () => console.log(`app is running on port ${PORT}`))
