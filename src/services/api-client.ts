import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d48a0210cb3e4075823025b0bbb484c3",
  },
});
