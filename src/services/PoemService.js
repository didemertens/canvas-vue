import axios from "axios"

export default {
  async getPoems(req) {
    let res = await axios.get(`https://poemsfinder.herokuapp.com/poems/${req.search}/${req.filter}`)
    return res.data
  }
}