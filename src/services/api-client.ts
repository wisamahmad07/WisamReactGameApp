import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "00659d716399467e84ce225e70e0e643",
  },
});
