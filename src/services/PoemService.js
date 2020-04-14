import axios from "axios"

export default {
  async getPoems(req) {
    let res = await axios.get(`http://localhost:8080/poems/${req.search}/${req.filter}`)
    return res.data
  }
}