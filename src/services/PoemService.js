import axios from "axios"

export default {
  async getPoems(req) {
    let res = await axios.get(`http://localhost:5000/poems/${req.search}/${req.filter}`)
    return res.data
  }
}