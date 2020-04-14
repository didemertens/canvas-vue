const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/poems/:search/:filter', async (req, res) => {
  try {
    const response = await axios.get(`http://poetrydb.org/${req.params.filter}/${req.params.search}/.json`)
    return res.send(response.data)
  } catch(error) {
    console.log(error)
  }
})

// getPoems()

const port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port)