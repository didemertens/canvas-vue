const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(`${__dirname}/dist`))

app.get('/poems/:search/:filter', async (req, res) => {
  try {
    const response = await axios.get(`http://poetrydb.org/${req.params.filter}/${req.params.search}/.json`)
    return res.send(response.data)
  } catch(error) {
    console.log(error)
  }
})

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

const port = process.env.PORT || 5000
app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))