import axios from "axios"

export default {
  async getPoems(req) {
    // For development:
    // let res = await axios.get(`https://localhost:5000/poems/${req.search}/${req.filter}`)
    // For production:
    let res = await axios.get(`https://poemsfinder.herokuapp.com/poems/${req.search}/${req.filter}`)
    return res.data
  }
}