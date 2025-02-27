import axios from "axios";

export default axios.create({
  baseURL: "https://pern-clone-backend.onrender.com/api/v1/restaurants",
});
